import { Bot, Robot } from 'lucide-react';
import React, { useState } from 'react';

import { 
  Brain, 
  Database, 
  Code, 
  BarChart3, 
  Cpu, 
  Cloud, 
  GitBranch, 
  LineChart ,
  ShieldCheck
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import ScrollTriggerWrapper from '@/components/3D/ScrollTriggerWrapper';
import AIAgent from '@/components/3D/AIAgent';

const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories = [
    {
      title: "Machine Learning",
      icon: Brain,
      color: "primary",
      skills: [
        { name: "Machine Learning", level: 95, tools: ["Scikit-learn", "Supervised Learning", "Unsupervised Learning","Regression","Classification"] },
        { name: "Deep Learning", level: 80, tools: ["TensorFlow", "Keras", "CNN","RNN","LSTM"] },
        { name: "NLP", level: 90, tools: ["NLTK", "TF-IDF", "CountVectorizer","Text preprocessing"] },
        
      ]
    },
    {
      title: "SQL & Relational Databases",
      icon: Database,
      color: "accent",
      skills: [
    {
      name: "Advanced SQL Skills",
      level: 95,
      tools: [
        "Joins (INNER, OUTER, SELF, CROSS)",
        "Subqueries & Nested Queries",
        "Views & Materialized Views",
        "Stored Procedures",
        "Functions & Triggers",
        "Window Functions",
        "Group By, Having, CTEs",
        "Custom Query Writing"
      ]
    }
  ]
    },
      {
      title: "AI Agent Frameworks & Chatbot Development",
      icon: Bot,
      color: "accent",
      skills: [
    {
      name: "LangChain & LangGraph",
      level: 95,
      tools: [
        "Tool-based Agents",
        "Web Search (Tavily, Wikipedia)",
        "Conversational Memory",
        "Prompt Engineering",
        "Runnable Interfaces",
        "RAG"
      ]
    },{ name: "Chatbot Development", level: 80, tools: [
        "Custom Tool Integration",
        "Memory-based Chatbots",
        "Streamlit UI",
        "LLM Routing & Chaining",
        "Groq API Integration"
      ] },
  ]
    },
    {
      title: "Programming",
      icon: Code,
      color: "secondary",
      skills: [
        { name: "Python", level: 90, tools: [
                                                "Pandas",
                                                "NumPy",
                                                "Matplotlib",
                                                "Seaborn",
                                                "Scikit-learn",
                                                "Functions",
                                                "Modules",
                                                "OOP (Object-Oriented Programming)",
                                                "Data Cleaning" ]},
 
        
      ]
    },
        {
      title: "Git & Docker",
      icon: Cloud,
      color: "tertiary",
      skills: [
        {
          name: "Version Control & CI/CD",
          level: 90,
          tools: ["Git", "GitHub", "Git Commands"]
        },
        {
          name: "Containerization",
          level: 85,
          tools: ["Docker", "Docker Hub", "Docker Commands"]
        }
        
  ]

  
} ,       
{
      title: "Foundations in Cybersecurity",
      icon: ShieldCheck,
      color: "red",
      skills: [
        {
          name: "Security Fundamentals",
          level: 70,
          tools: [
        "Basic Networking Concepts",
        "Web Application Vulnerabilities (XSS, SQLi)",
        "OWASP Top 10 Awareness",
        "API Security Concepts"
      ]
        },
        {
          name: "Hands-On Tools Exposure",
          level: 70,
           tools: [
        "Burp Suite",
        "OWASP ZAP",
        "Insomnia"
      ]
        },{
          name: "Exploring AI Security",
          level: 70,
           tools: [
        "Prompt Injection Awareness",
        "LLM Input Testing (Basics)",
        "Safe Prompt Design Principles"
      ]
        }
        
  ]

  
}        



  ];

    return (
      <section id="skills" className="py-32 relative overflow-hidden">
        {/* Floating AI Agents */}
        <div className="absolute top-20 right-10 z-10">
          <AIAgent variant="cpu" size="lg" />
        </div>
        <div className="absolute bottom-32 left-10 z-10">
          <AIAgent variant="brain" size="md" />
        </div>

        <div className="container mx-auto px-6">
          <ScrollTriggerWrapper animation="zoom-in-3d">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold holographic-text mb-6">
                Technological Proficiency
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A dynamic toolkit crafted through hands-on experience and continuous innovation in the evolving world of Data Science, Machine Learning, and AI-powered solutions.


              </p>
            </div>
          </ScrollTriggerWrapper>

          {/* Category Navigation */}
          <ScrollTriggerWrapper animation="slide-in-space" delay={300}>
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {skillCategories.map((category, index) => (
                <button
                  key={category.title}
                  onClick={() => setActiveCategory(index)}
                  className={`
                    flex items-center space-x-3 px-6 py-3 rounded-lg glass-panel
                    transition-all duration-300 hover:scale-105
                    ${activeCategory === index 
                      ? 'neon-glow border-primary bg-primary/10' 
                      : 'border-border hover:border-primary/50'
                    }
                  `}
                >
                  <category.icon className={`w-5 h-5 ${
                    activeCategory === index ? 'text-primary' : 'text-muted-foreground'
                  }`} />
                  <span className={`font-medium ${
                    activeCategory === index ? 'text-primary' : 'text-muted-foreground'
                  }`}>
                    {category.title}
                  </span>
                </button>
              ))}
            </div>
          </ScrollTriggerWrapper>

          {/* Active Category Skills */}
          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <ScrollTriggerWrapper
                key={skill.name}
                animation="burst-forward"
                delay={index * 200}
              >
                <Card className="glass-panel p-6 hover:scale-105 transition-all duration-500 neon-glow group">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-bold text-holographic">
                        {skill.name}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-primary">
                          {skill.level}%
                        </span>
                        <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="space-y-2">
                      <Progress 
                        value={skill.level} 
                        className="h-3 bg-muted/30"
                      />
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Proficiency Level</span>
                        <div className="flex space-x-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <div
                              key={i}
                              className={`w-2 h-2 rounded-full ${
                                i < skill.level / 20 
                                  ? 'bg-primary animate-pulse' 
                                  : 'bg-muted/30'
                              }`}
                              style={{ animationDelay: `${i * 0.1}s` }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Tools & Technologies */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-accent">
                        Core Technologies
                      </h4>
                      <div className="grid grid-cols-3 gap-2">
                        {skill.tools.map((tool) => (
                          <div
                            key={tool}
                            className="text-xs text-center py-2 px-3 rounded-md bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-colors duration-300"
                          >
                            {tool}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Neural Connection Visual */}
                    <div className="relative h-8 overflow-hidden">
                      <svg className="absolute inset-0 w-full h-full opacity-30">
                        <defs>
                          <linearGradient id={`skillGradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.2" />
                          </linearGradient>
                        </defs>
                        <path
                          d={`M0,15 Q${skill.level},5 200,15`}
                          stroke={`url(#skillGradient-${index})`}
                          strokeWidth="2"
                          fill="none"
                          className="animate-pulse"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Holographic Overlay */}
                  <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                    <div className="w-full h-full bg-gradient-hologram animate-hologram rounded-lg" />
                  </div>
                </Card>
              </ScrollTriggerWrapper>
            ))}
          </div>

          {/* Rotating Skill Orbit Visualization */}
          <ScrollTriggerWrapper animation="zoom-in-3d" delay={800}>
            <div className="mt-20 flex justify-center">
              <div className="relative w-80 h-80 transform-3d">
                {/* Central Core */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-primary/20 border-2 border-primary animate-pulse flex items-center justify-center">
                  <Brain className="w-8 h-8 text-primary" />
                </div>
                
                {/* Orbiting Skills */}
                {skillCategories.map((category, index) => (
                  <div
                    key={category.title}
                    className="absolute w-12 h-12 rounded-full bg-accent/20 border border-accent flex items-center justify-center animate-float"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `
                        translate(-50%, -50%) 
                        rotate(${index * 90}deg) 
                        translateX(120px) 
                        rotate(-${index * 90}deg)
                      `,
                      animationDelay: `${index * 0.5}s`
                    }}
                  >
                    <category.icon className="w-6 h-6 text-accent" />
                  </div>
                ))}
              </div>
            </div>
          </ScrollTriggerWrapper>
        </div>

        {/* Background Neural Network */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-neural animate-pulse" />
        </div>
      </section>
    );
  };

  export default SkillsSection;