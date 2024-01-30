import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "./ui/tooltip";


export interface HintProps {
    label: string;
    children: React.ReactNode;
    side?: "left" | "right" | "top" | "bottom";
    align?: "start" | "center" | "end";
    sideOffset?: number;
    alignOffset?: number;
} 

const Hint = ({label, children, side, align, sideOffset, alignOffset}:HintProps) => {
    return ( 
        <TooltipProvider>
            <Tooltip delayDuration={100}>
                <TooltipTrigger asChild>
                    {children}
                </TooltipTrigger>
                <TooltipContent align={align} alignOffset={alignOffset} sideOffset={sideOffset} className="text-white bg-black border-black" side={side}>
                    <p className="font-semibold capitalize">
                        {label}
                    </p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
     );
}
 
export default Hint;