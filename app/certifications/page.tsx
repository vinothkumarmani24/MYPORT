import CertificationsHero from '@/components/certifications-hero';
import CertificationsGrid from '@/components/certifications-grid';

export default function CertificationsPage() {
  return (
    <div className="space-y-16">
      <CertificationsHero />
      <CertificationsGrid />
    </div>
  );
}
