import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import React, { useMemo } from "react";

interface AnimatedListItemProps {
  children: React.ReactNode;
  index: number;
  className?: string;
  transition?: any;
  initial?: any;
  animate?: any;
  exit?: any;
  delayFactor?: number;
  reverse?: boolean;
  direction?: "vertical" | "horizontal";
}

function AnimatedListItem({
  children,
  index,
  className,
  transition,
  initial,
  animate,
  exit,
  delayFactor = 0.03,
  reverse = false,
  direction = "vertical",
}: AnimatedListItemProps) {
  const delay = (reverse ? -index : index) * delayFactor;

  const getInitialState = () => {
    if (initial) return initial;
    if (direction === "horizontal") {
      return { opacity: 0, x: -50, scale: 0.9, filter: "blur(5px)" };
    }
    return { opacity: 0, y: 20, scale: 0.95, filter: "blur(5px)" };
  };

  const getAnimateState = () => {
    if (animate) return animate;
    return { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" };
  };

  const getExitState = () => {
    if (exit) return exit;
    if (direction === "horizontal") {
      return { opacity: 0, x: 50, scale: 0.9, filter: "blur(5px)" };
    }
    return { opacity: 0, y: -20, scale: 0.95, filter: "blur(5px)" };
  };

  return (
    <motion.div
      initial={getInitialState()}
      animate={getAnimateState()}
      exit={getExitState()}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 20,
        delay,
        ...transition,
      }}
      layout
      className={cn("w-full", className)}
    >
      {children}
    </motion.div>
  );
}

export interface AnimatedListProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode[];
  transition?: any;
  initial?: any;
  animate?: any;
  exit?: any;
  itemClassName?: string;
  delayFactor?: number;
  reverse?: boolean;
  emptyMessage?: React.ReactNode;
  direction?: "vertical" | "horizontal";
}

export function AnimatedList({
  children,
  className,
  transition,
  initial,
  animate,
  exit,
  itemClassName,
  delayFactor = 0.03,
  reverse = false,
  emptyMessage = "Liste boş",
  direction = "vertical",
  ...props
}: AnimatedListProps) {
  const childrenArray = useMemo(
    () => React.Children.toArray(children),
    [children]
  );
  const isEmpty = childrenArray.length === 0;

  const {
    onAnimationStart,
    onAnimationEnd,
    onAnimationIteration,
    onDragStart,
    onDrag,
    onDragEnd,
    onDragEnter,
    onDragLeave,
    onDragOver,
    onDrop,
    ...motionProps
  } = props;

  return (
    <motion.div
      className={cn(
        "gap-4",
        direction === "horizontal"
          ? "flex flex-row flex-wrap items-start justify-center"
          : "flex flex-col items-center",
        className
      )}
      {...motionProps}
    >
      <AnimatePresence mode="popLayout">
        {isEmpty ? (
          <motion.div
            layout
            key="empty"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { type: "spring", stiffness: 100, damping: 15 },
            }}
            exit={{ opacity: 0, y: -20 }}
            className="text-muted-foreground text-sm flex items-center gap-2"
          >
            <motion.span
              animate={{
                rotate: [0, 10, -10, 0],
                transition: { repeat: Infinity, duration: 1.5 },
              }}
            >
              😕
            </motion.span>
            {emptyMessage}
          </motion.div>
        ) : (
          childrenArray.map((child, index) => (
            <AnimatedListItem
              key={(child as any).key ?? index}
              index={index}
              transition={transition}
              initial={initial}
              animate={animate}
              exit={exit}
              className={itemClassName}
              delayFactor={delayFactor}
              reverse={reverse}
              direction={direction}
            >
              {child}
            </AnimatedListItem>
          ))
        )}
      </AnimatePresence>
    </motion.div>
  );
}
