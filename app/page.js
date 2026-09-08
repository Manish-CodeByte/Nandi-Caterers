import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BrandIntro from "../components/BrandIntro";
import Occasions from "../components/Occasions";
import MenuSection from "../components/MenuSection";
import WhyNandi from "../components/WhyNandi";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import Process from "../components/Process";
import CTASection from "../components/CTASection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import MobileActionBar from "../components/MobileActionBar";

export default function Home() {
  return (
    <main className="min-h-screen bg-nandi-ivory relative selection:bg-nandi-burgundy selection:text-nandi-ivory pb-[70px] md:pb-0">
      <Navbar />
      <Hero />
      <BrandIntro />
      <Occasions />
      <MenuSection />
      <WhyNandi />
      <Gallery />
      <Testimonials />
      <Process />
      <CTASection />
      <ContactSection />
      <Footer />
      <MobileActionBar />
    </main>
  );
}
