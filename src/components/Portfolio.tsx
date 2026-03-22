import { ExternalLink, Github } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const projects = [
  {
    title: "E-Commerce Platform",
    tags: ["React", "Node.js", "PostgreSQL"],
    description: "A modern e-commerce platform with real-time inventory management, secure payment processing, and an intuitive admin dashboard for seamless business operations.",
    image: "bg-gradient-to-br from-blue-600/20 to-cyan-600/20",
    icon: "🛍️",
    link: "#",
  },
  {
    title: "Security Dashboard",
    tags: ["Cybersecurity", "Python", "REST API"],
    description: "Real-time threat monitoring and vulnerability assessment dashboard for enterprise clients. Features automated scanning, alert systems, and comprehensive reporting.",
    image: "bg-gradient-to-br from-red-600/20 to-orange-600/20",
    icon: "🛡️",
    link: "#",
  },
  {
    title: "Brand Identity Suite",
    tags: ["Branding", "UI/UX", "Figma"],
    description: "Complete brand identity redesign including logo, style guide, digital asset library, and responsive website — transforming a startup's visual presence from scratch.",
    image: "bg-gradient-to-br from-purple-600/20 to-pink-600/20",
    icon: "🎨",
    link: "#",
  },
  {
    title: "SaaS Application",
    tags: ["Full Stack", "TypeScript", "Cloud"],
    description: "Scalable SaaS platform with multi-tenant architecture, automated deployment pipelines, role-based access control, and real-time analytics dashboard.",
    image: "bg-gradient-to-br from-green-600/20 to-emerald-600/20",
    icon: "📊",
    link: "#",
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

        <div className="grid sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.title}
              className="reveal glass rounded-2xl overflow-hidden group hover:border-primary/40 transition-all duration-500 hover:scale-[1.02] flex flex-col"
            >
              {/* Image area with icon */}
              <div className={`${project.image} h-48 bg-gradient-to-br flex items-center justify-center relative overflow-hidden flex-shrink-0`}>
                <div className="absolute inset-0 hero-grid opacity-20" />
                <div className="relative z-10 flex flex-col items-center justify-center">
                  <div className="text-6xl mb-3">{project.icon}</div>
                  <ExternalLink size={24} className="text-muted-foreground/50 group-hover:text-primary/60 transition-colors" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-3 flex-shrink-0">
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
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{project.description}</p>
                
                {/* Link buttons */}
                <div className="flex gap-2 mt-6 pt-4 border-t border-border flex-shrink-0">
                  <a
                    href={project.link}
                    className="flex-1 flex items-center justify-center gap-2 text-xs font-medium px-3 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                  >
                    View Project
                    <ExternalLink size={14} />
                  </a>
                  <a
                    href="#"
                    className="flex-1 flex items-center justify-center gap-2 text-xs font-medium px-3 py-2 rounded-lg border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                  >
                    View Code
                    <Github size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 reveal">
          <p className="text-muted-foreground mb-4">Interested in seeing more of our work?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            Get in touch to discuss your project
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
