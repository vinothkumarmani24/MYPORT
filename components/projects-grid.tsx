import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import Link from 'next/link';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'Led agile transformation for a major retail client, reducing time-to-market by 40%',
    tags: ['Agile', 'Scrum', 'SAFe'],
  },
  {
    title: 'Banking App',
    description: 'Managed delivery of mobile banking application with 1M+ users',
    tags: ['Kanban', 'CI/CD', 'Mobile'],
  },
  {
    title: 'Healthcare Portal',
    description: 'Digital transformation project for hospital management system',
    tags: ['DevOps', 'Cloud', 'Microservices'],
  },
];

export default function ProjectsGrid() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-accent rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
