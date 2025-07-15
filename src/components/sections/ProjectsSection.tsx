import React from 'react';
import { ExternalLink, Github, Brain, BarChart, Image, MessageSquare } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ScrollTriggerWrapper from '@/components/3D/ScrollTriggerWrapper';
import AIAgent from '@/components/3D/AIAgent';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "AI Tool-Integrated Chatbot Agent",
      description: "Chatbot powered by LangChain and LangGraph with dynamic tool integration for real-time web search and knowledge retrieval from Wikipedia and Tavily.",
      icon: MessageSquare,
      tech: ["LangChain", "LangGraph", "Python", "Wikipedia API","Tavily Web Search","Streamlit"],
      metrics: ["Tool-based Reasoning", "Live Web + Wikipedia Search", "Fully Local & API-Free (Groq Compatible)","Modular Architecture with Memory Support"],
      liveUrl: "https://github.com/PrajwalDataAnalyst/tool_chatbot",
      githubUrl: "https://github.com/PrajwalDataAnalyst/tool_chatbot"
    },
    {
      title: "Spam Message Classifier",
      description: "A real-time NLP spam classifier web app that detects whether a given message is Spam or Ham, powered by TF-IDF, Logistic Regression, and deployed using Streamlit.",
      icon: BarChart,
      tech: ["Python", "NLTK", "TF-IDF", "Logistic Regression","Streamlit","Docker"],
      metrics: [" 97.1% Accuracy (Logistic Regression – TF-IDF)", "Real-time Spam Detection", "Text Preprocessing with Tokenization, Lemmatization","Containerized & Web-ready Deployment"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Supermarket Performance Dashboard ",
      description: "An interactive Power BI dashboard designed to analyze and visualize performance across multiple supermarket stores, offering clear, real-time insights into revenue, profit, and product-level trends.",
      icon: Image,
      tech: ["Power BI", "DAX", "Excel", "Data Modeling"],
      metrics: ["Store-Level Revenue & Return Analysis", "Top 5 Best-Selling Products Visualization", "Real-Time KPIs: Revenue, Profit, Units Sold, Transactions"," Interactive Slicers by Store, Product, and Time Period"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Smart AutoML Streamlit App",
      description: "A versatile Streamlit-based AutoML app that lets users upload any CSV dataset, automatically trains multiple machine learning models, and identifies the best one for regression or classification tasks — all without writing code.",
      icon: Brain,
      tech: ["Python", "Scikit-learn", "Pandas", "Cross-Validation","AutoML Workflow"],
      metrics: ["Fully Automated Model Training (Regression & Classification)", "Best Model Selection via Cross-Validation", "Supports Multiple ML Algorithms with Preprocessing","Automatic model selection via cross-validation"],
      liveUrl: "https://github.com/PrajwalDataAnalyst/smart-automl-streamlit-app",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Floating AI Agents */}
      <div className="absolute top-20 left-10 z-10">
        <AIAgent variant="cpu" size="md" />
      </div>
      <div className="absolute bottom-20 right-10 z-10">
        <AIAgent variant="zap" size="lg" />
      </div>

      <div className="container mx-auto px-6">
        <ScrollTriggerWrapper animation="zoom-in-3d">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold holographic-text mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Exploring the frontiers of AI and data science through innovative solutions
              that push the boundaries of what's possible.
            </p>
          </div>
        </ScrollTriggerWrapper>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={project.title} className="relative">
              {/* Flying AI objects between projects */}
              {index % 2 === 0 && (
                <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 z-20">
                  <AIAgent variant="brain" size="sm" />
                </div>
              )}
              
              <ScrollTriggerWrapper 
                animation="burst-forward"
                delay={index * 300}
              >
                <Card className="glass-panel p-8 h-full hover:scale-105 transition-all duration-500 neon-glow group">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-lg bg-primary/20 border border-primary group-hover:animate-pulse">
                        <project.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-holographic">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-primary hover:text-accent transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-primary hover:text-accent transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-primary mb-3">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="border-primary/30 text-primary bg-primary/5 hover:bg-primary/10 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-accent mb-3">Key Achievements</h4>
                    {project.metrics.map((metric) => (
                      <div
                        key={metric}
                        className="flex items-center space-x-2 text-sm text-holographic"
                      >
                        <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>

                  {/* Holographic Effect Overlay */}
                  <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                    <div className="w-full h-full bg-gradient-hologram animate-hologram rounded-lg" />
                  </div>
                </Card>
              </ScrollTriggerWrapper>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <ScrollTriggerWrapper animation="zoom-in-3d" delay={1200}>
          <div className="text-center mt-16">
            <a
              href="https://github.com/PrajwalDataAnalyst"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="glass-panel neon-glow hover:scale-105 transition-all duration-300 text-foreground hover:text-primary font-semibold hover:shadow-neon border-primary/30"
              >
                View All Projects
              </Button>
            </a>
          </div>
        </ScrollTriggerWrapper>

      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
    </section>
  );
};

export default ProjectsSection;