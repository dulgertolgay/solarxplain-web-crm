import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Info } from "lucide-react";

interface InfoTooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  content: string;
}

export const InfoTooltip = ({ content }: InfoTooltipProps) => {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>
          <Info className="h-4 w-4" />
        </TooltipTrigger>
        <TooltipContent className="w-[450px]">{content}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
