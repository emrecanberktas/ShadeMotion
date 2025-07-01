import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { AnimatePresence, motion } from "motion/react";
import { Loader2Icon } from "lucide-react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      // whileTap={{ scale: 0.95, rotate: "2.5deg" }}
      transition={{ duration: 0.125, type: "easeInOut" }}
    >
      <Comp
        data-slot="button"
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    </motion.button>
  );
}

interface LoadingButtonProps {
  state?: "idle" | "loading" | "success";
  onClick?: () => void;
  idleText?: React.ReactNode;
  loadingIndicator?: React.ReactNode;
  successText?: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

function LoadingButton({
  state = "idle",
  onClick,
  idleText = "Form Submit",
  loadingIndicator = <Loader2Icon className="animate-spin" />,
  successText = "Form Submitted!",
  className,
  disabled,
}: LoadingButtonProps) {
  const contentMap: Record<string, React.ReactNode> = {
    idle: idleText,
    loading: loadingIndicator,
    success: successText,
  };

  const variants = {
    initial: { opacity: 0, y: -25 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 25 },
  };

  return (
    <Button
      onClick={onClick}
      disabled={disabled ?? state !== "idle"}
      className={cn(
        "bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium relative overflow-hidden",
        "disabled:opacity-50 disabled:cursor-not-allowed transition-all min-w-[180px] flex items-center justify-center",
        className
      )}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={state}
          initial="initial"
          animate="visible"
          exit="exit"
          variants={variants}
          transition={{ type: "spring", duration: 0.3, bounce: 0 }}
        >
          {contentMap[state]}
        </motion.span>
      </AnimatePresence>
    </Button>
  );
}

export { Button, buttonVariants, LoadingButton };
