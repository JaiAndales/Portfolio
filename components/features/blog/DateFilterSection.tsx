"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CalendarIcon, ClockIcon, ArrowLeftIcon } from "lucide-react";
import { BlogPost } from "@/data/blog-posts";
import Image from "next/image";

interface DateFilterSectionProps {
  dateFilter: string[];
  posts: BlogPost[];
}

export function DateFilterSection({ dateFilter, posts }: DateFilterSectionProps) {
  const filterLabel = dateFilter.length > 0 ? dateFilter.join(" / ") : "All Dates";

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-accent transition-colors mb-6"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          All Posts
        </Link>
        <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
          Posts filtered by: <span className="text-accent">{filterLabel}</span>
        </h2>
        <div className="w-20 h-1 bg-accent rounded-full" />
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          {posts.length} post{posts.length !== 1 ? "s" : ""} found
        </p>
      </motion.div>

      {posts.length === 0 ? (
        <div className="glass-panel p-12 text-center">
          <p className="text-slate-600 dark:text-slate-400 text-lg">No posts found for this date range.</p>
          <Link href="/blog" className="mt-4 inline-block text-accent hover:underline font-medium">
            Browse all posts
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
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
      )}
    </section>
  );
}