import logo from "@/assets/triforge-logo.jpeg";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Triforge Lab" className="h-8 w-8 rounded-lg object-cover" />
          <span className="font-heading font-bold text-foreground">Triforge Lab</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Triforge Lab. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
