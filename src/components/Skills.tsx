import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Users } from "lucide-react";

/**
 * Skills Section Component
 * Update the skillsData arrays to customize your skills
 */

// ========== CUSTOMIZE THIS SECTION ==========
const skillsData = {
  technical: [
    { name: "Python", level: 90 },
    { name: "SQL & NoSQL", level: 85 },
    { name: "Network Security", level: 88 },
    { name: "Penetration Testing", level: 82 },
    { name: "SIEM Tools", level: 85 },
    { name: "Wireshark", level: 80 },
    { name: "Metasploit", level: 78 },
    { name: "Burp Suite", level: 75 },
    { name: "Linux/Unix", level: 88 },
    { name: "Cloud Security (AWS/Azure)", level: 80 },
    { name: "Tableau/Power BI", level: 82 },
    { name: "Machine Learning", level: 70 },
  ],
  soft: [
    "Problem Solving",
    "Critical Thinking",
    "Communication",
    "Team Leadership",
    "Risk Assessment",
    "Documentation",
    "Incident Response",
    "Stakeholder Management",
  ],
  tools: [
    "Splunk",
    "Nessus",
    "Nmap",
    "Kibana",
    "Git",
    "Docker",
    "Kubernetes",
    "Terraform",
    "Ansible",
    "Jenkins",
  ],
};
// ============================================

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-20" ref={ref}>
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="relative section-container">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
            Skills & Technologies
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Code className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">
                Technical Skills
              </h3>
            </div>
            <div className="space-y-4">
              {skillsData.technical.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                >
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-mono text-muted-foreground">
                      {skill.name}
                    </span>
                    <span className="text-sm font-mono text-primary">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{
                        duration: 1,
                        delay: 0.5 + index * 0.05,
                        ease: "easeOut",
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills & Tools */}
          <div className="space-y-8">
            {/* Soft Skills */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card p-6 sm:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">
                  Soft Skills
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skillsData.soft.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                    className="skill-badge"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Tools & Technologies */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-card p-6 sm:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Code className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-semibold text-foreground">
                  Tools & Technologies
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skillsData.tools.map((tool, index) => (
                  <motion.span
                    key={tool}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                    className="skill-badge hover:border-accent/50"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
