import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

/**
 * Education Section Component
 * Update the educationData array with your educational background
 */

// ========== CUSTOMIZE THIS SECTION ==========
const educationData = [
  {
    degree: "Master of Science in Cybersecurity",
    institution: "Stanford University",
    location: "Stanford, CA",
    period: "2020 - 2022",
    description:
      "Specialized in Network Security and Cryptography. Thesis on 'Advanced Threat Detection Using Machine Learning'. GPA: 3.9/4.0",
    achievements: [
      "Dean's List - All Semesters",
      "Graduate Research Assistant",
      "Published 2 research papers",
    ],
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "MIT",
    location: "Cambridge, MA",
    period: "2016 - 2020",
    description:
      "Focus on Data Science and Information Security. Minor in Mathematics. Graduated Magna Cum Laude.",
    achievements: [
      "Summa Cum Laude",
      "Cybersecurity Club President",
      "Hackathon Winner - 3x",
    ],
  },
  {
    degree: "High School Diploma",
    institution: "Tech Academy High School",
    location: "San Francisco, CA",
    period: "2012 - 2016",
    description:
      "STEM-focused curriculum with advanced placement in Computer Science and Mathematics.",
    achievements: ["Valedictorian", "National Merit Scholar", "AP Scholar Award"],
  },
];
// ============================================

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="relative py-20" ref={ref}>
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="relative section-container">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm mb-2 block">
            // academic_background
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
            Education
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent transform -translate-x-1/2 hidden md:block" />

          {educationData.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0
                  ? "md:pr-[50%] md:text-right"
                  : "md:pl-[50%] md:ml-auto"
              }`}
            >
              {/* Timeline Dot */}
              <div
                className={`absolute top-0 w-4 h-4 rounded-full bg-primary cyber-glow hidden md:block ${
                  index % 2 === 0
                    ? "right-0 translate-x-[calc(50%+0.5px)]"
                    : "left-0 -translate-x-[calc(50%+0.5px)]"
                }`}
              />

              <div
                className={`glass-card p-6 ${
                  index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                }`}
              >
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4 ${
                    index % 2 === 0 ? "md:ml-auto" : ""
                  }`}
                >
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {edu.degree}
                </h3>
                <p className="text-primary font-medium mb-2">{edu.institution}</p>

                {/* Meta Info */}
                <div
                  className={`flex flex-wrap gap-4 text-sm text-muted-foreground mb-4 ${
                    index % 2 === 0 ? "md:justify-end" : ""
                  }`}
                >
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {edu.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {edu.location}
                  </span>
                </div>

                <p className="text-muted-foreground mb-4">{edu.description}</p>

                {/* Achievements */}
                <div
                  className={`flex flex-wrap gap-2 ${
                    index % 2 === 0 ? "md:justify-end" : ""
                  }`}
                >
                  {edu.achievements.map((achievement) => (
                    <span
                      key={achievement}
                      className="px-3 py-1 text-xs font-mono bg-accent/10 text-accent border border-accent/20 rounded-full"
                    >
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
