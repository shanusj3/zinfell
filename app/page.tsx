import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import Services from "./components/Services";
// import SelectedWork from "./components/SelectedWork";
import AiAutomation from "./components/AiAutomation";
import WhyZinfell from "./components/WhyZinfell";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import FinalCta from "./components/FinalCta";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SocialProof />
        <Services />
        {/* <SelectedWork /> */}
        <AiAutomation />
        <WhyZinfell />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
