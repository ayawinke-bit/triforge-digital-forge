import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Team from "@/components/Team";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Team />
      <Services />
      <Process />
      <Portfolio />
      <TechStack />
      <Testimonials />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
