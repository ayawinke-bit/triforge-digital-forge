import { ChevronDown } from "lucide-react";
import { useState } from "react";
import useScrollReveal from "@/hooks/useScrollReveal";

const faqs = [
  {
    question: "What types of projects do you specialize in?",
    answer:
      "We specialize in full-stack web applications, mobile-friendly responsive websites, SaaS platforms, and cybersecurity assessments. Whether you're a startup or established business, we tailor our expertise to your specific needs. Our combined skills in development, security, and design allow us to handle projects of varying complexity.",
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "Timelines vary based on project scope and complexity. Small to medium projects typically take 4-8 weeks, while larger applications may take 3-6 months. We maintain transparent communication and provide detailed project roadmaps upfront so you know exactly what to expect.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Absolutely! We offer ongoing maintenance, bug fixes, performance optimization, and feature updates. We believe the partnership doesn't end at launch — we're committed to keeping your product secure, updated, and performing at its best.",
  },
  {
    question: "How do you handle security in your projects?",
    answer:
      "Security is built into every layer of our development process. We conduct code reviews, perform vulnerability assessments, implement industry best practices, and run penetration tests before launch. We also provide security audits for existing applications to identify and fix potential weaknesses.",
  },
  {
    question: "Can you work with existing code or legacy systems?",
    answer:
      "Yes! We regularly work with existing codebases, modernizing outdated systems, refactoring code for better performance, adding new features, and improving overall architecture. We can also conduct code audits to identify optimization opportunities.",
  },
  {
    question: "What are your pricing models?",
    answer:
      "We offer flexible engagement models: hourly rates for consultations and audits, fixed-price projects with milestone-based payments, and retainer agreements for ongoing support. Let's discuss your budget and needs to find the best arrangement for your project.",
  },
];

const FAQ = () => {
  const ref = useScrollReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
            Questions?
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about working with Triforge Lab. Can't find what
            you're looking for? Reach out to us directly.
          </p>
        </div>

        <div className="max-w-3xl mx-auto reveal">
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="glass rounded-xl hover:border-primary/30 transition-all duration-300 overflow-hidden group"
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full flex items-start justify-between p-6 text-left hover:bg-primary/3 transition-colors"
                >
                  <span className="font-heading font-semibold text-foreground pr-4 group-hover:text-primary transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`flex-shrink-0 text-primary transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6 border-t border-border pt-4 text-muted-foreground leading-relaxed text-sm">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
