"use client";

import { motion } from "framer-motion";
import { TrophyIcon, StarIcon, AwardIcon, TargetIcon } from "lucide-react";
import Image from "next/image";

const ACHIEVEMENTS = [
  { icon: TrophyIcon, label: "2nd Place Code Relay IT days 2026." },
  { icon: StarIcon, label: "Surviving IT" },
  { icon: AwardIcon, label: "CSS NC2 Holder" },
  { icon: TargetIcon, label: "10+ Projects Made" },
];

const INTERESTS = [
  "building web apps that solve real problems",
  "learning new programming languages and tools",
  "sketching or drawing ideas before coding them",
  "I like iced coffee almost as much as I like debugging code",
  "listening to music while coding",
];

const GALLERY_IMAGES = [
  { src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=400&fit=crop", alt: "Coding on laptop" },
  { src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=400&fit=crop", alt: "Code on screen" },
  { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop", alt: "Team collaboration" },
  { src: "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=400&h=400&fit=crop", alt: "Developer setup" },
];

export function AboutSection() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto space-y-20">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">About Me</h2>
          <div className="w-20 h-1 bg-accent rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {GALLERY_IMAGES.map((img, idx) => (
              <div key={idx} className="aspect-square glass-panel relative overflow-hidden group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/10 dark:from-white/5 to-transparent" />
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="glass-panel p-8">
              <div className="mb-6">
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">Name:</span>
                <p className="text-xl font-medium mt-1 text-slate-900 dark:text-white">Jai Andales</p>
              </div>
              <div>
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">Bio:</span>
                <p className="text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                  I am a 3rd year Bachelor of Science in Information Technology student with a strong interest in 
                  web development and system design. I enjoy building practical applications, especially using 
                  technologies like PHP, React, and modern web frameworks. I am currently developing projects 
                  such as management systems and portfolios to strengthen my skills in both frontend and backend 
                  development. I am eager to keep learning and grow into a professional developer who creates 
                  efficient and user-friendly solutions. 
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="glass-panel p-8">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-slate-900 dark:text-white">
              <span className="w-8 h-[1px] bg-black/20 dark:bg-white/20" />
              Achievements
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {ACHIEVEMENTS.map((ach, idx) => (
                <div key={idx} className="glass-panel p-5 flex flex-col items-center text-center gap-3 hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <ach.icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">{ach.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel p-8">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-slate-900 dark:text-white">
              <span className="w-8 h-[1px] bg-black/20 dark:bg-white/20" />
              What I Like
            </h3>
            <ul className="space-y-4">
              {INTERESTS.map((interest, idx) => (
                <li key={idx} className="flex items-center gap-4 text-slate-700 dark:text-slate-300 glass-panel p-4 hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                  <span className="font-medium">{interest}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}