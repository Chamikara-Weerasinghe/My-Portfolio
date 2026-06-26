import LoadingScreen from "@/components/ui/LoadingScreen";
import ScrollProgress, { BackToTop } from "@/components/ui/ScrollProgress";
import CursorGlow from "@/components/ui/CursorGlow";
import MouseGradient from "@/components/ui/MouseGradient";
import FloatingIcons from "@/components/ui/FloatingIcons";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <CursorGlow />
      <MouseGradient />
      <FloatingIcons />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
