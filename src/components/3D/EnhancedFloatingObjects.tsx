import React, { useEffect, useState } from 'react';
import { Brain, Cpu, Zap, Radar, Satellite, CircuitBoard, Bot } from 'lucide-react';

interface FloatingObject {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  position: { x: number; y: number; z: number };
  rotation: { x: number; y: number; z: number };
  scale: number;
  speed: number;
  color: string;
}

interface EnhancedFloatingObjectsProps {
  isScrolling?: boolean;
  section?: string;
}

export const EnhancedFloatingObjects: React.FC<EnhancedFloatingObjectsProps> = ({
  isScrolling = false,
  section = 'general'
}) => {
  const [objects, setObjects] = useState<FloatingObject[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const icons = [Brain, Cpu, Zap, Radar, Satellite, CircuitBoard, Bot];
    const colors = ['text-primary', 'text-secondary', 'text-accent', 'text-neon-cyan'];
    
    const newObjects = Array.from({ length: 8 }, (_, i) => ({
      id: `object-${i}`,
      icon: icons[i % icons.length],
      position: {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        z: Math.random() * 200 - 100
      },
      rotation: {
        x: Math.random() * 360,
        y: Math.random() * 360,
        z: Math.random() * 360
      },
      scale: 0.5 + Math.random() * 1,
      speed: 0.5 + Math.random() * 1.5,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));
    
    setObjects(newObjects);
  }, [section]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) * 0.05,
        y: (e.clientY - window.innerHeight / 2) * 0.05
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (!isScrolling) return;

    const interval = setInterval(() => {
      setObjects(prev => prev.map(obj => ({
        ...obj,
        rotation: {
          x: obj.rotation.x + obj.speed,
          y: obj.rotation.y + obj.speed * 0.7,
          z: obj.rotation.z + obj.speed * 0.5
        },
        position: {
          ...obj.position,
          z: obj.position.z + (isScrolling ? obj.speed * 2 : 0)
        }
      })));
    }, 50);

    return () => clearInterval(interval);
  }, [isScrolling]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-30">
      {objects.map((obj) => {
        const IconComponent = obj.icon;
        return (
          <div
            key={obj.id}
            className="absolute transition-all duration-1000 ease-out"
            style={{
              left: obj.position.x + mousePosition.x,
              top: obj.position.y + mousePosition.y,
              transform: `
                translateZ(${obj.position.z}px)
                rotateX(${obj.rotation.x}deg)
                rotateY(${obj.rotation.y}deg)
                rotateZ(${obj.rotation.z}deg)
                scale(${obj.scale})
                perspective(1000px)
              `,
              filter: `drop-shadow(0 0 20px currentColor) blur(${Math.abs(obj.position.z) / 100}px)`,
              opacity: Math.max(0.3, 1 - Math.abs(obj.position.z) / 200)
            }}
          >
            <div
              style={{
                animationDelay: `${obj.id.slice(-1)}s`,
                filter: obj.position.z > 0 ? 'brightness(1.5)' : 'brightness(0.7)'
              }}
            >
              <IconComponent className={`w-8 h-8 ${obj.color} animate-pulse`} />
            </div>
            
            {/* Holographic glow effect */}
            <div
              className="absolute inset-0 rounded-full opacity-50"
              style={{
                background: `radial-gradient(circle, currentColor 0%, transparent 70%)`,
                transform: 'scale(2)',
                animation: `glow-pulse 2s ease-in-out infinite ${obj.id.slice(-1)}s`
              }}
            />
          </div>
        );
      })}
      
      {/* Neural connection lines */}
      <svg className="absolute inset-0 w-full h-full">
        {objects.slice(0, 4).map((obj, i) => {
          const nextObj = objects[(i + 1) % 4];
          if (!nextObj) return null;
          
          return (
            <line
              key={`connection-${i}`}
              x1={obj.position.x + mousePosition.x}
              y1={obj.position.y + mousePosition.y}
              x2={nextObj.position.x + mousePosition.x}
              y2={nextObj.position.y + mousePosition.y}
              stroke="currentColor"
              strokeWidth="1"
              strokeOpacity="0.2"
              className="text-primary animate-pulse"
              strokeDasharray="4 4"
              style={{
                animationDelay: `${i * 0.5}s`
              }}
            />
          );
        })}
      </svg>
      
      {/* Particle trails */}
      {isScrolling && objects.slice(0, 3).map((obj) => (
        <div
          key={`trail-${obj.id}`}
          className="absolute w-1 h-20 bg-gradient-to-b from-primary via-accent to-transparent opacity-60 animate-trail"
          style={{
            left: obj.position.x + mousePosition.x,
            top: obj.position.y + mousePosition.y,
            transform: `rotateZ(${obj.rotation.z}deg)`,
            animation: 'trail 0.5s ease-out infinite'
          }}
        />
      ))}
    </div>
  );
};