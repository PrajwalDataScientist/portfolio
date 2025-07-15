import React, { useState } from 'react';
import { Mail, Linkedin, Github, Globe, Send, MessageSquare,Bot } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import ScrollTriggerWrapper from '@/components/3D/ScrollTriggerWrapper';
import AIAgent from '@/components/3D/AIAgent';
import { toast } from 'sonner';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    const mailtoLink = `mailto:prajwalint1027@gmail.com?subject=${encodeURIComponent(
      subject || "🚀 Let's Collaborate on an AI Project"
    )}&body=${encodeURIComponent(
      `Hi Prajwal,\n\nMy name is ${name} (${email}).\n\n${message}\n\nLooking forward to your response.\n`
    )}`;

    window.location.href = mailtoLink;

    toast.success("Please copy this email: prajwalint1027@gmail.com and send your message manually via your email app. Thank you!");
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:prajwalint1027@gmail.com",
      value: "prajwalint1027@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/prajwal10ds",
      value: "/in/prajwal10ds"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/PrajwalDataScientist",
      value: "@PrajwalDataScientist"
    },
    {
      icon: Globe,
      label: "Portfolio",
      href: "#",
      value: "prajwal10ds"
    },
    {
      icon: Bot,
      label: "AI Assistant",
      href: "https://prajwal-ai-assistant.onrender.com/",
      value: "Ask me anything about my work!"
    }
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
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
              Initialize Contact
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to collaborate on groundbreaking AI projects or discuss the future of data science? Let’s bridge the digital divide and spark innovation together.
            </p>
          </div>
        </ScrollTriggerWrapper>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <ScrollTriggerWrapper animation="slide-in-space" delay={300}>
            <Card className="glass-panel p-8 neon-glow">
              <div className="flex items-center space-x-3 mb-8">
                <MessageSquare className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold holographic-text">Send Transmission</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-accent mb-2">Name</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="glass-panel border-primary/30 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-accent mb-2">Email</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@domain.com"
                      required
                      className="glass-panel border-primary/30 focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-accent mb-2">Subject</label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project collaboration, consultation, etc."
                    required
                    className="glass-panel border-primary/30 focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-accent mb-2">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, ideas, or how we can collaborate..."
                    rows={6}
                    required
                    className="glass-panel border-primary/30 focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full glass-panel neon-glow hover:scale-105 transition-all duration-300"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                      <span>Transmitting...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </div>
                  )}
                </Button>
              </form>
            </Card>
          </ScrollTriggerWrapper>

          <div className="space-y-8">
            <ScrollTriggerWrapper animation="burst-forward" delay={600}>
              <Card className="glass-panel p-8 neon-glow">
                <h3 className="text-2xl font-bold holographic-text mb-6">Direct Channels</h3>
                <div className="space-y-4">
                  {socialLinks.map((link, index) => (
                    <ScrollTriggerWrapper
                      key={link.label}
                      animation="slide-in-space"
                      delay={800 + index * 100}
                    >
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-4 p-4 rounded-lg glass-panel border border-primary/20 hover:border-primary hover:scale-105 transition-all duration-300 group"
                      >
                        <div className="p-3 rounded-lg bg-primary/20 border border-primary group-hover:animate-pulse">
                          <link.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-holographic">{link.label}</p>
                          <p className="text-sm text-muted-foreground">{link.value}</p>
                        </div>
                      </a>
                    </ScrollTriggerWrapper>
                  ))}
                </div>
              </Card>
            </ScrollTriggerWrapper>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
    </section>
  );
};

export default ContactSection;
