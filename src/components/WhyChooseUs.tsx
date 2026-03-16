import { Users, Cpu, Palette, ShieldCheck, Rocket } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const reasons = [
  {
    icon: Users,
    title: "Multi-Disciplinary Team",
    description: "Three specialists covering full stack development, cybersecurity, and creative design — all in one team. No middlemen, no miscommunication.",
  },
  {
    icon: Cpu,
    title: "Modern Technologies",
    description: "We use cutting-edge frameworks, languages, and tools to ensure your product is built with the best technology available today.",
  },
  {
    icon: Palette,
    title: "User-Centered Design",
    description: "Every interface we create is designed with your users in mind — intuitive navigation, stunning visuals, and engaging experiences.",
  },
  {
    icon: ShieldCheck,
    title: "Security-First Approach",
    description: "Security isn't an afterthought. Every product we build undergoes rigorous testing and hardening before it reaches your users.",
  },
  {
    icon: Rocket,
    title: "Startup-Friendly",
    description: "We understand the pace and budget constraints of startups. We deliver fast, iterate quickly, and scale with your growth.",
  },
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
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
            We're not just another agency. We're a tight-knit team of specialists who care deeply about every project we take on.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
          {reasons.map(({ icon: Icon, title, description }, index) => (
            <div
              key={title}
              className={`glass rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 group ${
                index === reasons.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                <Icon size={24} />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
