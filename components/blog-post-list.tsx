import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { formatDate } from '@/lib/utils';
import Link from 'next/link';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  slug: string;
}

export default function BlogPostList() {
  // TODO: Replace with actual data fetching
  const posts: BlogPost[] = [
    {
      id: '1',
      title: 'Agile Transformation Best Practices',
      excerpt: 'Key lessons learned from leading enterprise agile transformations across multiple industries.',
      date: '2023-05-15',
      tags: ['Agile', 'Transformation'],
      slug: 'agile-transformation-best-practices'
    },
    {
      id: '2',
      title: 'Scrum Master vs Product Owner',
      excerpt: 'Understanding the distinct roles and responsibilities in Scrum teams.',
      date: '2023-03-22',
      tags: ['Scrum', 'Roles'],
      slug: 'scrum-master-vs-product-owner'
    }
  ];

  return (
    <div className="container">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`}>
            <Card className="group cursor-pointer transition-all hover:shadow-lg hover:border-primary/50 h-full">
              <div className="p-6 h-full flex flex-col">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
