import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "./components/ui/alert";
import { AlertCircleIcon, CheckCircle2Icon, PopcornIcon } from "lucide-react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome to Our App
          </h1>
          <p className="text-gray-600 mt-2">
            A simple demonstration of components
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Features</h2>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle2Icon className="text-green-500" />
                <span>Responsive Design</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2Icon className="text-green-500" />
                <span>Modern UI Components</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2Icon className="text-green-500" />
                <span>Interactive Elements</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="space-y-4">
              <button
                onClick={handleOpen}
                className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
              >
                Toggle Alert
              </button>
              {isOpen && (
                <div className="w-full flex justify-center align-middle flex-col gap-4">
                  <Alert variant="destructive">
                    <AlertCircleIcon />
                    <AlertTitle>Unable to process your payment.</AlertTitle>
                    <AlertDescription>
                      <p>
                        Please verify your billing information and try again.
                      </p>
                      <ul className="list-inside list-disc text-sm">
                        <li>Check your card details</li>
                        <li>Ensure sufficient funds</li>
                        <li>Verify billing address</li>
                      </ul>
                    </AlertDescription>
                  </Alert>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">About</h2>
          <p className="text-gray-600">
            This is a simple demonstration page showing various UI components
            and their interactions. Feel free to explore the different features
            and components available.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
