import { Code, Shield, Palette } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const team = [
  {
    name: "Reinhard Bonnke",
    role: "Full Stack Developer",
    description:
      "Specializes in designing and developing modern web applications from front-end interfaces to powerful backend systems. Experienced in building scalable platforms, APIs, and full digital products.",
    icon: Code,
    glowClass: "glow-blue hover:shadow-[0_0_30px_hsl(220_90%_56%/0.4),0_0_80px_hsl(220_90%_56%/0.15)]",
    borderColor: "border-blue-500/30 hover:border-blue-500/60",
    iconBg: "bg-blue-500/10 text-blue-400",
  },
  {
    name: "Stephen Maina",
    role: "Cybersecurity Specialist",
    description:
      "Responsible for protecting systems, networks, and applications from cyber threats. Focuses on security audits, vulnerability testing, system hardening, and ensuring product safety.",
    icon: Shield,
    glowClass: "glow-cyan hover:shadow-[0_0_30px_hsl(186_100%_50%/0.4),0_0_80px_hsl(186_100%_50%/0.15)]",
    borderColor: "border-primary/30 hover:border-primary/60",
    iconBg: "bg-primary/10 text-primary",
  },
  {
    name: "Eddy",
    role: "Graphic Designer",
    description:
      "The creative mind behind the visual identity of projects. Specializes in branding, UI/UX design, digital graphics, and crafting visually engaging user experiences.",
    icon: Palette,
    glowClass: "glow-violet hover:shadow-[0_0_30px_hsl(263_70%_58%/0.4),0_0_80px_hsl(263_70%_58%/0.15)]",
    borderColor: "border-secondary/30 hover:border-secondary/60",
    iconBg: "bg-secondary/10 text-secondary",
  },
];

const Team = () => {
  const ref = useScrollReveal();

  return (
    <section id="team" className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">The Trinity</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Meet Our <span className="text-gradient">Team</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member) => {
            const Icon = member.icon;
            return (
              <div
                key={member.name}
                className={`reveal glass rounded-2xl p-8 border ${member.borderColor} ${member.glowClass} transition-all duration-500 hover:scale-[1.03]`}
              >
                <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl ${member.iconBg}`}>
                  <Icon size={28} />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm font-medium text-primary mb-4">{member.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
