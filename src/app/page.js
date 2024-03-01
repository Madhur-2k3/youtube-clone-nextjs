import HomeCards from "@/components/HomeCards";
import Image from "next/image";

export default async function Home() {
  await new Promise((resolve)=>setTimeout(resolve,1500));
  return (
    <div className="flex flex-row">
      <div className="w-[10%] bg-red-400 h-full">hii</div>
      <div className="w-full text-white h-full">
        
        <HomeCards/>
      </div>
    </div>
  );
}
