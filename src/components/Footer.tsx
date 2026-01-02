import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Shield, Heart } from "lucide-react";

/**
 * Footer Component
 * Update socialLinks and footerData to customize
 */

// ========== CUSTOMIZE THIS SECTION ==========
const footerData = {
  name: "Lenin Prathap Pandian",
  tagline: "Cybersecurity Analyst & Data Specialist",
};

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/johndoe",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/johndoe",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/johndoe",
    icon: Twitter,
  },
  {
    name: "Email",
    url: "mailto:john.doe@example.com",
    icon: Mail,
  },
];

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];
// ============================================

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative border-t border-border bg-secondary/20">
      <div className="absolute inset-0 grid-pattern opacity-5" />

      <div className="relative section-container py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-primary" />
              <span className="font-bold text-lg text-foreground">
                {footerData.name}
              </span>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs">
              {footerData.tagline}. Building secure solutions and transforming
              data into insights.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Connect</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-secondary border border-transparent hover:border-primary/20 transition-all"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {footerData.name}. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-destructive" /> using React
            & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
