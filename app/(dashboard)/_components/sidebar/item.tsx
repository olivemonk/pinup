"use client";

import Hint from "@/components/hint";
import { cn } from "@/lib/utils";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import Image from "next/image";

interface ItemProps {
  id: string;
  imageUrl: string;
  name: string;
}

const Item = ({ id, imageUrl, name }: ItemProps) => {
  const { organization } = useOrganization();
  const { setActive } = useOrganizationList();

  const isActive = organization?.id === id;

  const onClick = () => {
    if (!setActive) return;
    setActive({ organization: id });
  };


  return (
    <div className="aspect-square relative">
        <Hint label={name} side="right" align="start" sideOffset={18}>
      <Image
        src={imageUrl}
        alt={name}
        onClick={onClick}
        width={40}
        height={40}
        className={cn(
          "rounded-md cursor-pointer opacity-75 hover:opacity-100",
          isActive && "opacity-100"
        )}
      />
      </Hint>
    </div>
  );
};

export default Item;
