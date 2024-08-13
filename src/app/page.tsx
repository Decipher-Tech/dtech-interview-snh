import Image from "next/image";
import Header from "./layout/Header";
import Card from "@/components/Card";



export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-10 gap-8">
      <Header />
      <div className="flex flex-col items-center justify-center w-full">
        {/* Body contents from API will go here */}
        <Card
          title="Title"
          description="Description"
          />
      </div>
    </main>
  );
}
