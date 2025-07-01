import HeroSection from '@/components/hero-section';
import CaseSudyGrid from '@/components/case-study-grid';
import Testimonials from '@/components/testimonials';
import Stats from '@/components/stats';

export default function Home() {
  return (
    <>
      <HeroSection />
      <Stats />
      <CaseSudyGrid />
      <Testimonials />
    </>
  );
}
