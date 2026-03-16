import { Users, Cpu, Palette, ShieldCheck, Rocket } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const reasons = [
  { icon: Users, text: "Skilled multi-disciplinary team" },
  { icon: Cpu, text: "Modern technologies and secure practices" },
  { icon: Palette, text: "Creative and user-centered designs" },
  { icon: ShieldCheck, text: "Reliable and scalable solutions" },
  { icon: Rocket, text: "Dedicated to helping startups grow" },
];

const WhyChooseUs = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">Why Us</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Why Choose <span className="text-gradient">Triforge Lab</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 reveal">
          {reasons.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="glass rounded-2xl p-6 text-center hover:border-primary/30 transition-colors group"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                <Icon size={24} />
              </div>
              <p className="text-sm font-medium text-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
