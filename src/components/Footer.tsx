import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import logo from "@/assets/triforge-logo.jpeg";

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Triforge Lab" className="h-10 w-10 rounded-lg object-cover" />
              <span className="font-heading text-xl font-bold text-gradient">Triforge Lab</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              A forward-thinking tech collective building modern digital solutions through innovation, security, and creative design.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card/50 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Web Development</li>
              <li className="text-sm text-muted-foreground">Full Stack Apps</li>
              <li className="text-sm text-muted-foreground">Cybersecurity</li>
              <li className="text-sm text-muted-foreground">UI/UX Design</li>
              <li className="text-sm text-muted-foreground">Graphic Design & Branding</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Triforge Lab. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/60">
            Crafted with passion by Triforge Lab
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
