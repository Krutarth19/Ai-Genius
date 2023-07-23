import Heading from "@/components/Heading";
import { SubscriptionButton } from "@/components/subscription-button";
import { checkSubscription } from "@/lib/subscription";
import { Settings } from "lucide-react";


const SettingPage =async() =>{

    const isPro =await checkSubscription();
    return (
        <div>
            <Heading
            title="Settings"
            description="Manage account settings."
            icon={Settings}
            iconColor="text-gray-500"
            bgColor="bg-gray-700/10"
            />
            <div className="px-4 lg:px-8 space-y-4">
                <div className="text-sm text-muted-foreground">
                    {isPro ? "You are currently on Pro Plan.":"You are currently on Free Plan"}
                </div>
                    <SubscriptionButton isPro={isPro}/>
            </div>
        </div>
    )
}

export default SettingPage;