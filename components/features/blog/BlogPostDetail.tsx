"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeftIcon, CalendarIcon, ClockIcon, UserIcon } from "lucide-react";
import { BlogPost } from "@/data/blog-posts";
import Image from "next/image";

interface BlogPostDetailProps {
  post: BlogPost;
}

export function BlogPostDetail({ post }: BlogPostDetailProps) {
  return (
    <section className="py-16 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-accent dark:hover:text-accent transition-colors mb-8"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          Back to Blog
        </Link>

        <div className="glass-panel overflow-hidden mb-8">
          <div className="aspect-[21/9] relative">
            <Image
              src={post.image}
              alt={post.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        </div>

        <div className="mb-8">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-slate-900 dark:text-white">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
            <span className="flex items-center gap-1.5">
              <UserIcon className="w-4 h-4" />
              Jai Andales
            </span>
            <span className="flex items-center gap-1.5">
              <CalendarIcon className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <ClockIcon className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>
        </div>

        <div className="glass-panel p-8 md:p-10">
          <div className="space-y-6">
            {post.content.map((paragraph, idx) => (
              <p key={idx} className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-black/10 dark:border-white/10 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent/90 text-white rounded-lg font-medium transition-all shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)]"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            All Posts
          </Link>
        </div>
      </motion.div>
    </section>
  );
}