"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CalendarIcon, ClockIcon, ArrowRightIcon } from "lucide-react";
import { BLOG_POSTS } from "@/data/blog-posts";
import Image from "next/image";

export function BlogSection() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">Blog</h2>
        <div className="w-20 h-1 bg-accent rounded-full" />
        <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-lg">
          Thoughts, tutorials, and insights on software development, design, and technology.
        </p>
      </motion.div>

      {/* Featured Post */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="mb-12"
      >
        <Link href={`/blog/${BLOG_POSTS[0].id}`} className="block group">
          <div className="glass-panel overflow-hidden grid grid-cols-1 lg:grid-cols-2">
            <div className="aspect-video lg:aspect-auto relative overflow-hidden">
              <Image
                src={BLOG_POSTS[0].image}
                alt={BLOG_POSTS[0].title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/10 dark:from-white/5 to-transparent" />
            </div>
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <span className="text-accent text-sm font-semibold uppercase tracking-wider mb-3">
                {BLOG_POSTS[0].category} — Featured
              </span>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-slate-900 dark:text-white group-hover:text-accent transition-colors">
                {BLOG_POSTS[0].title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">{BLOG_POSTS[0].excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-slate-500">
                <span className="flex items-center gap-1.5">
                  <CalendarIcon className="w-4 h-4" />
                  {BLOG_POSTS[0].date}
                </span>
                <span className="flex items-center gap-1.5">
                  <ClockIcon className="w-4 h-4" />
                  {BLOG_POSTS[0].readTime}
                </span>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>

      {/* Post Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BLOG_POSTS.slice(1).map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Link href={`/blog/${post.id}`} className="block group h-full">
              <div className="glass-panel overflow-hidden flex flex-col h-full">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-100/60 dark:from-background/60 to-transparent" />
                  <span className="absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full bg-white/80 dark:bg-background/80 text-slate-900 dark:text-white border border-black/10 dark:border-white/10 backdrop-blur-md">
                    {post.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 flex-grow leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-black/5 dark:border-white/5">
                    <span className="flex items-center gap-1.5">
                      <CalendarIcon className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <ClockIcon className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <span className="inline-flex items-center gap-2 text-accent font-medium">
          More posts coming soon
          <ArrowRightIcon className="w-4 h-4" />
        </span>
      </motion.div>
    </section>
  );
}