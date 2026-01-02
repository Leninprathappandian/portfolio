import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Database, Lock, Search } from "lucide-react";

/**
 * About Section Component
 * Update the aboutData object to personalize your bio
 */

// ========== CUSTOMIZE THIS SECTION ==========
const aboutData = {
  title: "About Me",
  paragraphs: [
    "I am a dedicated cybersecurity professional and data analyst with a passion for protecting organizations from evolving digital threats. With expertise spanning threat intelligence, vulnerability assessment, and security operations, I bring a comprehensive approach to safeguarding critical infrastructure.",
    "My data analysis background enables me to transform complex security data into actionable insights, helping organizations make informed decisions about their security posture. I specialize in identifying patterns, anomalies, and potential threats through advanced analytical techniques.",
    "When I'm not defending networks or analyzing data, you'll find me researching the latest security trends, contributing to open-source security tools, or mentoring aspiring cybersecurity professionals.",
  ],
  highlights: [
    { icon: Shield, label: "Security First", value: "500+ vulnerabilities identified" },
    { icon: Database, label: "Data Analysis", value: "10M+ records processed" },
    { icon: Lock, label: "Compliance", value: "SOC 2, GDPR, HIPAA" },
    { icon: Search, label: "Threat Intel", value: "24/7 monitoring" },
  ],
};
// ============================================

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-20" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />

      <div className="relative section-container">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
            {aboutData.title}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {aboutData.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-muted-foreground leading-relaxed text-lg"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Right Column - Highlights Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {aboutData.highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="glass-card p-6 group hover:border-primary/30 transition-all duration-300"
              >
                <item.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-foreground mb-1">
                  {item.label}
                </h3>
                <p className="text-sm text-muted-foreground font-mono">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
