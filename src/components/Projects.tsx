import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Lock, Database, Shield, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Projects Section Component
 * Update the projectsData array to showcase your projects
 * Replace placeholder images with your own project screenshots
 */

// ========== CUSTOMIZE THIS SECTION ==========
const projectsData = [
  {
    title: "Security Operations Dashboard",
    description:
      "Real-time security monitoring dashboard with threat detection, incident tracking, and automated alerting. Processes millions of log entries daily to identify potential security incidents.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    techStack: ["Python", "React", "Elasticsearch", "Kibana", "Docker"],
    githubUrl: "https://github.com/johndoe/security-dashboard",
    liveUrl: "https://demo.security-dashboard.com",
    icon: Shield,
  },
  {
    title: "Vulnerability Scanner Tool",
    description:
      "Automated vulnerability scanning tool that identifies security weaknesses in web applications. Features custom exploit detection and comprehensive reporting.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=500&fit=crop",
    techStack: ["Python", "Nmap", "SQLite", "Flask", "Bootstrap"],
    githubUrl: "https://github.com/johndoe/vuln-scanner",
    liveUrl: null,
    icon: Lock,
  },
  {
    title: "Data Analytics Pipeline",
    description:
      "End-to-end data pipeline for processing and analyzing large datasets. Includes ETL processes, data visualization, and machine learning models for predictive analytics.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    techStack: ["Python", "Apache Spark", "Tableau", "AWS", "PostgreSQL"],
    githubUrl: "https://github.com/johndoe/data-pipeline",
    liveUrl: "https://demo.data-pipeline.com",
    icon: Database,
  },
  {
    title: "Threat Intelligence Platform",
    description:
      "Aggregates threat data from multiple sources to provide actionable intelligence. Features automated IOC enrichment and threat correlation.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop",
    techStack: ["Python", "MongoDB", "FastAPI", "Redis", "Vue.js"],
    githubUrl: "https://github.com/johndoe/threat-intel",
    liveUrl: null,
    icon: BarChart3,
  },
];
// ============================================

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-20" ref={ref}>
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
            Projects
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="glass-card group overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <div className="absolute top-4 right-4 p-2 rounded-lg bg-background/80 backdrop-blur-sm">
                  <project.icon className="w-5 h-5 text-primary" />
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-mono bg-secondary/50 text-muted-foreground rounded border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button variant="cyber-outline" size="sm" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                  {project.liveUrl && (
                    <Button variant="cyber" size="sm" asChild>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
