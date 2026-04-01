"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CodeIcon, RocketIcon, BookOpenIcon } from "lucide-react";
import Image from "next/image";

const ACTIVITIES = [
  { icon: CodeIcon, title: "Clean Architecture", desc: "Building scalable and maintainable systems." },
  { icon: RocketIcon, title: "Performance", desc: "Optimizing web vitals and load times." },
  { icon: BookOpenIcon, title: "Continuous Learning", desc: "Exploring new frameworks and patterns." },
];

export function HeroSection() {
  return (
    <section className="min-h-[calc(100vh-5rem)] pt-12 pb-20 px-6 flex flex-col justify-center max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="aspect-square glass-panel relative overflow-hidden group"
        >
          <Image
          src="/images/profile.jpg"
          alt="Developer workspace"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
          <div className="absolute inset-0 bg-gradient-to-br from-black/10 dark:from-white/5 to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-start"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight text-slate-900 dark:text-white">
            Software <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-slate-400 dark:from-white dark:to-white/50">
              Developer
            </span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-md leading-relaxed">
            Crafting digital experiences with modern web technologies. Passionate about clean code,
            intuitive user interfaces, and solving complex problems elegantly.
          </p>
          <Link
            href="/projects"
            className="px-8 py-4 bg-accent hover:bg-accent/90 text-white rounded-lg font-medium transition-all shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)]"
          >
            Explore Portfolio
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h3 className="text-xl font-semibold mb-8 flex items-center gap-3 text-slate-900 dark:text-white">
          <span className="w-8 h-[1px] bg-black/20 dark:bg-white/20" />
          Recent Activities
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ACTIVITIES.map((activity, index) => (
            <div key={index} className="glass-panel p-6 hover:bg-black/5 dark:hover:bg-white/10 transition-colors duration-300">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 border border-accent/20">
                <activity.icon className="w-6 h-6 text-accent" />
              </div>
              <h4 className="text-lg font-medium mb-2 text-slate-900 dark:text-white">{activity.title}</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{activity.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}