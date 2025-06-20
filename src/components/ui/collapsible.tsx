import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { AnimatePresence, motion } from "motion/react";
import { createContext, useContext, useMemo } from "react";

const CollapsibleContext = createContext<{ isOpen: boolean } | null>(null);

function useCollapsible() {
  const context = useContext(CollapsibleContext);
  if (!context) {
    throw new Error("Collapsible components must be used within a Collapsible");
  }
  return context;
}

function Collapsible({
  open,
  onOpenChange,
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Root>) {
  const contextValue = useMemo(() => ({ isOpen: open ?? false }), [open]);

  return (
    <CollapsibleContext.Provider value={contextValue}>
      <CollapsiblePrimitive.Root
        open={open}
        onOpenChange={onOpenChange}
        data-slot="collapsible"
        {...props}
      />
    </CollapsibleContext.Provider>
  );
}

function CollapsibleTrigger({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger>) {
  return (
    <CollapsiblePrimitive.CollapsibleTrigger
      data-slot="collapsible-trigger"
      {...props}
    />
  );
}

function CollapsibleContent({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleContent>) {
  const { isOpen } = useCollapsible();

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, type: "easeInOut" }}
        >
          <CollapsiblePrimitive.CollapsibleContent
            forceMount
            data-slot="collapsible-content"
            {...props}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
