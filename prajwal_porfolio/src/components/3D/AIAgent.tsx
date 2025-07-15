import React from 'react';
import { Brain, Cpu, Zap } from 'lucide-react';

interface AIAgentProps {
  variant: 'brain' | 'cpu' | 'zap';
  size?: 'sm' | 'md' | 'lg';
  floating?: boolean;
}

const AIAgent: React.FC<AIAgentProps> = ({ variant, size = 'md', floating = true }) => {
  const IconComponent = { brain: Brain, cpu: Cpu, zap: Zap }[variant];
  
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  const baseClasses = `
    ${sizeClasses[size]}
    text-primary 
    ${floating ? 'animate-float' : ''}
    transform-3d
    transition-all
    duration-500
    hover:scale-110
    hover:text-accent
    filter
    drop-shadow-lg
  `;

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-primary/20 rounded-full animate-glow-pulse" />
      <IconComponent className={baseClasses} />
    </div>
  );
};

export default AIAgent;