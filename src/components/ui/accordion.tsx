import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

const AccordionContext = React.createContext<{
  value: string | string[];
  type: "single" | "multiple";
} | null>(null);

const AccordionItemContext = React.createContext<{
  value: string;
} | null>(null);

function useAccordion() {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error("Accordion components must be used within an Accordion");
  }
  return context;
}

function useAccordionItem() {
  const context = React.useContext(AccordionItemContext);
  if (!context) {
    throw new Error(
      "AccordionItem components must be used within an AccordionItem"
    );
  }
  return context;
}

function Accordion({
  type = "single",
  value,
  onValueChange,
  defaultValue,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  const [internalValue, setInternalValue] = React.useState<string | string[]>(
    type === "single" ? "" : []
  );
  const isControlled = value !== undefined && onValueChange !== undefined;
  const currentValue = isControlled ? value : internalValue;
  const setCurrentValue = isControlled ? onValueChange : setInternalValue;

  const contextValue = React.useMemo(
    () => ({ value: currentValue, type }),
    [currentValue, type]
  );

  return (
    <AccordionContext.Provider value={contextValue}>
      {type === "single" ? (
        <AccordionPrimitive.Root
          type="single"
          value={currentValue as string}
          onValueChange={setCurrentValue as (value: string) => void}
          defaultValue={defaultValue as string | undefined}
          data-slot="accordion"
          {...props}
        />
      ) : (
        <AccordionPrimitive.Root
          type="multiple"
          value={currentValue as string[]}
          onValueChange={setCurrentValue as (value: string[]) => void}
          defaultValue={defaultValue as string[] | undefined}
          data-slot="accordion"
          {...props}
        />
      )}
    </AccordionContext.Provider>
  );
}

function AccordionItem({
  className,
  value,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item> & { value: string }) {
  const contextValue = React.useMemo(() => ({ value }), [value]);

  return (
    <AccordionItemContext.Provider value={contextValue}>
      <motion.div
        whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={cn("border-b last:border-b-0", className)}
      >
        <AccordionPrimitive.Item
          data-slot="accordion-item"
          value={value}
          {...props}
        />
      </motion.div>
    </AccordionItemContext.Provider>
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  const { value: accordionValue, type } = useAccordion();
  const { value: itemValue } = useAccordionItem();
  const isOpen =
    type === "single"
      ? accordionValue === itemValue
      : accordionValue.includes(itemValue);

  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
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
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  const { value: accordionValue, type } = useAccordion();
  const { value: itemValue } = useAccordionItem();
  const isOpen =
    type === "single"
      ? accordionValue === itemValue
      : accordionValue.includes(itemValue);

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, type: "easeInOut" }}
        >
          <AccordionPrimitive.Content
            data-slot="accordion-content"
            className={cn("overflow-hidden text-sm pt-0 pb-4", className)}
            forceMount
            {...props}
          >
            {children}
          </AccordionPrimitive.Content>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
