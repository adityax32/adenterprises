import {
  AboutSection,
  BrandStatementSection,
  HeroSection,
  ProjectsSection,
  ServicesSection,
  SiteFooter,
  TestimonialsSection,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <HeroSection />
      <main>
        <AboutSection />
        <ServicesSection />
        <BrandStatementSection />
        <ProjectsSection />
        <TestimonialsSection />
      </main>
      <SiteFooter />
    </>
  );
}
