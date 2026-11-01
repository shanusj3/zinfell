import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import Services from "./components/Services";
import AiAutomation from "./components/AiAutomation";
import WhyZinfell from "./components/WhyZinfell";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import FinalCta from "./components/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <Services />
      <AiAutomation />
      <WhyZinfell />
      <Testimonials />
      <FinalCta />
      <Faq />
    </>
  );
}
