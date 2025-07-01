import AboutHero from '@/components/about-hero';
import ExperienceTimeline from '@/components/experience-timeline';
import SkillsSection from '@/components/skills-section';
import EducationSection from '@/components/education-section';

export default function AboutPage() {
  return (
    <div className="space-y-16">
      <AboutHero />
      <ExperienceTimeline />
      <SkillsSection />
      <EducationSection />
    </div>
  );
}
