import { Navbar } from "@/src/components/Navbar";
import { Hero } from "@/src/components/Hero";
import { TrustBar } from "@/src/components/TrustBar";
import { BeforeAfter } from "@/src/components/BeforeAfter";
import { Services } from "@/src/components/Services";
import { WhyChooseUs } from "@/src/components/WhyChooseUs";
import { PremiumExperience } from "@/src/components/PremiumExperience";
import { Testimonials } from "@/src/components/Testimonials";
import { Process } from "@/src/components/Process";
import { FAQ } from "@/src/components/FAQ";
import { ContactCTA } from "@/src/components/ContactCTA";
import { Footer } from "@/src/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#FF5A00] selection:text-white flex flex-col relative font-sans">
      {/* Global Ambient Glows */}
      <div className="fixed top-[-100px] left-[-100px] w-[400px] h-[400px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[-50px] right-[-50px] w-[300px] h-[300px] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
      
      <div className="relative z-10 w-full">
        <Navbar />
      <Hero />
      <TrustBar />
      <BeforeAfter />
      <Services />
      <WhyChooseUs />
      <PremiumExperience />
      <Testimonials />
      <Process />
      <FAQ />
      <ContactCTA />
      <Footer />
      </div>
    </div>
  );
}
