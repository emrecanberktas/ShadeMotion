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
import { Checkbox } from "./components/ui/checkbox";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "./components/ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuPortal,
} from "./components/ui/dropdown-menu";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
} from "./components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "./components/ui/radio-group";
import { Skeleton } from "./components/ui/skeleton";
import { MultiStep, type Step } from "./components/ui/multi-step-component";
import { Input } from "./components/ui/input";

function App() {
  const [buttonState, setButtonState] = useState<
    "idle" | "loading" | "success"
  >("idle");
  const [alertState, setAlertState] = useState(false);

  const steps: Step[] = [
    {
      title: "Step One",
      description: (
        <>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
        </>
      ),
      content: (
        <>
          <div className="space-y-2">
            <Input placeholder="Enter your name" />
            <Input placeholder="Enter your email" />
          </div>
        </>
      ),
    },
    {
      title: "Step Two",
      description:
        "This step explains the purpose of the component. It includes some skeleton placeholders.",
      content: (
        <>
          <p>Continue with more details in this step.</p>
          <div className="space-y-2">
            <Input placeholder="Enter your phone number" />
            <Input placeholder="Enter your address" />
          </div>
        </>
      ),
    },
    {
      title: "Step Three",
      description: (
        <>
          <p>Final step with additional placeholders.</p>
        </>
      ),
      content: (
        <>
          <div className="space-y-2">
            <Input placeholder="Enter your city" />
            <Input placeholder="Enter your state" />
            <Input placeholder="Enter your zip code" />
          </div>
        </>
      ),
    },
  ];

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
          {/* DropdownMenu Section */}
          <div className="mt-8 bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-sm flex flex-col gap-4 h-40">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              DropdownMenu Example
            </h2>
            <div className="flex flex-col gap-8">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">Open</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="start">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      Profile
                      <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      Billing
                      <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      Settings
                      <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      Keyboard shortcuts
                      <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger>
                        Invite users
                      </DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                          <DropdownMenuItem>Email</DropdownMenuItem>
                          <DropdownMenuItem>Message</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>More...</DropdownMenuItem>
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>
                    <DropdownMenuItem>
                      New Team
                      <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>GitHub</DropdownMenuItem>
                  <DropdownMenuItem>Support</DropdownMenuItem>
                  <DropdownMenuItem disabled>API</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    Log out
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="mt-8 bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-sm flex flex-col gap-4">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Tabs Example
            </h2>
            <div className="flex flex-col gap-4 justify-center items-center">
              <Tabs defaultValue="tab1">
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
            <Accordion type="single" collapsible>
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
            <div className="flex flex-wrap gap-4 justify-center items-center">
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
          <div className="mt-8 bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Alert
            </h2>
            <div className="flex justify-center items-center flex-col">
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
            </div>
          </div>
          {/*Dialog Section*/}

          <div className="mt-8 bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Dialog Example
            </h2>
            <div className="flex justify-center items-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Open Dialog</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                      Make changes to your profile here. Click save when you're
                      done.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4">
                    <div className="grid gap-3">
                      <label htmlFor="name-1">Name</label>
                      <input
                        id="name-1"
                        name="name"
                        defaultValue="Pedro Duarte"
                      />
                    </div>
                    <div className="grid gap-3">
                      <label htmlFor="username-1">Username</label>
                      <input
                        id="username-1"
                        name="username"
                        defaultValue="@peduarte"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button type="submit">Save changes</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* AlertDialog Section */}
          <div className="mt-8 bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              AlertDialog Example
            </h2>
            <div className="flex justify-center items-center">
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
          </div>

          {/* Avatar Section */}
          <div className="mt-8 bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Avatar Example
            </h2>
            <div className="flex gap-4 justify-center items-center">
              <Avatar className="size-32">
                <AvatarImage
                  src="https://github.com/emrecanberktas.png"
                  alt="User 1"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar className="size-32">
                <AvatarImage
                  src="https://github.com/emrecanberktas.png"
                  alt="User 2"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar className="size-32">
                <AvatarImage
                  src="https://github.com/emrecanberktas.png"
                  alt="User 3"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>

          {/* AvatarGroup Section */}
          <div className="mt-8 bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              AvatarGroup Example
            </h2>
            <div className="flex justify-center items-center">
              <AvatarGroup
                avatars={[
                  {
                    src: "https://github.com/emrecanberktas.png",
                    alt: "Emre ",
                  },
                  { src: "https://github.com/emrecanberktas.png", alt: "Can" },
                  {
                    src: "https://github.com/emrecanberktas.png",
                    alt: "Berktaş",
                  },
                  {
                    src: "https://github.com/emrecanberktas.png",
                    alt: "Ankara",
                  },
                  { alt: "Keçiören" },
                ]}
                max={5}
                size="lg"
                className="size-32 flex justify-center items-center"
              />
            </div>
          </div>

          {/* Collapsible Section */}
          <div className="mt-8 bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Collapsible Example
            </h2>
            <div className="flex gap-4 justify-center">
              <Collapsible className="flex w-[350px] flex-col gap-2">
                <div className="flex items-center justify-between gap-4 px-4">
                  <h4 className="text-sm font-semibold">Emre Can Berktaş</h4>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="icon" className="size-8">
                      <ChevronsUpDown />
                      <span className="sr-only">Toggle</span>
                    </Button>
                  </CollapsibleTrigger>
                </div>
                <div className="rounded-md border px-4 py-2 font-mono text-sm">
                  Turkey
                </div>
                <CollapsibleContent className="flex flex-col gap-2">
                  <div className="rounded-md border px-4 py-2 font-mono text-sm">
                    Ankara
                  </div>
                  <div className="rounded-md border px-4 py-2 font-mono text-sm">
                    Keçiören
                  </div>
                  <div className="rounded-md border px-4 py-2 font-mono text-sm">
                    Subayevleri
                  </div>
                  <div className="rounded-md border px-4 py-2 font-mono text-sm">
                    Katestroy
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
            <div className="flex gap-4 justify-center">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Hover me</Button>
                </TooltipTrigger>
                <TooltipContent>
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
            <div className="flex gap-4 justify-center">
              <Checkbox />
            </div>
          </div>
          {/* RadioGroup Section */}
          <div className="mt-8 bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              RadioGroup Example
            </h2>
            <div className="flex gap-4 justify-center">
              <RadioGroup>
                <RadioGroupItem value="1">Option 1</RadioGroupItem>
                <RadioGroupItem value="2">Option 2</RadioGroupItem>
                <RadioGroupItem value="3">Option 3</RadioGroupItem>
              </RadioGroup>
            </div>
          </div>
          {/* Skeleton Section */}
          <div className="mt-8 bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Skeleton Example
            </h2>
            <div className="flex gap-4 justify-center">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          </div>

          {/* MultiStep Section */}
          <div className="mt-8 bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              MultiStep Example
            </h2>

            <MultiStep steps={steps} />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
