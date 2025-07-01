import HeroSection from '@/components/hero-section';
import FeaturedCaseStudies from '@/components/featured-case-studies';
import Testimonials from '@/components/testimonials';
import Stats from '@/components/stats';

export default function Home() {
  return (
    <>
      <HeroSection />
      <Stats />
      <FeaturedCaseStudies />
      <Testimonials />
    </>
  );
}
