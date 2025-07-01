import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Vinothkumar Mani
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
            Agile Delivery Manager | Digital Transformation Leader
          </h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto">
            I help teams deliver exceptional digital products through agile methodologies and technical leadership.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild>
              <Link href="#contact">Get in Touch</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#projects">View Projects</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
