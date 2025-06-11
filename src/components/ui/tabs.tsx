import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { easeOut, motion, spring } from "motion/react";

import { cn } from "@/lib/utils";

const TabsContext = React.createContext<{ activeTab: string | null }>({
  activeTab: null,
});

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  const [activeTab, setActiveTab] = React.useState<string | null>(null);

  const handleActiveTabValue = (value: string) => {
    setActiveTab(value);
  };

  return (
    <TabsContext.Provider value={{ activeTab }}>
      <TabsPrimitive.Root
        data-slot="tabs"
        className={cn("flex flex-col gap-2", className)}
        onValueChange={handleActiveTabValue}
        {...props}
      >
        {props.children}
      </TabsPrimitive.Root>
    </TabsContext.Provider>
  );
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  const tabsListRef = React.useRef<HTMLDivElement>(null);
  const { activeTab } = React.useContext(TabsContext);

  return (
    <TabsPrimitive.List ref={tabsListRef} data-slot="tabs-list" {...props}>
      {props.children}

      {activeTab && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className={cn(
            "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
            className
          )}
        >
          {React.Children.map(props.children, (child) => {
            if (!React.isValidElement(child)) return null;
            const element = child as React.ReactElement<{
              value: string;
              ref?: React.RefObject<HTMLElement>;
            }>;
            return element.props.value === activeTab ? (
              <div
                style={{
                  width: element.props.ref?.current?.offsetWidth || 0,
                  transform: `translateX(${
                    element.props.ref?.current?.offsetLeft || 0
                  }px)`,
                }}
              />
            ) : null;
          })}
        </motion.div>
      )}
    </TabsPrimitive.List>
  );
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger data-slot="tabs-trigger" {...props}>
      <motion.div
        className={cn(
          "data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
          className
        )}
      >
        {props.children}
      </motion.div>
    </TabsPrimitive.Trigger>
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
        initial={{ opacity: 0, x: -25 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 25 }}
        transition={{ duration: 0.5 }}
      >
        {props.children}
      </motion.div>
    </TabsPrimitive.Content>
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
