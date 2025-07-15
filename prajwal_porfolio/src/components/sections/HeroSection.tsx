import React, { useEffect, useState } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AIAgent from '@/components/3D/AIAgent';
import ScrollTriggerWrapper from '@/components/3D/ScrollTriggerWrapper';
import { EnhancedFloatingObjects } from '@/components/3D/EnhancedFloatingObjects';
import { SoundToggle } from '@/components/ui/sound-toggle';
import { useSoundContext } from '@/contexts/SoundContext';
import aiAvatar from '@/assets/ai-avatar.png';

const HeroSection: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isScrolling, setIsScrolling] = useState(false);
  const { isMuted, toggleMute, playSound } = useSoundContext();
  
  const scrollTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) * 0.02,
        y: (e.clientY - window.innerHeight / 2) * 0.02,
      });
    };

    const handleScroll = () => {
      setIsScrolling(true);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => setIsScrolling(false), 100);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToAbout = () => {
    playSound('*');
    setTimeout(() => {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    }, 200);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Sound Toggle */}
      <SoundToggle isMuted={isMuted} onToggle={toggleMute} />
      
      {/* Enhanced Floating Objects */}
      <EnhancedFloatingObjects isScrolling={isScrolling} section="hero" />
      {/* Floating AI Agents */}
      <div className="absolute top-20 left-10 z-10">
        <AIAgent variant="brain" size="lg" />
      </div>
      <div className="absolute top-32 right-20 z-10">
        <AIAgent variant="cpu" size="md" />
      </div>
      <div className="absolute bottom-40 left-32 z-10">
        <AIAgent variant="zap" size="sm" />
      </div>

      {/* Neural Network Background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          backgroundImage: `
            radial-gradient(circle at 20% 20%, hsl(var(--primary) / 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, hsl(var(--accent) / 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 60%, hsl(var(--secondary) / 0.1) 0%, transparent 50%)
          `,
        }}
      />

      {/* Main Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
        <ScrollTriggerWrapper animation="zoom-in-3d">
          <div className="mb-8 relative">
            <img 
              src={aiAvatar} 
              alt="AI Data Scientist Avatar"
              className="w-32 h-32 mx-auto rounded-full border-4 border-primary neon-glow animate-glow-pulse"
            />
            <div className="absolute -top-4 -right-4">
              <Sparkles className="w-8 h-8 text-accent animate-pulse" />
            </div>
          </div>
        </ScrollTriggerWrapper>

        <ScrollTriggerWrapper animation="burst-forward" delay={300}>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 holographic-text">
            Hi, I'm PRAJWAL
          </h1>
        </ScrollTriggerWrapper>

        <ScrollTriggerWrapper animation="slide-in-space" delay={600}>
          <h2 className="text-3xl md:text-5xl font-light mb-8 text-holographic">
            Data Scientist Explorer
          </h2>
        </ScrollTriggerWrapper>

        <ScrollTriggerWrapper animation="zoom-in-3d" delay={900}>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Navigating the infinite cosmos of data, AI, and machine learning
            to unlock the secrets of tomorrow's intelligence.
          </p>
        </ScrollTriggerWrapper>

        <ScrollTriggerWrapper animation="burst-forward" delay={1200}>
          
        </ScrollTriggerWrapper>
      </div>

      {/* Scroll Indicator */}
      <ScrollTriggerWrapper 
        animation="burst-forward" 
        delay={1500}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <button
          onClick={scrollToAbout}
          className="flex flex-col items-center space-y-2 text-primary hover:text-accent transition-colors duration-300"
        >
          <span className="text-sm">Scroll to explore</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </button>
      </ScrollTriggerWrapper>

      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-px bg-gradient-to-b from-primary to-transparent animate-matrix"
            style={{
              left: `${(i * 5) % 100}%`,
              height: '100vh',
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;