import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    >
      {props.children}
    </TabsPrimitive.Root>
  );
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  const tabsListRef = React.useRef<HTMLDivElement>(null);

  return (
    <TabsPrimitive.List
      ref={tabsListRef}
      data-slot="tabs-list"
      {...props}
      className={cn(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
        className
      )}
    />
  );
}

function TabsTrigger({
  className,
  value,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger> & {
  "data-state"?: "active" | "inactive";
  value: string;
}) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <TabsPrimitive.Trigger
        data-slot="tabs-trigger"
        {...props}
        value={value}
        className={cn(
          "text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] items-center justify-center gap-1.5 rounded-md border border-transparent px-3 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50",
          "data-[state=active]:bg-background dark:data-[state=active]:bg-input/50 dark:data-[state=active]:text-foreground data-[state=active]:shadow-md",
          className
        )}
      >
        {props.children}
        {(isHovered || props["data-state"] === "active") && (
          <motion.div
            layoutId="tab-indicator"
            className={cn(
              "absolute inset-0 rounded-md",
              props["data-state"] === "active"
                ? "bg-black/10 dark:bg-white/20"
                : "bg-black/5 dark:bg-white/10"
            )}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
          />
        )}
      </TabsPrimitive.Trigger>
    </div>
  );
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    >
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {props.children}
      </motion.div>
    </TabsPrimitive.Content>
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
