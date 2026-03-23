import { useState } from "react";
import { Send, Mail, MapPin, Phone, Clock, CheckCircle, AlertCircle } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const Contact = () => {
  const ref = useScrollReveal();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!form.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.trim().length < 10) {
      newErrors.message = "Message should be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus("loading");

    try {
      // Simulate API call - in production, replace with actual backend endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Here you would normally send data to your backend
      console.log("Form submitted:", form);

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">Contact</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Let's Build <span className="text-gradient">Something Together</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? We'd love to hear about it. Drop us a message and let's start a conversation about bringing your ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <form onSubmit={handleSubmit} className="reveal space-y-5">
            {/* Success Message */}
            {status === "success" && (
              <div className="rounded-lg bg-green-500/10 border border-green-500/30 p-4 flex gap-3">
                <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-green-400">Message sent successfully!</p>
                  <p className="text-sm text-green-300/80">We'll get back to you within 24 hours.</p>
                </div>
              </div>
            )}

            {/* Error Message */}
            {status === "error" && (
              <div className="rounded-lg bg-red-500/10 border border-red-500/30 p-4 flex gap-3">
                <AlertCircle size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-red-400">Something went wrong</p>
                  <p className="text-sm text-red-300/80">Please try again later or contact us directly.</p>
                </div>
              </div>
            )}

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => {
                    setForm({ ...form, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: "" });
                  }}
                  className={`w-full rounded-lg border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none transition-colors ${
                    errors.name ? "border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500/20" : "border-border focus:border-primary focus:ring-1 focus:ring-primary"
                  }`}
                  placeholder="Your name"
                />
                {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => {
                    setForm({ ...form, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: "" });
                  }}
                  className={`w-full rounded-lg border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none transition-colors ${
                    errors.email ? "border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500/20" : "border-border focus:border-primary focus:ring-1 focus:ring-primary"
                  }`}
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
              <input
                type="text"
                value={form.subject}
                onChange={(e) => {
                  setForm({ ...form, subject: e.target.value });
                  if (errors.subject) setErrors({ ...errors, subject: "" });
                }}
                className={`w-full rounded-lg border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none transition-colors ${
                  errors.subject ? "border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500/20" : "border-border focus:border-primary focus:ring-1 focus:ring-primary"
                }`}
                placeholder="What's this about?"
              />
              {errors.subject && <p className="text-xs text-red-400 mt-1">{errors.subject}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Message</label>
              <textarea
                rows={5}
                value={form.message}
                onChange={(e) => {
                  setForm({ ...form, message: e.target.value });
                  if (errors.message) setErrors({ ...errors, message: "" });
                }}
                className={`w-full rounded-lg border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none transition-colors resize-none ${
                  errors.message ? "border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500/20" : "border-border focus:border-primary focus:ring-1 focus:ring-primary"
                }`}
                placeholder="Tell us about your project, timeline, and budget..."
              />
              {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="flex items-center justify-center gap-2 w-full rounded-lg bg-primary px-8 py-3 font-medium text-primary-foreground hover:bg-primary/90 disabled:bg-primary/50 disabled:cursor-not-allowed transition-colors glow-cyan"
            >
              Send Message <Send size={16} />
            </button>
          </form>

          {/* Info */}
          <div className="reveal space-y-6 flex flex-col justify-center">
            <div className="glass rounded-2xl p-6">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground">Email Us</p>
                  <p className="text-sm text-muted-foreground">triforgedigital@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4 mb-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Phone size={22} />
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground">Call Us</p>
                  <p className="text-sm text-muted-foreground">+254 715 564 296</p>
                  <p className="text-sm text-muted-foreground">+254 745 617 108</p>
                  <p className="text-sm text-muted-foreground">+254 742 268 882</p>
                </div>
              </div>
              <div className="flex items-start gap-4 mb-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground">Location</p>
                  <p className="text-sm text-muted-foreground">Working remotely, building globally</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Clock size={22} />
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground">Response Time</p>
                  <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
