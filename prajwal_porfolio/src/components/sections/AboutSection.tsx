import React from 'react';
import { Database, Brain, Code, TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/card';
import ScrollTriggerWrapper from '@/components/3D/ScrollTriggerWrapper';
import AIAgent from '@/components/3D/AIAgent';
import aiBrain from '@/assets/ai-brain.jpg';

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Machine learning lets computers learn from data to make smart decisions."
    },
    {
      icon: Database,
      title: "SQL",
      description: "SQL is a language used to store, query, and manage data in databases"
    },
    {
      icon: Code,
      title: "Python", 
      description: "Python is a powerful, easy-to-read programming language used for data science, AI, and automation"
    },
    {
      icon: TrendingUp,
      title: "Business Intelligence[Power BI]",
      description: "Power BI is a business intelligence tool that transforms raw data into interactive dashboards and actionable insights"
    }
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Floating AI Agent */}
      <div className="absolute top-20 right-10 z-10">
        <AIAgent variant="brain" size="lg" />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <ScrollTriggerWrapper animation="slide-in-space">
              <h2 className="text-5xl md:text-6xl font-bold holographic-text mb-6">
                About Me
              </h2>
            </ScrollTriggerWrapper>

            <ScrollTriggerWrapper animation="zoom-in-3d" delay={300}>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                I’m a passionate Data Scientist with a background in cybersecurity and a growing track record of building AI-powered solutions using machine learning, deep learning, and NLP.
              </p>
            </ScrollTriggerWrapper>

            <ScrollTriggerWrapper animation="burst-forward" delay={600}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                What began as an interest in pattern recognition has grown into a mission to explore neural networks, intelligent systems, and the limitless potential of artificial intelligence
              </p>
            </ScrollTriggerWrapper>

            {/* Feature Cards */}
            <div className="grid sm:grid-cols-2 gap-6 mt-12">
              {features.map((feature, index) => (
                <ScrollTriggerWrapper 
                  key={feature.title}
                  animation="burst-forward"
                  delay={800 + index * 200}
                >
                  <Card className="glass-panel p-6 hover:scale-105 transition-all duration-300 neon-glow">
                    <feature.icon className="w-8 h-8 text-primary mb-4" />
                    <h3 className="text-lg font-semibold text-holographic mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </Card>
                </ScrollTriggerWrapper>
              ))}
            </div>
          </div>

          {/* Right Content - AI Brain Visual */}
          <div className="relative">
            <ScrollTriggerWrapper animation="zoom-in-3d" delay={400}>
              <div className="relative transform-3d">
                <img 
                  src={aiBrain}
                  alt="AI Brain Hologram"
                  className="w-full h-96 object-cover rounded-lg glass-panel neon-glow animate-glow-pulse"
                />
                
                {/* Floating Elements Around Brain */}
                <div className="absolute -top-6 -left-6 animate-float">
                  <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary animate-neural-pulse" />
                </div>
                <div className="absolute -bottom-4 -right-8 animate-float" style={{ animationDelay: '2s' }}>
                  <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent animate-neural-pulse" />
                </div>
                <div className="absolute top-1/2 -right-6 animate-float" style={{ animationDelay: '4s' }}>
                  <div className="w-10 h-10 rounded-full bg-secondary/20 border border-secondary animate-neural-pulse" />
                </div>

                {/* Neural Connection Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <defs>
                    <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M50,50 Q150,100 250,150"
                    stroke="url(#neuralGradient)"
                    strokeWidth="2"
                    fill="none"
                    className="animate-pulse"
                  />
                  <path
                    d="M100,200 Q200,150 300,100"
                    stroke="url(#neuralGradient)"
                    strokeWidth="2"
                    fill="none"
                    className="animate-pulse"
                    style={{ animationDelay: '1s' }}
                  />
                </svg>
              </div>
            </ScrollTriggerWrapper>
          </div>
        </div>
      </div>

      {/* Background Neural Network */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-neural" />
      </div>
    </section>
  );
};

export default AboutSection;