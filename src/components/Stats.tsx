import { TrendingUp, Users, FolderCheck, Clock } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const stats = [
  { icon: FolderCheck, value: "50+", label: "Projects Delivered", description: "Successfully completed projects across web, security & design" },
  { icon: Users, value: "30+", label: "Happy Clients", description: "Startups and businesses trusting us with their digital growth" },
  { icon: Clock, value: "3+", label: "Years Experience", description: "Combined expertise across development, security & design" },
  { icon: TrendingUp, value: "99%", label: "Client Satisfaction", description: "Our clients keep coming back for more" },
];

const Stats = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-20 md:py-24 border-y border-border" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(({ icon: Icon, value, label, description }) => (
            <div key={label} className="reveal text-center group">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                <Icon size={26} />
              </div>
              <p className="font-heading text-3xl md:text-4xl font-bold text-gradient mb-1">{value}</p>
              <p className="font-heading font-semibold text-foreground text-sm mb-1">{label}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
