import * as React from "react";
import { useState, useMemo } from "react";
import { motion, AnimatePresence, MotionConfig } from "motion/react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "./card";
import { Button } from "./button";

interface Step {
  title: string;
  content: React.ReactNode;
  description?: string | React.ReactNode;
}

interface MultiStepProps {
  steps: Step[];
  defaultStep?: number;
  className?: string;
  backButtonLabel?: string;
  nextButtonLabel?: string;
  completeButtonLabel?: string;
  transition?: { duration: number; type: string; bounce?: number };
  onNext?: (currentStep: number) => void;
  onBack?: (currentStep: number) => void;
  onComplete?: () => void;
}

function MultiStep({
  steps,
  defaultStep = 0,
  className,
  backButtonLabel = "Back",
  nextButtonLabel = "Continue",
  completeButtonLabel = "Finish",
  transition = { duration: 0.5, type: "spring", bounce: 0 },
  onNext,
  onBack,
  onComplete,
}: MultiStepProps) {
  const [currentStep, setCurrentStep] = useState(defaultStep);
  const [direction, setDirection] = useState<"next" | "back">("next");

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setDirection("next");
      setCurrentStep((prev) => prev + 1);
      onNext?.(currentStep);
    } else {
      setDirection("next");
      setCurrentStep(0);
      onComplete?.();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setDirection("back");
      setCurrentStep((prev) => prev - 1);
      onBack?.(currentStep);
    }
  };

  const content = useMemo(
    () => steps[currentStep]?.content || null,
    [currentStep, steps]
  );

  const variants = {
    initial: (direction: "next" | "back") => ({
      x: direction === "next" ? 70 : -70,
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: "next" | "back") => ({
      x: direction === "next" ? -70 : 70,
      opacity: 0,
    }),
  };

  return (
    <Card
      className={cn(
        "p-4 sm:p-6 w-full max-w-[90%] sm:max-w-lg md:max-w-2xl mx-auto shadow-lg rounded-lg overflow-hidden",
        className
      )}
    >
      <MotionConfig transition={transition}>
        <CardHeader className="text-center">
          <CardTitle className="text-xl sm:text-2xl font-semibold">
            <AnimatePresence
              mode="popLayout"
              initial={false}
              custom={direction}
            >
              <motion.div
                key={currentStep}
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                custom={direction}
                aria-current="step"
              >
                {steps[currentStep]?.title}
              </motion.div>
            </AnimatePresence>
          </CardTitle>
          {steps[currentStep]?.description && (
            <CardDescription className="text-sm sm:text-base text-muted-foreground mt-2 overflow-hidden">
              <AnimatePresence
                mode="popLayout"
                initial={false}
                custom={direction}
              >
                <motion.div
                  key={currentStep}
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  custom={direction}
                >
                  {steps[currentStep]?.description}
                </motion.div>
              </AnimatePresence>
            </CardDescription>
          )}
        </CardHeader>

        <CardContent className="min-h-[150px] sm:min-h-[200px] flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="popLayout" initial={false} custom={direction}>
            <motion.div
              key={currentStep}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={direction}
              className="w-full"
            >
              {content}
            </motion.div>
          </AnimatePresence>
        </CardContent>

        <CardFooter className="flex justify-between gap-4 overflow-hidden">
          <Button
            variant="outline"
            disabled={currentStep === 0}
            onClick={handleBack}
            aria-label={backButtonLabel}
            className="w-full sm:w-auto"
          >
            {backButtonLabel}
          </Button>
          <Button
            variant="default"
            onClick={handleNext}
            aria-label={
              currentStep === steps.length - 1
                ? completeButtonLabel
                : nextButtonLabel
            }
            className="w-full sm:w-auto"
          >
            {currentStep === steps.length - 1
              ? completeButtonLabel
              : nextButtonLabel}
          </Button>
        </CardFooter>
      </MotionConfig>
    </Card>
  );
}

export { MultiStep };
export type { Step };
