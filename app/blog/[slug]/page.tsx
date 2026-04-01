import { notFound } from "next/navigation";
import { getPostBySlug, BLOG_POSTS } from "@/data/blog-posts";
import { BlogPostDetail } from "@/components/features/blog/BlogPostDetail";

interface BlogPostPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.id }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return <BlogPostDetail post={post} />;
}