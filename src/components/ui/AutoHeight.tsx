import * as React from "react";
import { motion } from "motion/react";

type AutoHeightProps = {
  isOpen: boolean;
  children: React.ReactNode;
  className?: string;
};

export function AutoHeight({ isOpen, children, className }: AutoHeightProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [height, setHeight] = React.useState(0);

  React.useLayoutEffect(() => {
    if (ref.current) {
      setHeight(ref.current.scrollHeight);
    }
  }, [isOpen, children]);

  return (
    <motion.div
      layout
      layoutId="collapsible-content"
      animate={{ height: isOpen ? height : 0, opacity: isOpen ? 1 : 0 }}
      initial={false}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      style={{ overflow: "hidden" }}
      className={className}
    >
      <div ref={ref}>{children}</div>
    </motion.div>
  );
}
