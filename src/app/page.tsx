import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import PlatformSection from "@/components/Platform";

export default function Page() {
  return (
    <div className="flex flex-col">
      <Header />
      <HeroSection />
      <PlatformSection />
    </div>
  );
}
