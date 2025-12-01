import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, FolderGit2 } from "lucide-react";
import { Project } from "../types";

const projects: Project[] = [
  {
    id: 1,
    title: "AAAS Commerce",
    description:
      "Developed a modern and responsive e-commerce platform with a clean UI and smooth user experience, built using React and Tailwind CSS",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    githubLink: "https://github.com/s8kun/AAAS",
    demoLink: "https://aaas-azure.vercel.app/",
    imageUrl: "/images/image.png",
  },
  {
    id: 2,
    title: "AI Landing Page",
    description:
      "A modern and fully responsive AI landing page built with React and Tailwind CSS. Features multilingual support using i18next (Arabic & English), global state management with Zustand for dark/light mode, and a clean, interactive UI designed to deliver a smooth user experience",
    technologies: ["React", "TypeScript", "Tailwind CSS", "i18next", "Zustand"],
    githubLink: "https://github.com/s8kun/Ai-landingPage",
    demoLink: "https://ai-landing-page-five-sepia.vercel.app/",
    imageUrl: "/images/image2.png",
  },
  {
    id: 3,
    title: "AAAS API Backend",
    description:
      "A robust Laravel-based API and dashboard for creating, updating, and deleting content. The system provides secure authentication and clean RESTful APIs for all operations",
    technologies: ["PHP", "Laravel", "MySQL", "API"],
    githubLink: "https://github.com/s8kun/api-AAAS",
    demoLink: null,
    imageUrl: null,
  },
  {
    id: 4,
    title: "React & Laravel CRUD App",
    description:
      "Built a full CRUD application using Laravel for the backend and React for the frontend. Features API-based communication, reusable components, and a clean, responsive UI for efficient data management.",
    technologies: ["React", "Laravel", "PHP", "Tailwind CSS"],
    githubLink: "https://github.com/s8kun/lara-react-crud",
    demoLink: null,
    imageUrl: null,
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400">
            Check out some of my recent work from my GitHub.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="group bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Image Container */}
              {project.imageUrl && (
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors"
                  >
                    {project.title}
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500"
                  >
                    <FolderGit2 className="text-gray-500" size={20} />
                  </a>
                </div>

                <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-900/30 rounded-full border border-blue-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-slate-800">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                  >
                    <Github size={18} />
                    GitHub
                  </a>
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/s8kun"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-full transition-all border border-slate-600 hover:border-blue-500"
          >
            <Github size={20} />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
