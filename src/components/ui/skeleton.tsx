import { motion } from "motion/react";
import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.ComponentProps<typeof motion.div>) {
  return (
    <motion.div
      data-slot="skeleton"
      className={cn("bg-accent rounded-md relative overflow-hidden", className)}
      animate={{
        opacity: [0.6, 1, 0.6],
      }}
      transition={{
        repeat: Infinity,
        duration: 1.5,
        ease: "easeInOut",
      }}
      {...props}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.2,
          ease: "linear",
        }}
      />
    </motion.div>
  );
}

export { Skeleton };
