import { useCallback, useRef, useState, useEffect } from 'react';

interface SoundConfig {
  volume?: number;
  loop?: boolean;
  autoplay?: boolean;
}

interface UseSound {
  play: () => void;
  stop: () => void;
  pause: () => void;
  resume: () => void;
  setVolume: (volume: number) => void;
  isPlaying: boolean;
  isMuted: boolean;
  toggle: () => void;
}

export const useSound = (url: string, config: SoundConfig = {}): UseSound => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const backgroundAudio = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const createSynthSound = (frequency: number, duration: number) => {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
      oscillator.type = 'sine';

      gainNode.gain.setValueAtTime(0, audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(config.volume || 0.3, audioContext.currentTime + 0.1);
      gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + duration);

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + duration);
    };

    // 🎵 Set up sound effects (beep/whoosh/ambient)
    if (url === '*') {
      audioRef.current = new Audio();
      audioRef.current.volume = config.volume || 0.3;
    } else if (url === 'beep') {
      audioRef.current = new Audio();
      audioRef.current.volume = config.volume || 0.2;
    } else if (url === 'ambient') {
      audioRef.current = new Audio();
      audioRef.current.loop = true;
      audioRef.current.volume = config.volume || 0.1;
    }

    if (audioRef.current) {
      audioRef.current.addEventListener('ended', () => setIsPlaying(false));
      audioRef.current.addEventListener('play', () => setIsPlaying(true));
      audioRef.current.addEventListener('pause', () => setIsPlaying(false));
    }

    // 🎵 Add background music logic (once on mount)
    if (!backgroundAudio.current) {
      backgroundAudio.current = new Audio('/sounds/background-music.mp3');
      backgroundAudio.current.loop = true;
      backgroundAudio.current.volume = 0.2;

      if (!isMuted) {
        backgroundAudio.current.play().catch(() => {
          console.warn('Autoplay blocked for background music');
        });
      }
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      if (backgroundAudio.current) {
        backgroundAudio.current.pause();
        backgroundAudio.current = null;
      }
    };
  }, [url, config.volume]);

  // 🧠 Auto-pause/resume background music on mute toggle
  useEffect(() => {
    if (backgroundAudio.current) {
      if (isMuted) {
        backgroundAudio.current.pause();
      } else {
        backgroundAudio.current.play().catch(() => {});
      }
    }
  }, [isMuted]);

  const play = useCallback(() => {
    if (audioRef.current && !isMuted) {
      if (url === '*') {
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(50, audioContext.currentTime + 0.5);
        oscillator.type = 'sawtooth';

        gainNode.gain.setValueAtTime(0, audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + 0.1);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.5);
        setIsPlaying(true);
        setTimeout(() => setIsPlaying(false), 500);
      } else if (url === 'beep') {
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        oscillator.type = 'sine';

        gainNode.gain.setValueAtTime(0, audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.2, audioContext.currentTime + 0.05);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.2);
        setIsPlaying(true);
        setTimeout(() => setIsPlaying(false), 200);
      }
    }
  }, [url, isMuted]);

  const stop = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  }, []);

  const pause = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, []);

  const resume = useCallback(() => {
    if (audioRef.current && !isMuted) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [isMuted]);

  const setVolume = useCallback((volume: number) => {
    if (audioRef.current) {
      audioRef.current.volume = Math.max(0, Math.min(1, volume));
    }
  }, []);

  const toggle = useCallback(() => {
    setIsMuted(prev => !prev);
    if (isPlaying && !isMuted) {
      pause();
    }
  }, [isPlaying, isMuted, pause]);

  return {
    play,
    stop,
    pause,
    resume,
    setVolume,
    isPlaying,
    isMuted,
    toggle
  };
};
