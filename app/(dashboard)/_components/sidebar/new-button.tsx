"use client";
import { Plus } from "lucide-react";
import { CreateOrganization } from "@clerk/nextjs";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Hint from "@/components/hint";

const NewButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Hint label="Create Organization" side="right" align="start" sideOffset={18}>
        <div className="aspect-square">
          <Button
            size={"icon"}
            className={cn(
              "bg-white/25 h-full w-full rounded-md flex items-center justify-center opacity-60 hover:opacity-100 transition "
            )}
          >
            <Plus className="text-white" />
          </Button>
        </div>
        </Hint>
      </DialogTrigger>
      <DialogContent className="p-0 bg-transparent border-none max-w-[480px]">
        <CreateOrganization />
      </DialogContent>
    </Dialog>
  );
};

export default NewButton;
