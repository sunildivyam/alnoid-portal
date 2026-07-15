import Image from "next/image";
import homeData from "@/content/en/home.json";
import HeroSection from "@/components/sections/HeroSection";
const heroSectionData = homeData.heroSection;

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full flex-col items-center justify-between py-0 px-0 bg-white dark:bg-black sm:items-start">
        <HeroSection data={heroSectionData} />
      </main>
    </div>
  );
}
