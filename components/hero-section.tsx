import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Vinothkumar Mani
          </h1>
          <h2 className="text-2xl font-semibold text-primary">
            Agile Delivery Manager
          </h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl">
            Transforming ideas into successful digital products through agile methodologies and 
            strategic leadership with 10+ years of experience in software delivery.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button asChild>
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/about">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="h-64 w-64 rounded-full bg-gradient-to-r from-primary to-secondary p-1">
            <div className="h-full w-full rounded-full bg-background overflow-hidden">
              {/* Replace with actual image */}
              <div className="h-full w-full bg-muted flex items-center justify-center">
                <span className="text-muted-foreground">Profile Photo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
