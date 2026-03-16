import { MessageSquare, Search, Code2, Rocket, ShieldCheck, HeartHandshake } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Discovery & Consultation",
    description: "We start by understanding your vision, goals, and challenges through in-depth discussions. Every great product begins with a great conversation.",
  },
  {
    icon: Search,
    step: "02",
    title: "Research & Strategy",
    description: "We analyze your market, audience, and competitors to craft a strategic blueprint that positions your product for success from day one.",
  },
  {
    icon: Code2,
    step: "03",
    title: "Design & Development",
    description: "Our team brings your vision to life with stunning UI/UX design and robust, scalable code — built with modern frameworks and best practices.",
  },
  {
    icon: ShieldCheck,
    step: "04",
    title: "Security Hardening",
    description: "Before launch, every product undergoes rigorous security audits, penetration testing, and vulnerability assessments to ensure bulletproof protection.",
  },
  {
    icon: Rocket,
    step: "05",
    title: "Launch & Deployment",
    description: "We handle seamless deployment with optimized performance, monitoring, and zero-downtime strategies so your product hits the ground running.",
  },
  {
    icon: HeartHandshake,
    step: "06",
    title: "Ongoing Support",
    description: "Our partnership doesn't end at launch. We provide continuous maintenance, updates, and technical support to keep your product evolving.",
  },
];

const Process = () => {
  const ref = useScrollReveal();

  return (
    <section id="process" className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">Our Process</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            How We <span className="text-gradient">Work</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
            From idea to launch, we follow a proven process that ensures quality, security, and exceptional results at every stage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map(({ icon: Icon, step, title, description }) => (
            <div
              key={step}
              className="reveal glass rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 group relative overflow-hidden"
            >
              <span className="absolute top-4 right-4 font-heading text-5xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors">
                {step}
              </span>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
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

export default Process;
