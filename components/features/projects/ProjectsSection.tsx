"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLinkIcon, } from "lucide-react";
import { ALL_PROJECTS, PROJECT_FILTERS } from "@/data/projects";
import Image from "next/image";


export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? ALL_PROJECTS
      : ALL_PROJECTS.filter((p) => p.tag === activeFilter);

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div>
          <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">Projects</h2>
          <div className="w-20 h-1 bg-accent rounded-full" />
        </div>
        <div className="flex flex-wrap gap-2">
          {PROJECT_FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-accent text-white shadow-[0_0_15px_rgba(14,165,233,0.4)]"
                  : "glass-button text-slate-600 dark:text-slate-300"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </motion.div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="glass-panel overflow-hidden group flex flex-col h-full"
            >
              <div className="aspect-video bg-black/5 dark:bg-white/5 border-b border-black/10 dark:border-white/10 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-100/80 dark:from-background/80 to-transparent z-10" />
                 <Image
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                <span className="absolute top-3 right-3 z-20 text-xs font-semibold px-2.5 py-1 rounded-full bg-white/80 dark:bg-background/80 text-slate-900 dark:text-white border border-black/10 dark:border-white/10 backdrop-blur-md">
                  {project.tag}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow">{project.desc}</p>
                <div className="grid grid-cols-2 gap-3 mt-auto">
                  <button className="glass-button py-2.5 flex items-center justify-center gap-2 text-sm font-medium text-accent hover:text-accent/80 group/btn border-accent/30 hover:border-accent/50">
                    <ExternalLinkIcon className="w-4 h-4" />
                    Demo
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}