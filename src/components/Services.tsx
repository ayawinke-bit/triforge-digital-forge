import { Globe, Layers, ShieldCheck, Figma, PenTool, RefreshCw, Video, Image as ImageIcon } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom websites and web applications built with React, Next.js, and modern technologies. From landing pages to complex platforms, we craft fast, responsive, and SEO-optimized digital experiences.",
    span: "md:col-span-2",
  },
  {
    icon: Layers,
    title: "Full Stack Apps",
    description: "End-to-end development from beautiful user interfaces to powerful backend systems, APIs, and databases. We build scalable applications that grow with your business.",
    span: "",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    description: "Comprehensive security audits, penetration testing, vulnerability assessments, and system hardening. We protect your digital assets from evolving cyber threats.",
    span: "",
  },
  {
    icon: Figma,
    title: "UI/UX Design",
    description: "Creating intuitive, user-friendly, and visually appealing digital interfaces. We conduct user research, wireframing, and prototyping to deliver experiences users love.",
    span: "md:col-span-2",
  },
  {
    icon: PenTool,
    title: "Graphic Design & Branding",
    description: "Professional logos, brand identity systems, digital graphics, and creative assets that make your business memorable and visually consistent across all touchpoints.",
    span: "md:col-span-2",
  },
  {
    icon: RefreshCw,
    title: "Website Redesign",
    description: "Transform outdated websites into modern, high-performing platforms with improved design, faster load times, better security, and enhanced user experience.",
    span: "",
  },
  {
    icon: Video,
    title: "Video Editing",
    description: "Professional video editing, motion graphics, and post-production services to create engaging visual content for your brand.",
    span: "",
  },
  {
    icon: ImageIcon,
    title: "Photoshop & Retouching",
    description: "Advanced image manipulation, professional photo retouching, and precise digital compositing using Adobe Photoshop.",
    span: "",
  },
  {
    icon: PenTool,
    title: "Illustrator & Vector Art",
    description: "Custom vector graphics, scalable logos, and detailed digital illustration work using Adobe Illustrator.",
    span: "",
  },
];

const Services = () => {
  const ref = useScrollReveal();

  return (
    <section id="services" className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">What We Do</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
            We offer a comprehensive range of digital services designed to help your business thrive in the modern digital landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`reveal glass-panel rounded-2xl p-8 hover:border-primary/50 transition-all duration-500 group hover-lift ${service.span}`}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <Icon size={24} />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
