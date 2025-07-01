'use client';

import { Briefcase } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: 'Senior Agile Delivery Manager',
    company: 'Tech Solutions Inc.',
    duration: '2020 - Present',
    description: 'Leading cross-functional teams to deliver complex SaaS products using Scrum and Kanban methodologies.'
  },
  {
    id: 2,
    role: 'Agile Coach',
    company: 'Digital Innovations Ltd.',
    duration: '2017 - 2020',
    description: 'Implemented agile transformation across multiple departments, improving delivery efficiency by 40%.'
  },
  {
    id: 3,
    role: 'Project Manager',
    company: 'Web Services Co.',
    duration: '2014 - 2017',
    description: 'Managed full lifecycle of web application projects from conception to deployment.'
  }
];

export default function ExperienceTimeline() {
  return (
    <section className="py-12 bg-muted/50">
      <div className="container">
        <h2 className="text-2xl font-bold mb-8">Professional Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div key={exp.id} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  <Briefcase className="h-5 w-5" />
                </div>
                <div className="w-px h-full bg-border" />
              </div>
              <div className="flex-1 pb-8">
                <h3 className="text-lg font-semibold">{exp.role}</h3>
                <p className="text-muted-foreground">{exp.company} • {exp.duration}</p>
                <p className="mt-2 text-muted-foreground">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
