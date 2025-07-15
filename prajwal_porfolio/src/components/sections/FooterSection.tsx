import React from 'react';
import { Heart, Sparkles } from 'lucide-react';
import ScrollTriggerWrapper from '@/components/3D/ScrollTriggerWrapper';

const FooterSection: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 overflow-hidden border-t border-primary/20">
      {/* Orbiting Data Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/30 animate-float"
            style={{
              left: `${(i * 8.33) % 100}%`,
              top: `${20 + (i * 7) % 60}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + (i % 3)}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <ScrollTriggerWrapper animation="zoom-in-3d">
          <div className="text-center space-y-8">
            {/* Inspirational Quote */}
            <div className="max-w-4xl mx-auto">
              <blockquote className="text-2xl md:text-3xl font-light text-holographic leading-relaxed mb-6 animate-hologram">
                "A lifelong mission to explore the universe of intelligence — both natural and artificial."
              </blockquote>
              <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                <Sparkles className="w-4 h-4 text-accent animate-pulse" />
                <span className="text-sm">— Building intelligent systems today that shape the possibilities of tomorrow</span>
                <Sparkles className="w-4 h-4 text-accent animate-pulse" />
              </div>
            </div>

            {/* Crafted With Love */}
            <div className="flex items-center justify-center space-x-3 text-muted-foreground">
              <span>years of innovation in AI, mousePosition</span>
              <div className="flex items-center space-x-1">
                <span className="text-primary font-medium">AI</span>
                <Heart className="w-4 h-4 text-red-400 animate-pulse" />
                <span className="text-accent font-medium">motion</span>
                <span>&</span>
                <span className="text-secondary font-medium">immersive design</span>
              </div>
            </div>

            {/* Neural Network Divider */}
            <div className="relative py-8">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-full h-16 opacity-30">
                  <defs>
                    <linearGradient id="footerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                      <stop offset="25%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="1" />
                      <stop offset="75%" stopColor="hsl(var(--secondary))" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,32 Q200,16 400,32 T800,32"
                    stroke="url(#footerGradient)"
                    strokeWidth="2"
                    fill="none"
                    className="animate-pulse"
                  />
                  <path
                    d="M0,32 Q200,48 400,32 T800,32"
                    stroke="url(#footerGradient)"
                    strokeWidth="1"
                    fill="none"
                    className="animate-pulse"
                    style={{ animationDelay: '1s' }}
                  />
                </svg>
              </div>
            </div>

            {/* Copyright & Tech Stack */}
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="text-center md:text-left">
                <p className="text-sm text-muted-foreground">
                  © {currentYear} Prajwal_data_scientist
                </p>
                <p className="text-xs text-muted-foreground/70">
                  All rights reserved
                </p>
              </div>

              {/* Tech Stack Badge */}
              <div className="flex justify-center">
                <div className="glass-panel px-6 py-3 rounded-full border border-primary/20">
                  <div className="flex items-center space-x-4 text-xs">
                    <span className="text-primary font-medium">Ingest </span>
                    <div className="w-1 h-1 rounded-full bg-muted-foreground" />
                    <span className="text-accent font-medium">Train </span>
                    <div className="w-1 h-1 rounded-full bg-muted-foreground" />
                    <span className="text-secondary font-medium">Infer</span>
                    <div className="w-1 h-1 rounded-full bg-muted-foreground" />
                    <span className="text-holographic font-medium">Deploy </span>
                  </div>
                </div>
              </div>

              <div className="text-center md:text-right">
                <p className="text-sm text-muted-foreground">
                  Built with 💞 & 🧠
                </p>
                <p className="text-xs text-muted-foreground/70">
                  Prajwal_data_scientist
                </p>
              </div>
            </div>

            {/* Final Neural Pulse */}
            <div className="pt-8">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center animate-pulse">
                  <div className="w-8 h-8 rounded-full bg-primary/20 animate-ping" />
                  <div className="absolute w-4 h-4 rounded-full bg-primary" />
                </div>
              </div>
            </div>
          </div>
        </ScrollTriggerWrapper>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-deep-space/50 to-transparent pointer-events-none" />
    </footer>
  );
};

export default FooterSection;