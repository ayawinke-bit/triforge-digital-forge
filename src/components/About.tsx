import { Lightbulb, Zap, Target, Shield } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const values = [
  { icon: Lightbulb, label: "Innovation" },
  { icon: Zap, label: "Performance" },
  { icon: Target, label: "Precision" },
  { icon: Shield, label: "Security" },
];

const About = () => {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="reveal">
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">About Us</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-foreground">
              A Compact Team.{" "}
              <span className="text-gradient">Powerful Solutions.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Triforge Lab is a forward-thinking tech collective focused on building modern
              digital solutions for businesses and individuals. Though we are a compact team
              of three, we combine strong expertise in software development, cybersecurity,
              and creative design to deliver high-quality products.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our mission is to help businesses transform their ideas into reliable digital
              products through innovation, collaboration, and technical excellence.
            </p>
          </div>

          {/* Values grid */}
          <div className="reveal grid grid-cols-2 gap-4">
            {values.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="glass rounded-xl p-6 text-center hover:border-primary/30 transition-colors group"
              >
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <Icon size={24} />
                </div>
                <p className="font-heading font-semibold text-foreground">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
