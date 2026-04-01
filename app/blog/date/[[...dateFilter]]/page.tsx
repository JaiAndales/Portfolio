import { BLOG_POSTS } from "@/data/blog-posts";
import { DateFilterSection } from "@/components/features/blog/DateFilterSection";

interface DateFilterPageProps {
  params: { dateFilter?: string[] };
}

function filterPostsByDate(dateFilter: string[]) {
  if (dateFilter.length === 0) return BLOG_POSTS;

  const [year, month] = dateFilter;

  return BLOG_POSTS.filter((post) => {
    const postDate = new Date(post.date);
    const matchesYear = year ? postDate.getFullYear().toString() === year : true;
    const matchesMonth = month
      ? (postDate.getMonth() + 1).toString().padStart(2, "0") === month.padStart(2, "0")
      : true;
    return matchesYear && matchesMonth;
  });
}

export default function DateFilterPage({ params }: DateFilterPageProps) {
  const dateFilter = params.dateFilter ?? [];
  const filteredPosts = filterPostsByDate(dateFilter);

  return <DateFilterSection dateFilter={dateFilter} posts={filteredPosts} />;
}