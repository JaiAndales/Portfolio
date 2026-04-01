import { getPostsByCategory, BLOG_CATEGORIES } from "@/data/blog-posts";
import { CategoryPostsSection } from "@/components/features/blog/CategoryPostsSection";

interface CategoryPageProps {
  params: { segments: string[] };
}

export function generateStaticParams() {
  return BLOG_CATEGORIES.map((category) => ({
    segments: [category.toLowerCase()],
  }));
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = params.segments[0] ?? "";
  const displayCategory = category.charAt(0).toUpperCase() + category.slice(1);
  const posts = getPostsByCategory(category);

  return <CategoryPostsSection category={displayCategory} posts={posts} />;
}