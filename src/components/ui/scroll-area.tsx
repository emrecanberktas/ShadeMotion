import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import { motion, useAnimation } from "motion/react";
import { cn } from "@/lib/utils";

interface ScrollAreaProps
  extends React.ComponentProps<typeof ScrollAreaPrimitive.Root> {
  orientation?: "vertical" | "horizontal";
}

function ScrollArea({
  className,
  children,
  orientation = "vertical",
  ...props
}: ScrollAreaProps) {
  return (
    <ScrollAreaPrimitive.Root
      data-slot="scroll-area"
      className={cn(
        "relative",
        orientation === "horizontal" && "w-[75vmin] aspect-[4/2] flex",
        className
      )}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        data-slot="scroll-area-viewport"
        className={cn(
          "size-full rounded-[inherit] outline-none transition-[color,box-shadow]",
          "focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1"
        )}
      >
        <div
          className={cn(
            "list-none p-0",
            orientation === "horizontal"
              ? "grid grid-flow-col auto-cols-[25%]"
              : "grid grid-cols-1"
          )}
        >
          {children}
        </div>
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar orientation={orientation} />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  );
}

function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>) {
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      className={cn(
        "flex touch-none p-px transition-colors select-none",
        orientation === "vertical" &&
          "h-full w-2.5 border-l border-l-transparent",
        orientation === "horizontal" &&
          "h-2.5 flex-col border-t border-t-transparent",
        className
      )}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        data-slot="scroll-area-thumb"
        className="bg-border relative flex-1 rounded-full"
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  );
}

interface ScrollAreaItemProps
  extends Omit<React.ComponentProps<typeof motion.li>, "children"> {
  as?: React.ElementType;
  orientation?: "vertical" | "horizontal";
  children?: React.ReactNode;
}

function isProbablyMotionValue(val: any): boolean {
  return val && typeof val === "object" && typeof val.get === "function";
}

function filterMotionValues(node: React.ReactNode): React.ReactNode {
  if (Array.isArray(node)) {
    return node.map(filterMotionValues);
  }
  return isProbablyMotionValue(node) ? null : node;
}

const ScrollAreaItem = ({
  className,
  orientation = "vertical",
  children,
  ...props
}: ScrollAreaItemProps) => {
  const ref = React.useRef<HTMLLIElement>(null);
  const controls = useAnimation();

  React.useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({
            opacity: 1,
            [orientation === "vertical" ? "scaleX" : "scaleY"]: 1,
          });
          ref.current?.style.setProperty("--shown", "1");
        } else {
          controls.start({
            opacity: 0,
            [orientation === "vertical" ? "scaleX" : "scaleY"]: 0.25,
          });
          ref.current?.style.setProperty("--shown", "0");
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [controls, orientation]);

  const initial =
    orientation === "vertical"
      ? { opacity: 0, scaleX: 0.25 }
      : { opacity: 0, scaleY: 0.25 };

  const { style, ...rest } = props;
  const safeChildren = filterMotionValues(children);
  return (
    <motion.li
      ref={ref}
      initial={initial}
      animate={controls}
      transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
      className={cn(
        "p-0 max-w-full",
        "min-h-[40px] h-[8vmin] col-span-full",
        "overflow-hidden will-change-transform backface-hidden",
        orientation === "horizontal" && "min-w-[25%]",
        className
      )}
      style={{
        ...(style as React.CSSProperties),
        transformOrigin: orientation === "vertical" ? "top" : "left",
      }}
      {...rest}
    >
      <div className={cn("card h-full")}>{safeChildren}</div>
    </motion.li>
  );
};

export { ScrollArea, ScrollBar, ScrollAreaItem };
