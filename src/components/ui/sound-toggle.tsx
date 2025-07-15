import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from './button';

interface SoundToggleProps {
  isMuted: boolean;
  onToggle: () => void;
  className?: string;
}

export const SoundToggle: React.FC<SoundToggleProps> = ({ 
  isMuted, 
  onToggle, 
  className = '' 
}) => {
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={onToggle}
      className={`fixed top-4 right-4 z-50 glass-panel neon-glow hover:scale-110 transition-all duration-300 ${className}`}
      aria-label={isMuted ? 'Unmute sounds' : 'Mute sounds'}
    >
      {isMuted ? (
        <VolumeX className="w-5 h-5 text-muted-foreground" />
      ) : (
        <Volume2 className="w-5 h-5 text-primary animate-pulse" />
      )}
    </Button>
  );
};