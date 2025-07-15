import React, { useEffect, useState } from 'react';
import { Rocket, Brain, Zap, Sparkles } from 'lucide-react';


interface CinematicTransitionProps {
  type: 'rocket' | 'brain-explosion' | 'neural-burst' | 'particle-flow';
  trigger: boolean;
  onComplete?: () => void;
  children?: React.ReactNode;
}

export const CinematicTransition: React.FC<CinematicTransitionProps> = ({
  type,
  trigger,
  onComplete,
  children
}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showExplosion, setShowExplosion] = useState(false);
  
  

  useEffect(() => {
    if (trigger && !isAnimating) {
      setIsAnimating(true);
      
      if (type === 'rocket') {
        whooshSound.play();
        setTimeout(() => {
          setShowExplosion(true);
          beepSound.play();
          setTimeout(() => {
            setIsAnimating(false);
            setShowExplosion(false);
            onComplete?.();
          }, 800);
        }, 1200);
      } else if (type === 'brain-explosion') {
        beepSound.play();
        setTimeout(() => {
          setShowExplosion(true);
          setTimeout(() => {
            setIsAnimating(false);
            setShowExplosion(false);
            onComplete?.();
          }, 1000);
        }, 500);
      }
    }
  }, [trigger, isAnimating, type, whooshSound, beepSound, onComplete]);

  if (!isAnimating) return <>{children}</>;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
      {type === 'rocket' && (
        <>
          {/* Rocket Launch */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <div className="animate-rocket-launch">
              <Rocket className="w-16 h-16 text-primary rotate-45 filter drop-shadow-lg" />
              <div className="absolute inset-0 bg-gradient-to-t from-accent via-primary to-transparent opacity-60 blur-sm" />
            </div>
          </div>
          
          {/* Explosion Effect */}
          {showExplosion && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-explosion">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-4 h-4 bg-accent rounded-full animate-particle-burst"
                    style={{
                      transform: `rotate(${i * 30}deg) translateY(-100px)`,
                      animationDelay: `${i * 0.1}s`
                    }}
                  />
                ))}
                <div className="w-32 h-32 bg-gradient-radial from-primary via-accent to-transparent rounded-full animate-expand-fade" />
              </div>
            </div>
          )}
        </>
      )}

      {type === 'brain-explosion' && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-brain-spin-expand">
            <Brain className="w-24 h-24 text-secondary" />
            {showExplosion && (
              <div className="absolute inset-0">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute inset-0"
                    style={{ transform: `rotate(${i * 45}deg)` }}
                  >
                    <div className="w-2 h-2 bg-secondary rounded-full animate-energy-ring" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {children}
    </div>
  );
};

// Custom animations for cinematic effects
const cinematicStyles = `
  @keyframes rocket-launch {
    0% { transform: translateY(100vh) scale(0.5) rotate(45deg); opacity: 0; }
    20% { opacity: 1; }
    100% { transform: translateY(-100vh) scale(1.5) rotate(45deg); opacity: 0; }
  }
  
  @keyframes explosion {
    0% { transform: scale(0); opacity: 1; }
    50% { transform: scale(1.5); opacity: 0.8; }
    100% { transform: scale(3); opacity: 0; }
  }
  
  @keyframes particle-burst {
    0% { transform: translateY(0) scale(1); opacity: 1; }
    100% { transform: translateY(-200px) scale(0); opacity: 0; }
  }
  
  @keyframes expand-fade {
    0% { transform: scale(0); opacity: 1; }
    100% { transform: scale(4); opacity: 0; }
  }
  
  @keyframes brain-spin-expand {
    0% { transform: rotate(0deg) scale(1); }
    50% { transform: rotate(180deg) scale(1.5); }
    100% { transform: rotate(360deg) scale(2) translateZ(100px); opacity: 0; }
  }
  
  @keyframes energy-ring {
    0% { transform: translateY(0) scale(1); opacity: 1; }
    100% { transform: translateY(-300px) scale(0.5); opacity: 0; }
  }
  
  .animate-rocket-launch { animation: rocket-launch 1.5s ease-out forwards; }
  .animate-explosion { animation: explosion 0.8s ease-out forwards; }
  .animate-particle-burst { animation: particle-burst 1s ease-out forwards; }
  .animate-expand-fade { animation: expand-fade 1s ease-out forwards; }
  .animate-brain-spin-expand { animation: brain-spin-expand 1s ease-out forwards; }
  .animate-energy-ring { animation: energy-ring 1.2s ease-out forwards; }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = cinematicStyles;
  document.head.appendChild(styleSheet);
}