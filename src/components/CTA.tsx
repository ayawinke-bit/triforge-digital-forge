import { ArrowRight, Zap } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const CTA = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-24 md:py-32 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Background elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px] -z-10" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-secondary/5 blur-[100px] -z-10" />

        <div className="reveal glass rounded-3xl p-12 md:p-16 border border-primary/20 relative overflow-hidden group">
          {/* Animated background gradient */}
          <div className="absolute inset-0 hero-grid opacity-10 group-hover:opacity-20 transition-opacity duration-500" />

          <div className="relative z-10">
            <div className="flex items-center justify-between gap-4 mb-6">
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground max-w-2xl">
                Ready to Build Something{" "}
                <span className="text-gradient">Extraordinary?</span>
              </h2>
              <div className="hidden lg:flex h-24 w-24 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                <Zap size={48} />
              </div>
            </div>

            <p className="text-muted-foreground text-lg max-w-2xl mb-8 leading-relaxed">
              Let's transform your vision into a secure, scalable, and stunning digital
              solution. Whether you've been thinking about this for months or just had the
              idea yesterday, we're ready to help you bring it to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="group/btn flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 font-semibold text-primary-foreground hover:bg-primary/90 transition-all duration-300 glow-cyan hover:scale-105"
              >
                Start Your Project
                <ArrowRight
                  size={20}
                  className="group-hover/btn:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 rounded-lg border-2 border-primary/30 bg-primary/5 px-8 py-4 font-semibold text-foreground hover:border-primary/60 hover:bg-primary/10 transition-all duration-300"
              >
                Schedule a Consultation
              </a>
            </div>

            <p className="text-xs text-muted-foreground mt-8">
              💡 First consultation is completely free. No credit card needed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
