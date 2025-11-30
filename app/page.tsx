import Container from '@/components/common/Container';
import Blog from '@/components/landing/Blog';
import CTA from '@/components/landing/CTA';
import Experience from '@/components/landing/Experience';
import Github from '@/components/landing/Github';
import Hero from '@/components/landing/Hero';
import Work from '@/components/landing/Projects';
import { ProfileCover } from '@/components/profile-cover';

export default function page() {
  return (
    <Container className="min-h-screen py-16">
      <ProfileCover />
      <Hero />
      <Experience />
      <Work />
      <Github />
      <Blog />
      <CTA />
    </Container>
  );
}
