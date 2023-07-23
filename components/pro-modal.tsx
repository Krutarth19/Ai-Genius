"use client";

import axios from "axios";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useProModal } from "@/hooks/use-pro-modal";
import { Badge } from "@/components/ui/badge";
import { Check, Code, Image, MessageSquare, Music, Video, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { subscribe } from "diagnostics_channel";
import { toast } from "react-hot-toast";

const tools =[
    {
      label:"Conversation",
      icon:MessageSquare,
      color:"text-violet-500",
      bgColor:"bg-violet-500/10",
    },
    {
      label:"Music Generation",
      icon:Music,
      color:"text-emerald-500",
      bgColor:"bg-emerald-500/10",
    },
    {
      label:"Image Generation",
      icon:Image,
      color:"text-pink-500",
      bgColor:"bg-pink-500/10",
    },
    {
      label:"Video Generation",
      icon:Video,
      color:"text-orange-500",
      bgColor:"bg-orange-500/10",
    },
    {
      label:"Code Generation",
      icon:Code,
      color:"text-green-500",
      bgColor:"bg-green-500/10",
    }
  ]

export const ProModal = () => {
  const proModal = useProModal();
  const [loading,setLoading]=useState(false);


  const onSubscribe =async() =>{
    try {
      setLoading(true);
      const response = await axios.get('/api/stripe');
      window.location.href =response.data.url;
    } catch (error) {
      toast.error("Something Went Wrong");
    }
    finally{
      setLoading(false);
    }
  }

  return (
    <div>
      <Dialog open={proModal.isOpen} onOpenChange={proModal.OnClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
              <div className="flex items-center font-bold gap-x-2 py-1">
                Upgrade To Genius
                <Badge variant="premium" className="uppercase text-sm py-1">
                  Pro
                </Badge>
              </div>
            </DialogTitle>
            <DialogDescription className="pt-2 text-center space-y-2 text-zinc-900 font-medium">
                {tools.map((tool) =>(
                    <Card key={tool.label} className="p-3 border-black/5 flex items-center justify-between" >
                        <div className="flex items-center gap-x-4">
                            <div className={cn("w-fit p-2 rounded-md",tool.bgColor)}>
                                <tool.icon className={cn("w-6 h-6",tool.color)} />
                            </div>
                            <div className="text-sm font-semibold">
                                {tool.label}
                            </div>
                        </div>
                            <Check className="text-primamry w-5 h-5"/>
                    </Card>
                ))}
            </DialogDescription>
            <DialogFooter>
                <Button disabled={loading} onClick={onSubscribe} className="w-full mt-2" size="lg" variant="premium">
                    Upgrade
                    <Zap className="w-4 h-4 ml-2 fill-white"/>
                </Button>
            </DialogFooter>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
