import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { AnimatePresence, motion } from "motion/react";
import React, { createContext, useContext, useMemo, useState } from "react";

type CollapsibleContextType = {
  isOpen: boolean;
  setIsOpen?: (open: boolean) => void;
};

const CollapsibleContext = createContext<CollapsibleContextType | null>(null);

function useCollapsible() {
  const context = useContext(CollapsibleContext);
  if (!context) {
    throw new Error("Collapsible components must be used within a Collapsible");
  }
  return context;
}

interface CollapsibleProps
  extends React.ComponentProps<typeof CollapsiblePrimitive.Root> {}

function Collapsible({
  open: openProp,
  defaultOpen,
  onOpenChange,
  ...props
}: CollapsibleProps) {
  const isControlled = openProp !== undefined;

  const [uncontrolledOpen, setUncontrolledOpen] = useState(
    defaultOpen ?? false
  );

  const open = isControlled ? openProp : uncontrolledOpen;

  const handleOpenChange = (value: boolean) => {
    if (!isControlled) {
      setUncontrolledOpen(value);
    }
    onOpenChange?.(value);
  };

  const contextValue = useMemo(
    () => ({ isOpen: open, setIsOpen: handleOpenChange }),
    [open, handleOpenChange]
  );

  return (
    <CollapsibleContext.Provider value={contextValue}>
      <CollapsiblePrimitive.Root
        open={open}
        onOpenChange={handleOpenChange}
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
    <AnimatePresence>
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
