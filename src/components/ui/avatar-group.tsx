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
    <div className={cn("flex -space-x-2", className)} {...props}>
      {visibleAvatars.map((avatar, index) => (
        <TooltipProvider key={index}>
          <Tooltip>
            <TooltipTrigger asChild>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.2, type: "spring", stiffness: 150 }}
              >
                <Avatar
                  key={index}
                  className={cn(
                    "border-2 border-background",
                    sizeClasses[size]
                  )}
                >
                  {avatar.src ? (
                    <motion.img
                      src={avatar.src}
                      alt={avatar.alt || ""}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        duration: 0.2,
                        ease: "easeInOut",
                        delay: index * 0.1,
                      }}
                    />
                  ) : null}
                </Avatar>
              </motion.div>
            </TooltipTrigger>
            <TooltipContent side="top">
              <p>{avatar.alt}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
      {remainingCount > 0 && (
        <Avatar
          className={cn(
            "border-2 border-background bg-muted",
            sizeClasses[size]
          )}
        >
          <AvatarFallback>+{remainingCount}</AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}
