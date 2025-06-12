import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
function App() {
  return (
    <div className="flex justify-center align-middle flex-col">
      <div className="flex justify-center align-middle">
        <Accordion type="single" collapsible className="w-[500px]">
          <AccordionItem value="item-1">
            <AccordionTrigger>Emre</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              mattis, nibh at vehicula bibendum, ligula nibh malesuada nibh,
              vestibulum dignissim massa lacus sed lacus. Integer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Can</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              mattis, nibh at vehicula bibendum, ligula nibh malesuada nibh,
              vestibulum dignissim massa lacus sed lacus. Integer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Berktaş</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              mattis, nibh at vehicula bibendum, ligula nibh malesuada nibh,
              vestibulum dignissim massa lacus sed lacus. Integer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Ankara</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              mattis, nibh at vehicula bibendum, ligula nibh malesuada nibh,
              vestibulum dignissim massa lacus sed lacus. Integer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Keçiören</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              mattis, nibh at vehicula bibendum, ligula nibh malesuada nibh,
              vestibulum dignissim massa lacus sed lacus. Integer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default App;
