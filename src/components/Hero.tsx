import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Hero Section Component
 * Update the name, role, and intro text below to personalize
 */

// ========== CUSTOMIZE THIS SECTION ==========
const heroData = {
  name: "John Doe",
  role: "Cybersecurity Analyst & Data Specialist",
  intro: "Protecting digital assets and transforming data into actionable insights. Specializing in threat detection, vulnerability assessment, and security analytics.",
  email: "john.doe@example.com",
  github: "https://github.com/johndoe",
  linkedin: "https://linkedin.com/in/johndoe",
};
// ============================================

const Hero = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      
      {/* Floating cyber elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 section-container text-center">
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4"
        >
          <span className="text-foreground">Hi, I'm </span>
          <span className="gradient-text">{heroData.name}</span>
        </motion.h1>

        {/* Role */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl sm:text-2xl md:text-3xl font-mono text-primary mb-6"
        >
          {heroData.role}
        </motion.h2>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {heroData.intro}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Button variant="cyber" size="lg" onClick={scrollToContact}>
            <Mail className="w-5 h-5" />
            Get In Touch
          </Button>
          <Button variant="cyber-outline" size="lg" asChild>
            <a href={heroData.github} target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
              View GitHub
            </a>
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href={heroData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-secondary transition-all duration-300"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={heroData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-secondary transition-all duration-300"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${heroData.email}`}
            className="p-3 rounded-full bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-secondary transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs font-mono">scroll down</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
