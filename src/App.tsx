import { CheckCircle2Icon, ChevronsUpDown } from "lucide-react";
import { AvatarGroup } from "./components/ui/avatar-group";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import { Button, LoadingButton } from "./components/ui/button";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/ui/tabs";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./components/ui/accordion";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./components/ui/alert-dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "./components/ui/tooltip";
import { ThemeProvider } from "./components/theme-provider";
import { ModeToggle } from "./components/ui/mode-toggle";
import { Alert, AlertDescription, AlertTitle } from "./components/ui/alert";
import { motion } from "motion/react";
import { Checkbox } from "./components/ui/checkbox";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "./components/ui/collapsible";

function App() {
  const [buttonState, setButtonState] = useState<
    "idle" | "loading" | "success"
  >("idle");
  const [alertState, setAlertState] = useState(false);
  const [isCollapsibleOpen, setIsCollapsibleOpen] = useState(false);
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-gray-50 dark:bg-black">
        <div className="container mx-auto px-4 py-8">
          <header className="mb-8 flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Welcome to Our App
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                A simple demonstration of components
              </p>
            </div>
            <ModeToggle />
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Features
              </h2>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-700 dark:text-gray-200">
                  <CheckCircle2Icon className="text-green-500" />
                  <span>Responsive Design</span>
                </li>
                <li className="flex items-center gap-2 text-gray-700 dark:text-gray-200">
                  <CheckCircle2Icon className="text-green-500" />
                  <span>Modern UI Components</span>
                </li>
                <li className="flex items-center gap-2 text-gray-700 dark:text-gray-200">
                  <CheckCircle2Icon className="text-green-500" />
                  <span>Interactive Elements</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="mt-8 bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-sm flex flex-col gap-4">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Tabs Example
            </h2>
            <div className="flex flex-col gap-4">
              <Tabs defaultValue="tab1" className="w-full flex justify-center">
                <TabsList className="flex justify-center">
                  <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                  <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                  <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                  <TabsTrigger value="tab4">Tab 4</TabsTrigger>
                  <TabsTrigger value="tab5">Tab 5</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1">
                  <p className="text-gray-700 dark:text-gray-200">
                    This is the content of Tab 1.
                  </p>
                </TabsContent>
                <TabsContent value="tab2">
                  <p className="text-gray-700 dark:text-gray-200">
                    This is the content of Tab 2.
                  </p>
                </TabsContent>
                <TabsContent value="tab3">
                  <p className="text-gray-700 dark:text-gray-200">
                    This is the content of Tab 3.
                  </p>
                </TabsContent>
                <TabsContent value="tab4">
                  <p className="text-gray-700 dark:text-gray-200">
                    This is the content of Tab 4.
                  </p>
                </TabsContent>
                <TabsContent value="tab5">
                  <p className="text-gray-700 dark:text-gray-200">
                    This is the content of Tab 5.
                  </p>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Accordion Section */}
          <div className="mt-8 bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Accordion Example
            </h2>
            <Accordion type="single" collapsible defaultValue="item-1">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-gray-900 dark:text-white">
                  Accordion Item 1
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700 dark:text-gray-200">
                    This is the content of Accordion Item 1.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-gray-900 dark:text-white">
                  Accordion Item 2
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700 dark:text-gray-200">
                    This is the content of Accordion Item 2.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-gray-900 dark:text-white">
                  Accordion Item 3
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700 dark:text-gray-200">
                    This is the content of Accordion Item 3.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Button Section */}
          <div className="mt-8 bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Button Examples
            </h2>
            <div className="flex flex-wrap gap-4">
              <Button variant="default">Default Button</Button>
              <Button variant="destructive">Destructive Button</Button>
              <LoadingButton
                state={buttonState}
                onClick={() => {
                  setButtonState("loading");
                  setTimeout(() => setButtonState("success"), 1750);
                  setTimeout(() => setButtonState("idle"), 3500);
                }}
              />
            </div>
          </div>
          {/* Alert Section */}
          <motion.div className="mt-8 bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Alert
            </h2>
            <Button
              onClick={() => setAlertState(!alertState)}
              className="mb-4"
              variant="destructive"
            >
              Open Alert
            </Button>
            {alertState && (
              <Alert variant="destructive">
                <AlertTitle>Alert Title</AlertTitle>
                <AlertDescription>Alert Description</AlertDescription>
              </Alert>
            )}
          </motion.div>

          {/* AlertDialog Section */}
          <div className="mt-8 bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              AlertDialog Example
            </h2>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Open Alert Dialog</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="bg-white dark:bg-gray-900">
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-gray-900 dark:text-white">
                    Are you sure?
                  </AlertDialogTitle>
                  <AlertDialogDescription className="text-gray-700 dark:text-gray-200">
                    This action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>

          {/* Avatar Section */}
          <div className="mt-8 bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Avatar Example
            </h2>
            <div className="flex gap-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="User 1" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="User 2" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="User 3" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>

          {/* AvatarGroup Section */}
          <div className="mt-8 bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              AvatarGroup Example
            </h2>
            <AvatarGroup
              avatars={[
                { src: "https://github.com/shadcn.png", alt: "User 1" },
                { src: "https://github.com/shadcn.png", alt: "User 2" },
                { src: "https://github.com/shadcn.png", alt: "User 3" },
                { src: "https://github.com/shadcn.png", alt: "User 4" },
                { src: "https://github.com/shadcn.png", alt: "User 5" },
              ]}
              max={5}
              size="lg"
            />
          </div>

          {/* Collapsible Section */}
          <div className="mt-8 bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Collapsible Example
            </h2>
            <div className="flex gap-4">
              <Collapsible
                open={isCollapsibleOpen}
                onOpenChange={setIsCollapsibleOpen}
                className="flex w-[350px] flex-col gap-2"
              >
                <div className="flex items-center justify-between gap-4 px-4">
                  <h4 className="text-sm font-semibold">
                    @peduarte starred 3 repositories
                  </h4>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="icon" className="size-8">
                      <ChevronsUpDown />
                      <span className="sr-only">Toggle</span>
                    </Button>
                  </CollapsibleTrigger>
                </div>
                <div className="rounded-md border px-4 py-2 font-mono text-sm">
                  @radix-ui/primitives
                </div>
                <CollapsibleContent
                  open={isCollapsibleOpen}
                  className="flex flex-col gap-2"
                >
                  <div className="rounded-md border px-4 py-2 font-mono text-sm">
                    @radix-ui/colors
                  </div>
                  <div className="rounded-md border px-4 py-2 font-mono text-sm">
                    @stitches/react
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>

          {/* Tooltip Section */}
          <div className="mt-8 bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Tooltip Example
            </h2>
            <div className="flex gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Hover me</Button>
                </TooltipTrigger>
                <TooltipContent className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
                  <p>This is a tooltip</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
          {/* Checkbox Section */}
          <div className="mt-8 bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Checkbox Example
            </h2>
            <div className="flex gap-4">
              <Checkbox />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
