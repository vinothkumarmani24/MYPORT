import CaseStudyHero from '@/components/case-study-hero';
import CaseStudyGrid from '@/components/case-study-grid';

export default function CaseStudiesPage() {
  return (
    <div className="space-y-16">
      <CaseStudyHero />
      <CaseStudyGrid />
    </div>
  );
}
