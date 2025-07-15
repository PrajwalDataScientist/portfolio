import React from 'react';
import FloatingParticles from '@/components/3D/FloatingParticles';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import SkillsSection from '@/components/sections/SkillsSection';
import EducationSection from '@/components/sections/EducationSection';
import ContactSection from '@/components/sections/ContactSection';
import FooterSection from '@/components/sections/FooterSection';
import { SoundProvider } from '@/contexts/SoundContext';
import { ScrollTriggeredEffects } from '@/components/3D/ScrollTriggeredEffects';

const Index = () => {
  return (
    <SoundProvider>
      <div className="relative min-h-screen overflow-x-hidden">
        {/* Global Floating Particles */}
        <FloatingParticles />
        
        {/* Cinematic Scroll Effects */}
        <ScrollTriggeredEffects />
        
        {/* All Portfolio Sections */}
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
        <FooterSection />
      </div>
    </SoundProvider>
  );
};

export default Index;
