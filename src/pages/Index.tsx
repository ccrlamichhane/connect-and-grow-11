import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Calendar, Heart, Flower2, Sunrise, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import heroBg from '@/assets/hindu-temple-hero.jpg';

const Index = () => {
  const { t } = useLanguage();
  const features = [
    {
      icon: Flower2,
      title: t('home.features.spiritualTitle'),
      description: t('home.features.spiritualDesc'),
    },
    {
      icon: Calendar,
      title: t('home.features.festivalTitle'),
      description: t('home.features.festivalDesc'),
    },
    {
      icon: BookOpen,
      title: t('home.features.educationTitle'),
      description: t('home.features.educationDesc'),
    },
    {
      icon: Heart,
      title: t('home.features.communityTitle'),
      description: t('home.features.communityDesc'),
    },
  ];

  const stats = [
    { number: '500+', label: t('home.stats.members') },
    { number: '50+', label: t('home.stats.events') },
    { number: '12', label: t('home.stats.temples') },
    { number: '5', label: t('home.stats.years') },
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
            <div className="text-center mb-6">
              <span className="text-6xl md:text-8xl mb-4 block">🕉️</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight font-serif">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-white/90 font-medium">
              {t('hero.subtitle')}
            </p>
            <p className="text-lg md:text-xl mb-8 text-white/80 leading-relaxed">
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="btn-hero px-8 py-4 text-lg font-semibold"
                asChild
              >
                <Link to="/events">
                  {t('hero.joinUsBtn')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="btn-secondary-hero px-8 py-4 text-lg font-semibold"
                asChild
              >
                <Link to="/about">{t('hero.learnMoreBtn')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
              {t('home.welcomeTitle')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('home.welcomeSubtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={feature.title} 
                  className="card-hover border-0 bg-background om-pattern relative overflow-hidden"
                  style={{ '--stagger': index } as React.CSSProperties}
                >
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto bg-gradient-divine rounded-full p-4 w-fit mb-4 shadow-lg">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold font-serif">
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
      <section className="section-padding bg-gradient-divine relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10"></div>
        <div className="container-custom relative z-10">
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
          <div className="bg-gradient-temple rounded-2xl p-8 md:p-12 text-center shadow-xl border border-accent/30 relative overflow-hidden">
            <div className="absolute top-4 left-4 text-4xl opacity-10">🕉️</div>
            <div className="absolute bottom-4 right-4 text-4xl opacity-10">🪷</div>
            <div className="max-w-3xl mx-auto relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
                Ready to Begin Your Spiritual Journey?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join our sacred community dedicated to preserving dharma and fostering spiritual growth. 
                Your path to enlightenment and cultural connection starts here.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="px-8 py-4 text-lg font-semibold"
                  asChild
                >
                  <Link to="/contact">
                    Join Our Sangha
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="px-8 py-4 text-lg font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  asChild
                >
                  <Link to="/about">Discover Our Mission</Link>
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
