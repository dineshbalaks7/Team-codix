import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FreeDemoBanner from "@/components/FreeDemoBanner";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import WhyCodix from "@/components/WhyCodix";
import TechStack from "@/components/TechStack";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero */}
        <Hero />

        {/* 3. Services */}
        <Services />

        {/* 4. Free Demo Banner */}
        <FreeDemoBanner />

        {/* 5. Projects We've Done */}
        <Projects />

        {/* 6. Process */}
        <Process />

        {/* 7. Why Team Codix */}
        <WhyCodix />

        {/* 8. Tech Stack */}
        <TechStack />

        {/* 9. About */}
        <About />

        {/* 10. Contact */}
        <Contact />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* Floating WhatsApp Action */}
      <FloatingWhatsApp />
    </div>
  );
}
