import BlogHero from '@/components/blog-hero';
import BlogPostList from '@/components/blog-post-list';

export default function BlogPage() {
  return (
    <div className="space-y-16">
      <BlogHero />
      <BlogPostList />
    </div>
  );
}
