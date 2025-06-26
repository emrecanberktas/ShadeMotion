import * as React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "./avatar";
import { cn } from "@/lib/utils";
import {
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
  Tooltip,
} from "./tooltip";
import { motion } from "motion/react";

interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  avatars: {
    src?: string;
    alt?: string;
    fallback?: string;
  }[];
  max?: number;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "size-6",
  md: "size-8",
  lg: "size-10",
};

export function AvatarGroup({
  avatars,
  max = 5,
  size = "md",
  className,
  ...props
}: AvatarGroupProps) {
  const visibleAvatars = avatars.slice(0, max);
  const remainingCount = avatars.length - max;

  return (
    <TooltipProvider>
      <div className={cn("flex -space-x-4", className)} {...props}>
        {visibleAvatars.map((avatar, index) => (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.2, type: "spring", stiffness: 150 }}
              >
                <Avatar
                  className={cn(
                    "border-2 border-background",
                    sizeClasses[size],
                    className
                  )}
                >
                  <AvatarImage src={avatar.src} alt={avatar.alt || ""} />
                  <AvatarFallback>
                    {avatar.fallback || avatar.alt?.[0] || "?"}
                  </AvatarFallback>
                </Avatar>
              </motion.div>
            </TooltipTrigger>
            <TooltipContent side="top">
              <div className="flex flex-col gap-1">
                <p className="font-medium">{avatar.alt}</p>
                {avatar.fallback && (
                  <p className="text-xs text-muted-foreground">
                    {avatar.fallback}
                  </p>
                )}
              </div>
            </TooltipContent>
          </Tooltip>
        ))}
        {remainingCount > 0 && (
          <Tooltip>
            <TooltipTrigger asChild>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.2, type: "spring", stiffness: 150 }}
              >
                <Avatar
                  className={cn(
                    "border-2 border-background bg-muted",
                    sizeClasses[size]
                  )}
                >
                  <AvatarFallback>+{remainingCount}</AvatarFallback>
                </Avatar>
              </motion.div>
            </TooltipTrigger>
            <TooltipContent side="top">
              <p className="text-sm">View {remainingCount} more people</p>
            </TooltipContent>
          </Tooltip>
        )}
      </div>
    </TooltipProvider>
  );
}
