import { ExternalLink } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const projects = [
  {
    title: "E-Commerce Platform",
    tags: ["React", "Node.js", "PostgreSQL"],
    description: "A modern e-commerce platform with real-time inventory management, secure payment processing, and an intuitive admin dashboard for seamless business operations.",
  },
  {
    title: "Security Dashboard",
    tags: ["Cybersecurity", "Python", "REST API"],
    description: "Real-time threat monitoring and vulnerability assessment dashboard for enterprise clients. Features automated scanning, alert systems, and comprehensive reporting.",
  },
  {
    title: "Brand Identity Suite",
    tags: ["Branding", "UI/UX", "Figma"],
    description: "Complete brand identity redesign including logo, style guide, digital asset library, and responsive website — transforming a startup's visual presence from scratch.",
  },
  {
    title: "SaaS Application",
    tags: ["Full Stack", "TypeScript", "Cloud"],
    description: "Scalable SaaS platform with multi-tenant architecture, automated deployment pipelines, role-based access control, and real-time analytics dashboard.",
  },
];

const Portfolio = () => {
  const ref = useScrollReveal();

  return (
    <section id="portfolio" className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">Our Work</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
            A selection of projects that showcase our ability to deliver end-to-end digital solutions across development, security, and design.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="reveal glass rounded-2xl overflow-hidden group hover:border-primary/30 transition-all duration-500 hover:scale-[1.02]"
            >
              {/* Placeholder image area */}
              <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 hero-grid opacity-20" />
                <ExternalLink size={32} className="text-muted-foreground/30 group-hover:text-primary/50 transition-colors relative z-10" />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
