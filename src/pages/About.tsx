import React from 'react';
import { Target, Eye, Heart, Users, Award, Globe, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/Layout';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Community First',
      description: 'We believe in putting our community at the center of everything we do, fostering inclusive and supportive environments.',
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Our initiatives create positive change that extends beyond local boundaries to make a worldwide difference.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in all our programs, events, and services to deliver maximum value to our members.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Through collaboration and partnership, we achieve more together than any individual effort could accomplish.',
    },
  ];

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Executive Director',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      bio: 'With over 15 years of experience in community development, Sarah leads our organization with passion and vision.',
    },
    {
      name: 'Michael Chen',
      role: 'Programs Director',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      bio: 'Michael oversees all our educational programs and workshops, bringing innovative approaches to professional development.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Community Manager',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      bio: 'Emily manages our community engagement initiatives and ensures every member feels valued and connected.',
    },
    {
      name: 'David Park',
      role: 'Operations Manager',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      bio: 'David handles the operational aspects of our organization, ensuring smooth execution of all programs and events.',
    },
  ];

  const milestones = [
    {
      year: '2020',
      title: 'Organization Founded',
      description: 'Connect & Grow was established with a mission to foster professional development and community building.',
    },
    {
      year: '2021',
      title: 'First Major Conference',
      description: 'Hosted our inaugural professional development conference with over 500 attendees.',
    },
    {
      year: '2022',
      title: 'Community Expansion',
      description: 'Expanded our reach to serve multiple cities and launched our mentorship program.',
    },
    {
      year: '2023',
      title: 'Digital Innovation',
      description: 'Launched our digital platform and virtual events to serve a global community.',
    },
    {
      year: '2024',
      title: 'Impact Milestone',
      description: 'Reached 2,500+ active members and established partnerships with 50+ organizations.',
    },
  ];

  return (
    <Layout>
      <div className="pt-20">
        {/* Header */}
        <section className="section-padding bg-gradient-primary">
          <div className="container-custom text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Connect & Grow
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              We're a community-driven organization dedicated to fostering professional growth, 
              meaningful connections, and positive social impact.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <Target className="h-8 w-8 text-primary mr-3" />
                    <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To empower individuals and organizations through innovative programs, 
                    meaningful connections, and collaborative initiatives that drive personal 
                    and professional growth while creating positive impact in our communities.
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center mb-4">
                    <Eye className="h-8 w-8 text-primary mr-3" />
                    <h2 className="text-3xl font-bold text-foreground">Our Vision</h2>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    A world where every individual has access to the resources, connections, 
                    and opportunities they need to reach their full potential and contribute 
                    meaningfully to society.
                  </p>
                </div>
              </div>
              
              <div className="lg:pl-8">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                  alt="Our mission and vision"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-surface">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                These values guide every decision we make and every program we develop.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card 
                    key={value.title} 
                    className="card-hover border-0 bg-background text-center"
                  >
                    <CardHeader>
                      <div className="mx-auto bg-gradient-primary rounded-lg p-3 w-fit mb-4">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl font-semibold">
                        {value.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section-padding" id="team">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Passionate professionals dedicated to making a difference in our community.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={member.name} className="card-hover border-0 text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-24 h-24 rounded-full object-cover mx-auto"
                      />
                    </div>
                    <CardTitle className="text-xl font-semibold">
                      {member.name}
                    </CardTitle>
                    <CardDescription className="text-primary font-medium">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-padding bg-surface">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Journey
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Key milestones in our mission to build stronger communities.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={milestone.year} className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {milestone.year.slice(-2)}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="bg-gradient-subtle rounded-2xl p-8 md:p-12 text-center shadow-xl">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Join Our Mission
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Be part of a community that's making a real difference. Whether you're looking 
                  to grow professionally, contribute to meaningful causes, or connect with 
                  like-minded individuals, there's a place for you here.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="px-8 py-4 text-lg font-semibold"
                  >
                    Become a Member
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="px-8 py-4 text-lg font-semibold"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;