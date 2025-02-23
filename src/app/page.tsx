import ContactForm from "./components/ContactForm";
import FeatureCarousel from "./components/FeatureCarousel";
import Footer from "./components/Footer";
import Hero from "./components/hero";
import Marquee from "./components/Marque";
import Navbar from "./components/navbar";
import PortfolioGrid from "./components/PortfolioGrid";
import { SparklesCore } from "./components/sparkles";
import Timeline from "./components/Timeline";
import WearYourStory from "./components/WearYourStory";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <div className="min-h-screen w-full absolute inset-0 z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="relative z-10">
        <Navbar />
        <Hero />
        {/* <WearYourStory />  */}

        <Marquee />
        <FeatureCarousel />
        <PortfolioGrid />
        <Timeline />
  
        <ContactForm />
        <Footer/>
      </div>
    </main>
  );
}
