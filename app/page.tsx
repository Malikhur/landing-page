import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Ecosystem from "@/components/sections/Ecosystem";
import WhyCSouth from "@/components/sections/WhyCSouth";
import Technologies from "@/components/sections/Technologies";
import Contact from "@/components/sections/Contact";
import Legal from "@/components/sections/Legal";
import PrivacyPolicy from "@/components/sections/PrivacyPolicy";
import TermsOfUse from "@/components/sections/TermsOfUse";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Ecosystem />
        <Technologies />
        <WhyCSouth />
        <Contact />
        <Legal />
        <PrivacyPolicy />
        <TermsOfUse />
      </main>
      <Footer />
    </div>
  );
}
