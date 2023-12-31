import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";
import { increaseApiLimits, checkApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    console.log(body);

    if (!userId) {
      return new NextResponse("Unauthorised", { status: 401 });
    }

    if (!configuration.apiKey) {
      return new NextResponse("Open AI Api Key Configuration Error!", {
        status: 500,
      });
    }

    const freeTrial = await checkApiLimit();
    const isPro =await checkSubscription();
    if (!freeTrial && !isPro) {
      return new NextResponse("Free Trial has Expired!", {
        status: 403,
      });
    }

    if (!messages) {
      return new NextResponse("Message is Required!", { status: 400 });
    }

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages,
    });

    if(!isPro){
      await increaseApiLimits();
    }
    return NextResponse.json(response.data.choices[0].message);
  } catch (error) {
    console.log("[CONVERSATION_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
