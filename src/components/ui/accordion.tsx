import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { AutoHeight } from "./AutoHeight";

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  const triggerRef = React.useRef<HTMLButtonElement>(null);

  return (
    <motion.div
      whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn("border-b last:border-b-0", className)}
    >
      <AccordionPrimitive.Item data-slot="accordion-item" {...props}>
        {React.Children.map(props.children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { triggerRef } as any);
          }
          return child;
        })}
      </AccordionPrimitive.Item>
    </motion.div>
  );
}

function AccordionTrigger({
  className,
  children,
  triggerRef,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger> & {
  triggerRef?: React.RefObject<HTMLButtonElement>;
}) {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const updateState = () => {
      const state = triggerRef?.current?.getAttribute("data-state");
      setIsOpen(state === "open");
    };

    const observer = new MutationObserver(updateState);

    if (triggerRef?.current) {
      observer.observe(triggerRef.current, {
        attributes: true,
        attributeFilter: ["data-state"],
      });
      updateState();
    }

    return () => observer.disconnect();
  }, [triggerRef]);

  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={triggerRef}
        data-slot="accordion-trigger"
        className={cn(
          "flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50",
          className
        )}
        {...props}
      >
        {children}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="size-4 shrink-0 translate-y-0.5"
        >
          <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0" />
        </motion.div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  triggerRef,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content> & {
  triggerRef?: React.RefObject<HTMLButtonElement>;
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const contentRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const updateState = () => {
      const state = triggerRef?.current?.getAttribute("data-state");
      setIsOpen(state === "open");
    };

    const observer = new MutationObserver(updateState);

    if (triggerRef?.current) {
      observer.observe(triggerRef.current, {
        attributes: true,
        attributeFilter: ["data-state"],
      });
      updateState();
    }

    return () => observer.disconnect();
  }, [triggerRef]);

  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className={cn("overflow-hidden text-sm", className)}
      {...props}
    >
      <AutoHeight isOpen={isOpen}>
        <div ref={contentRef} className="pt-0 pb-4">
          {children}
        </div>
      </AutoHeight>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
