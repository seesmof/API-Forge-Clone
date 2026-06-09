import ContactSection from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import PlatformSection from "@/components/Platform";
import StartSection from "@/components/Start";

export default function Page() {
  return (
    <div className="flex flex-col">
      <Header />
      <HeroSection />
      <PlatformSection />
      <StartSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
