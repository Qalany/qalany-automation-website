import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProductSection from "@/components/ProductSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import DevBanner from "@/components/DevBanner";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <DevBanner />
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ProductSection />
        {/* <TeamSection /> */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
