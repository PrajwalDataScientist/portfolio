import React, { useEffect, useState, useRef } from 'react';
import { Rocket, Brain, Zap, Bot, Cpu, CircuitBoard } from 'lucide-react';
import { useSoundContext } from '@/contexts/SoundContext';

interface ScrollTriggeredEffectsProps {
  className?: string;
}

export const ScrollTriggeredEffects: React.FC<ScrollTriggeredEffectsProps> = ({ className = '' }) => {
  const [activeTransition, setActiveTransition] = useState<string | null>(null);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const lastScrollY = useRef(0);
  const { playSound } = useSoundContext();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY.current ? 'down' : 'up';
      setScrollDirection(direction);
      lastScrollY.current = currentScrollY;

      const sections = ['hero', 'about', 'projects', 'skills', 'education', 'contact'];
      const windowHeight = window.innerHeight;
      const scrollPercent = currentScrollY / (document.body.scrollHeight - windowHeight);

      // Trigger effects based on scroll position
      if (scrollPercent > 0.1 && scrollPercent < 0.25) {
        if (activeTransition !== 'hero-to-about') {
          setActiveTransition('hero-to-about');
          playSound('whoosh');
        }
      } else if (scrollPercent > 0.25 && scrollPercent < 0.4) {
        if (activeTransition !== 'about-to-projects') {
          setActiveTransition('about-to-projects');
          playSound('beep');
        }
      } else if (scrollPercent > 0.4 && scrollPercent < 0.6) {
        if (activeTransition !== 'projects-to-skills') {
          setActiveTransition('projects-to-skills');
          playSound('mechanical');
        }
      } else {
        setActiveTransition(null);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeTransition, playSound]);

  return (
    <div className={`fixed inset-0 pointer-events-none z-40 ${className}`}>
      {/* Rocket Launch Transition */}
      {activeTransition === 'hero-to-about' && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="rocket-launch-container">
            <Rocket className="w-12 h-12 text-primary rocket-icon" />
            <div className="rocket-trail" />
            {/* Explosion particles */}
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="explosion-particle"
                style={{
                  '--delay': `${i * 0.1}s`,
                  '--angle': `${i * 45}deg`
                } as React.CSSProperties}
              />
            ))}
          </div>
        </div>
      )}

      {/* Brain Expansion Transition */}
      {activeTransition === 'about-to-projects' && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="brain-expansion-container">
            <Brain className="w-16 h-16 text-secondary brain-icon" />
            {/* Energy rings */}
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="energy-ring"
                style={{
                  '--delay': `${i * 0.3}s`
                } as React.CSSProperties}
              />
            ))}
          </div>
        </div>
      )}

      {/* Code Particle Flow */}
      {activeTransition === 'projects-to-skills' && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="code-particles-container">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="code-particle"
                style={{
                  '--delay': `${i * 0.1}s`,
                  '--start-x': `${Math.random() * 100}%`,
                  '--end-x': `${Math.random() * 100}%`
                } as React.CSSProperties}
              >
                {i % 4 === 0 && <Bot className="w-4 h-4" />}
                {i % 4 === 1 && <Cpu className="w-4 h-4" />}
                {i % 4 === 2 && <CircuitBoard className="w-4 h-4" />}
                {i % 4 === 3 && <Zap className="w-4 h-4" />}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// CSS-in-JS styles for the cinematic effects
const effectsStyles = `
  .rocket-launch-container {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    animation: rocket-launch 2s ease-out forwards;
  }

  .rocket-icon {
    transform: rotate(45deg);
    filter: drop-shadow(0 0 20px currentColor);
  }

  .rocket-trail {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 4px;
    height: 100px;
    background: linear-gradient(to top, hsl(var(--primary)), transparent);
    transform: translate(-50%, -50%);
    opacity: 0.8;
  }

  .explosion-particle {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 8px;
    height: 8px;
    background: hsl(var(--accent));
    border-radius: 50%;
    animation: particle-explosion 1s ease-out forwards;
    animation-delay: var(--delay);
    transform: translate(-50%, -50%) rotate(var(--angle)) translateY(-60px);
  }

  .brain-expansion-container {
    position: relative;
    animation: brain-expand 1.5s ease-out forwards;
  }

  .brain-icon {
    filter: drop-shadow(0 0 30px currentColor);
    animation: brain-rotate 1.5s ease-out forwards;
  }

  .energy-ring {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 60px;
    height: 60px;
    border: 2px solid hsl(var(--secondary));
    border-radius: 50%;
    transform: translate(-50%, -50%);
    animation: ring-expand 1s ease-out forwards;
    animation-delay: var(--delay);
  }

  .code-particles-container {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .code-particle {
    position: absolute;
    left: var(--start-x);
    top: 100%;
    color: hsl(var(--primary));
    animation: particle-flow 2s ease-out forwards;
    animation-delay: var(--delay);
    filter: drop-shadow(0 0 10px currentColor);
  }

  @keyframes rocket-launch {
    0% { 
      transform: translateX(-50%) translateY(100vh) scale(0.5); 
      opacity: 0; 
    }
    20% { opacity: 1; }
    100% { 
      transform: translateX(-50%) translateY(-50vh) scale(1.5); 
      opacity: 0; 
    }
  }

  @keyframes particle-explosion {
    0% { 
      opacity: 1; 
      transform: translate(-50%, -50%) rotate(var(--angle)) translateY(0); 
    }
    100% { 
      opacity: 0; 
      transform: translate(-50%, -50%) rotate(var(--angle)) translateY(-120px); 
    }
  }

  @keyframes brain-expand {
    0% { transform: scale(1); }
    50% { transform: scale(1.5); }
    100% { transform: scale(2) translateZ(100px); opacity: 0; }
  }

  @keyframes brain-rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @keyframes ring-expand {
    0% { 
      transform: translate(-50%, -50%) scale(1); 
      opacity: 1; 
    }
    100% { 
      transform: translate(-50%, -50%) scale(4); 
      opacity: 0; 
    }
  }

  @keyframes particle-flow {
    0% { 
      transform: translateY(0) scale(0.5); 
      opacity: 0; 
    }
    20% { opacity: 1; }
    100% { 
      left: var(--end-x);
      transform: translateY(-100vh) scale(1.2); 
      opacity: 0; 
    }
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = effectsStyles;
  document.head.appendChild(styleSheet);
}