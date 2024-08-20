import Blogs from "./blogs/page";


import { ModeToggle } from "@/components/ModeToggle";

export default function Home() {
  return (
    <main className=" ">
   
      <div className="flex  justify-between  border-solid p-5 bg-black text-orange-500 ">
        <h1 className="font-bold text-lg">
          <span className="text-3xl">B</span>logify
        </h1>
        <button>
          <ModeToggle />
        </button>
      </div>
         <Blogs/>
    </main>
  );
}
