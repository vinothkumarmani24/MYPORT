'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { ExternalLink, Award, CalendarDays } from 'lucide-react';

const certifications = [
  {
    id: 1,
    title: 'Certified ScrumMaster® (CSM)',
    issuer: 'Scrum Alliance',
    date: 'June 2022',
    credentialId: '123456789',
    description: 'Demonstrated knowledge of Scrum framework and ability to facilitate agile teams effectively.',
    link: 'https://www.scrumalliance.org/',
    tags: ['Agile', 'Scrum', 'Leadership']
  },
  {
    id: 2,
    title: 'SAFe® 5 Agilist',
    issuer: 'Scaled Agile, Inc.',
    date: 'March 2021',
    credentialId: 'SA-12345',
    description: 'Proven ability to lead agile transformations at enterprise scale using the Scaled Agile Framework.',
    link: 'https://www.scaledagile.com/',
    tags: ['SAFe', 'Enterprise', 'Agile']
  },
  {
    id: 3,
    title: 'PMI Agile Certified Practitioner (PMI-ACP)®',
    issuer: 'Project Management Institute',
    date: 'November 2020',
    credentialId: 'ACP-98765',
    description: 'Validated knowledge of agile principles and ability to apply them across multiple methodologies.',
    link: 'https://www.pmi.org/',
    tags: ['PMI', 'Hybrid', 'Methodologies']
  },
  {
    id: 4,
    title: 'Professional Scrum Master™ I (PSM I)',
    issuer: 'Scrum.org',
    date: 'September 2019',
    credentialId: 'PSM-54321',
    description: 'Demonstrated fundamental Scrum knowledge and ability to apply Scrum principles in practice.',
    link: 'https://www.scrum.org/',
    tags: ['Scrum', 'PSM', 'Fundamentals']
  }
];

export default function CertificationsGrid() {
  return (
    <section className="py-12">
      <div className="container">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <HoverCard key={cert.id} openDelay={100} closeDelay={100}>
              <HoverCardTrigger asChild>
                <Card className="group cursor-pointer transition-all hover:shadow-lg hover:border-primary/50 h-full">
                  <div className="p-6 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <Award className="h-6 w-6 text-primary" />
                      <Badge variant="outline" className="text-xs">
                        {cert.issuer}
                      </Badge>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                        {cert.title}
                      </h3>
                      <div className="flex items-center text-sm text-muted-foreground mb-3">
                        <CalendarDays className="h-4 w-4 mr-1" />
                        <span>{cert.date}</span>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {cert.description}
                      </p>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {cert.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                </Card>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="space-y-2">
                  <h4 className="font-semibold">{cert.title}</h4>
                  <p className="text-sm">{cert.description}</p>
                  <div className="flex items-center pt-2">
                    <CalendarDays className="h-4 w-4 mr-1 opacity-70" />
                    <span className="text-xs text-muted-foreground">
                      Issued: {cert.date} • ID: {cert.credentialId}
                    </span>
                  </div>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-primary hover:underline"
                  >
                    Verify credential <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </div>
    </section>
  );
}
