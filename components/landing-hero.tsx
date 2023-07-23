"use client";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import { Button } from "@/components/ui/button";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();
  return (
    <div className="text-white font-bold  py-36 space-y-5 text-center">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold space-y-5">
        <h1>The Best AI Tool For</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from bg-purple-400 to-pink-700">
          <Typewriter
            options={{
              strings: ["Conversation","Photo Generation","Video Generation","Chatbot","Code Generation","Audio Generation"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="text-sm md:text-xl font-light text-zinc-400">
            Create Content Using AI 10x Faster
        </div>
        <div>
            <Link href={isSignedIn? "/dashboard":"/sign-up"}>
                <Button variant="premium" className="md:text-lg p-4 md:p-6 rounded-full font-semibold">
                    Start Generation For Free
                </Button>
            </Link>
        </div>
        <div className="text-zinc-400 text-xs md:text-sm font-normal">
            No Credit Card Required
        </div>
      </div>

    </div>
  );
};
