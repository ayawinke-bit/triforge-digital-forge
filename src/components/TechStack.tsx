import useScrollReveal from "@/hooks/useScrollReveal";

const technologies = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Figma", category: "Design" },
  { name: "Docker", category: "DevOps" },
  { name: "AWS", category: "Cloud" },
  { name: "Git", category: "Tooling" },
];

const TechStack = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">Technologies</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Our <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
            We leverage cutting-edge tools and frameworks to build products that are fast, secure, and future-proof.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 reveal max-w-3xl mx-auto">
          {technologies.map(({ name, category }) => (
            <div
              key={name}
              className="glass rounded-full px-6 py-3 hover:border-primary/40 transition-all duration-300 group cursor-default"
            >
              <span className="font-heading font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                {name}
              </span>
              <span className="ml-2 text-xs text-muted-foreground">{category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
