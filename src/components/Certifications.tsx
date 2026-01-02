import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink, Calendar } from "lucide-react";

/**
 * Certifications Section Component
 * Update the certificationsData array with your certifications
 */

// ========== CUSTOMIZE THIS SECTION ==========
const certificationsData = [
  {
    name: "Certified Information Systems Security Professional (CISSP)",
    issuer: "(ISC)²",
    date: "2023",
    credentialUrl: "https://www.isc2.org/Certifications/CISSP",
    badge: "🛡️",
  },
  {
    name: "Certified Ethical Hacker (CEH)",
    issuer: "EC-Council",
    date: "2022",
    credentialUrl: "https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/",
    badge: "🔓",
  },
  {
    name: "AWS Certified Security - Specialty",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialUrl: "https://aws.amazon.com/certification/certified-security-specialty/",
    badge: "☁️",
  },
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    date: "2021",
    credentialUrl: "https://www.comptia.org/certifications/security",
    badge: "✓",
  },
  {
    name: "Google Data Analytics Professional Certificate",
    issuer: "Google",
    date: "2022",
    credentialUrl: "https://www.coursera.org/professional-certificates/google-data-analytics",
    badge: "📊",
  },
  {
    name: "GIAC Security Essentials (GSEC)",
    issuer: "SANS Institute",
    date: "2023",
    credentialUrl: "https://www.giac.org/certifications/security-essentials-gsec/",
    badge: "🔐",
  },
];
// ============================================

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="relative py-20" ref={ref}>
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
            Certifications
          </h2>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, index) => (
            <motion.a
              key={cert.name}
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="glass-card p-6 group hover:border-primary/30 transition-all duration-300 cursor-pointer"
            >
              {/* Badge */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  {cert.badge}
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>

              {/* Content */}
              <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                {cert.name}
              </h3>

              <p className="text-sm text-primary mb-3">{cert.issuer}</p>

              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar className="w-3 h-3" />
                <span>Issued {cert.date}</span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Additional Badge Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-primary/20">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              <span className="text-primary font-semibold">
                {certificationsData.length}+
              </span>{" "}
              Professional Certifications
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
