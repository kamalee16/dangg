import { useNavigate } from 'react-router-dom';
import { PageContainer } from '../components/layout/PageContainer';
import { SectionTitle } from '../components/layout/SectionTitle';
import { FeatureCard } from '../components/ui/FeatureCard';

export function PlaceholderPage({ title, description }) {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <section>
        <SectionTitle>{title}</SectionTitle>
        <FeatureCard
          title={`${title} — coming soon`}
          description={
            description ??
            'This screen is part of the admin suite. Content will be added in a future release.'
          }
          actionLabel="Back to Analytics"
          onAction={() => navigate('/analytics')}
        />
      </section>
    </PageContainer>
  );
}
