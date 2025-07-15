import React from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ScrollTriggerWrapper from '@/components/3D/ScrollTriggerWrapper';
import AIAgent from '@/components/3D/AIAgent';

const EducationSection: React.FC = () => {
  const education = [
    {
      degree: "Bachelor Degree",
      specialization: " Bachelor of Computer Applications (BCA)",
      institution: "Don Bosco Degree College",
      location: "Chitradurga",
      period: "2020 - 2023",
      achievements: [
        "Built a strong foundation in computer science and practical problem-solving",
        "Developed a Blood Bank Website as a final-year project to support emergency life-saving efforts",
        "TAwarded “Best Outgoing Student” for academic and extracurricular excellence",
        "Winner of the University Drama Competition, showcasing creativity and leadership"
      ]
    },
    {
      degree: " Pre-University Course (PUC)",
      specialization: "Biology",
      institution: "Don Bosco PU College",
      location: "Chitradurga", 
      period: "2018 – 2020",
      achievements: [
        "Completed core subjects in Biology, Chemistry, and Physics",
        "Built a disciplined academic foundation for future technical learning"
      ]
    },
    {
      degree: "Schooling",
      specialization: "Karnataka Secondary Education Examination Board (KSEEB)",
      institution: "J.M. Imam Memorial School",
      location: "California, USA",
      period: "2006 – 2018",
      achievements: [
        "Developed curiosity, discipline, and a lifelong passion for learning",
        "Participated in science fairs, quiz competitions, and school clubs"
      ]
    }
  ];

  const certifications = [
    {
      title: "Data Analysis with Excel, Power BI & SQL",
      issuer: "Bestan Technology in BTM layout bangalore",
      date: "2023-2024"
      
    },
    {
      title: "Machine Learning with Python",
      issuer: "Bestan Technology in BTM layout bangalore",
      date: "2023-2024"
    },
    {
      title: "NLP and Deep Learning with AI",
      issuer: "Udemy",
      date: "Pursuing"
    }
  ];

  return (
    <section id="education" className="py-32 relative overflow-hidden">
      {/* Floating AI Agents */}
      <div className="absolute top-20 left-10 z-10">
        <AIAgent variant="brain" size="lg" />
      </div>
      <div className="absolute bottom-20 right-10 z-10">
        <AIAgent variant="zap" size="md" />
      </div>

      <div className="container mx-auto px-6">
        <ScrollTriggerWrapper animation="zoom-in-3d">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold holographic-text mb-6">
              Academic Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Who I am today is deeply rooted in the values, discipline, and knowledge I gained from my school and college journey. I'm truly grateful to have been shaped by such inspiring institutions that laid the groundwork for everything I’ve built.
            </p>
          </div>
        </ScrollTriggerWrapper>

        {/* Education Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-secondary"></div>
          
          <div className="space-y-12">
            {education.map((edu, index) => (
              <div key={edu.degree} className="relative">
                {/* Timeline Node */}
                <div className="absolute left-4 w-8 h-8 rounded-full bg-primary border-4 border-background animate-pulse">
                  <div className="absolute inset-2 rounded-full bg-primary animate-ping" />
                </div>

                <ScrollTriggerWrapper 
                  animation="slide-in-space"
                  delay={index * 300}
                >
                  <div className="ml-20">
                    <Card className="glass-panel p-8 hover:scale-105 transition-all duration-500 neon-glow group">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <GraduationCap className="w-6 h-6 text-primary" />
                            <h3 className="text-2xl font-bold text-holographic">
                              {edu.degree}
                            </h3>
                          </div>
                          <p className="text-lg text-accent font-medium mb-2">
                            {edu.specialization}
                          </p>
                          <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                            <div className="flex items-center space-x-2">
                              <MapPin className="w-4 h-4" />
                              <span>{edu.institution}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Calendar className="w-4 h-4" />
                              <span>{edu.period}</span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 lg:mt-0">
                          <Badge 
                            variant="outline" 
                            className="border-primary text-primary bg-primary/10 px-3 py-1"
                          >
                            GPA: {edu.gpa}
                          </Badge>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-accent">Key Achievements</h4>
                        {edu.achievements.map((achievement) => (
                          <div
                            key={achievement}
                            className="flex items-start space-x-3 text-muted-foreground"
                          >
                            <div className="w-2 h-2 rounded-full bg-accent mt-2 animate-pulse" />
                            <span className="flex-1">{achievement}</span>
                          </div>
                        ))}
                      </div>

                      {/* Holographic Effect */}
                      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                        <div className="w-full h-full bg-gradient-hologram animate-hologram rounded-lg" />
                      </div>
                    </Card>
                  </div>
                </ScrollTriggerWrapper>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <ScrollTriggerWrapper animation="zoom-in-3d" delay={900}>
          <div className="mt-32">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold holographic-text mb-4">
                Professional Certifications
              </h3>
              <p className="text-lg text-muted-foreground">
                Industry-recognized credentials validating expertise in cutting-edge technologies.


              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <ScrollTriggerWrapper
                  key={cert.title}
                  animation="burst-forward"
                  delay={1200 + index * 200}
                >
                  <Card className="glass-panel p-6 hover:scale-105 transition-all duration-300 neon-glow group">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-lg bg-accent/20 border border-accent">
                        <Award className="w-6 h-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-holographic mb-2">
                          {cert.title}
                        </h4>
                        <p className="text-muted-foreground mb-2">
                          {cert.issuer}
                        </p>
                        <div className="flex justify-between items-center">
                          <Badge 
                            variant="outline"
                            className="border-accent/30 text-accent bg-accent/5"
                          >
                            {cert.date}
                          </Badge>
                          
                        </div>
                      </div>
                    </div>
                  </Card>
                </ScrollTriggerWrapper>
              ))}
            </div>
          </div>
        </ScrollTriggerWrapper>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
      </div>
    </section>
  );
};

export default EducationSection;