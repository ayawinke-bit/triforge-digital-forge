import { ArrowRight, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 hero-grid opacity-40" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-primary/5 blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-secondary/5 blur-[120px] animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/3 blur-[200px]" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="inline-block mb-6 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary tracking-widest uppercase">
          Innovation · Security · Design
        </div>

        <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
          <span className="text-gradient">Triforge</span>{" "}
          <span className="text-foreground">Lab</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed">
          Where Code, Security & Creativity Converge.
        </p>
        <p className="text-base text-muted-foreground/80 max-w-xl mx-auto mb-10 leading-relaxed">
          We are a compact team of three technology specialists who combine development, cybersecurity, and design expertise to build modern digital solutions that are secure, scalable, and visually stunning.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#portfolio"
            className="group flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 font-medium text-primary-foreground hover:bg-primary/90 transition-colors glow-cyan"
          >
            View Our Work
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 rounded-lg border border-border bg-card/50 px-8 py-3.5 font-medium text-foreground hover:border-primary/40 hover:bg-card transition-colors"
          >
            Start a Project
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground">
        <ChevronDown size={24} />
      </div>
    </section>
  );
};

export default Hero;
