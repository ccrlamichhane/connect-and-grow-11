import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Calendar, Award, Heart, TrendingUp, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/Layout';
import heroBg from '@/assets/hero-bg.jpg';

const Index = () => {
  const features = [
    {
      icon: Users,
      title: 'Community Building',
      description: 'Connect with like-minded professionals and build lasting relationships that drive mutual growth and success.',
    },
    {
      icon: Calendar,
      title: 'Engaging Events',
      description: 'Participate in workshops, networking sessions, and conferences designed to enhance your skills and expand your network.',
    },
    {
      icon: Award,
      title: 'Professional Development',
      description: 'Access resources, mentorship programs, and training opportunities to accelerate your career advancement.',
    },
    {
      icon: Heart,
      title: 'Social Impact',
      description: 'Join initiatives that make a difference in our community and create positive change in the world around us.',
    },
  ];

  const stats = [
    { number: '2,500+', label: 'Active Members' },
    { number: '150+', label: 'Events Hosted' },
    { number: '50+', label: 'Partner Organizations' },
    { number: '95%', label: 'Satisfaction Rate' },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="hero-overlay" />
        <div className="relative z-10 container-custom text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Building Communities,{' '}
              <span className="text-gradient bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Creating Impact
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Join our vibrant community of professionals, innovators, and change-makers. 
              Together, we're fostering growth, creating connections, and making a positive impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="btn-hero px-8 py-4 text-lg font-semibold"
                asChild
              >
                <Link to="/events">
                  Explore Events
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="btn-secondary-hero px-8 py-4 text-lg font-semibold"
                asChild
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Join Connect & Grow?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're more than just an organization – we're a catalyst for personal and professional transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={feature.title} 
                  className="card-hover border-0 bg-background"
                  style={{ '--stagger': index } as React.CSSProperties}
                >
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto bg-gradient-primary rounded-lg p-3 w-fit mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-muted-foreground leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-primary">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="fade-in-up"
                style={{ '--stagger': index } as React.CSSProperties}
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-white/90 text-sm md:text-base font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-gradient-subtle rounded-2xl p-8 md:p-12 text-center shadow-xl">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Connect and Grow?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join thousands of professionals who are already part of our thriving community. 
                Your journey of growth and meaningful connections starts here.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="px-8 py-4 text-lg font-semibold"
                  asChild
                >
                  <Link to="/contact">
                    Get Started Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="px-8 py-4 text-lg font-semibold"
                  asChild
                >
                  <Link to="/about">View Our Impact</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
