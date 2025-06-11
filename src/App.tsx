import "./App.css";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function App() {
  return (
    <div className="flex justify-center align-middle">
      <Tabs defaultValue="1" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="1">1</TabsTrigger>
          <TabsTrigger value="2">2</TabsTrigger>
          <TabsTrigger value="3">3</TabsTrigger>
          <TabsTrigger value="4">4</TabsTrigger>
          <TabsTrigger value="5">5</TabsTrigger>
          <TabsTrigger value="6">6</TabsTrigger>
        </TabsList>
        <TabsContent value="1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          vitae vulputate felis. Praesent et porttitor lacus. Pellentesque in
          felis ante. Vivamus in justo mauris. Donec viverra erat dictum felis
          rutrum fermentum. Proin tincidunt tortor eget diam feugiat
          sollicitudin. Nunc luctus dictum tortor vitae vulputate. Praesent et
          maximus nisl, eu hendrerit orci.
        </TabsContent>
        <TabsContent value="2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis,
          nibh at vehicula bibendum, ligula nibh malesuada nibh, vestibulum
          dignissim massa lacus sed lacus. Integer.
        </TabsContent>
        <TabsContent value="3">Hello World</TabsContent>
        <TabsContent value="4">This is a an amazing tab</TabsContent>
        <TabsContent value="5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          vitae vulputate felis. Praesent et porttitor lacus. Pellentesque in
          felis ante. Vivamus in justo mauris. Donec viverra erat dictum felis
          rutrum fermentum. Proin tincidunt tortor eget diam feugiat
          sollicitudin. Nunc luctus dictum tortor vitae vulputate. Praesent et
          maximus nisl, eu hendrerit orci.
        </TabsContent>
        <TabsContent value="6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis,
          nibh at vehicula bibendum, ligula nibh malesuada nibh, vestibulum
          dignissim massa lacus sed lacus. Integer.
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default App;
