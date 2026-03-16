import { Quote } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const testimonials = [
  {
    quote: "Triforge Lab transformed our outdated website into a modern, secure platform that our customers love. Their attention to detail and security-first approach gave us complete peace of mind.",
    name: "James K.",
    role: "CEO, TechStart Inc.",
  },
  {
    quote: "Working with Triforge was a game-changer for our startup. They didn't just build an app — they crafted an entire digital experience that set us apart from competitors.",
    name: "Sarah M.",
    role: "Founder, GreenLeaf Solutions",
  },
  {
    quote: "The cybersecurity audit they performed uncovered critical vulnerabilities we never knew existed. Their team is thorough, professional, and genuinely cares about protecting your business.",
    name: "David O.",
    role: "CTO, SecureFlow",
  },
];

const Testimonials = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">Testimonials</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it — hear from the businesses we've helped transform.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map(({ quote, name, role }) => (
            <div
              key={name}
              className="reveal glass rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 group relative"
            >
              <Quote size={32} className="text-primary/10 group-hover:text-primary/20 transition-colors mb-4" />
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 italic">"{quote}"</p>
              <div className="border-t border-border pt-4">
                <p className="font-heading font-bold text-foreground text-sm">{name}</p>
                <p className="text-xs text-muted-foreground">{role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
