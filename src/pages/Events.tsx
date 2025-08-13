import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Filter, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Layout from '@/components/Layout';

const Events = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const upcomingEvents = [
    {
      id: 1,
      title: 'Professional Networking Mixer',
      date: '2024-02-15',
      time: '6:00 PM - 9:00 PM',
      location: 'Downtown Convention Center',
      attendees: 120,
      category: 'networking',
      description: 'Connect with professionals from various industries in a relaxed, engaging environment.',
      price: 'Free',
    },
    {
      id: 2,
      title: 'Leadership Development Workshop',
      date: '2024-02-22',
      time: '9:00 AM - 4:00 PM',
      location: 'Business Innovation Hub',
      attendees: 45,
      category: 'workshop',
      description: 'Intensive workshop focusing on developing essential leadership skills for the modern workplace.',
      price: '$89',
    },
    {
      id: 3,
      title: 'Tech Innovation Conference',
      date: '2024-03-05',
      time: '8:00 AM - 6:00 PM',
      location: 'Technology Center',
      attendees: 300,
      category: 'conference',
      description: 'Explore the latest trends in technology and innovation with industry experts.',
      price: '$149',
    },
    {
      id: 4,
      title: 'Community Service Day',
      date: '2024-03-12',
      time: '9:00 AM - 3:00 PM',
      location: 'Local Community Park',
      attendees: 85,
      category: 'community',
      description: 'Join us for a day of giving back to our community through various service projects.',
      price: 'Free',
    },
  ];

  const pastEvents = [
    {
      id: 5,
      title: 'Annual Gala Dinner',
      date: '2024-01-20',
      time: '7:00 PM - 11:00 PM',
      location: 'Grand Ballroom Hotel',
      attendees: 250,
      category: 'gala',
      description: 'Our annual celebration recognizing outstanding achievements and community impact.',
    },
    {
      id: 6,
      title: 'Entrepreneurship Workshop Series',
      date: '2024-01-10',
      time: '6:00 PM - 8:00 PM',
      location: 'Startup Incubator',
      attendees: 60,
      category: 'workshop',
      description: 'Three-part series covering the fundamentals of starting and growing a business.',
    },
  ];

  const categories = [
    { id: 'all', name: 'All Events' },
    { id: 'networking', name: 'Networking' },
    { id: 'workshop', name: 'Workshops' },
    { id: 'conference', name: 'Conferences' },
    { id: 'community', name: 'Community' },
  ];

  const filteredEvents = upcomingEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'all' || event.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const EventCard = ({ event, isPast = false }: { event: any; isPast?: boolean }) => (
    <Card className="card-hover">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <CardTitle className="text-xl font-semibold">{event.title}</CardTitle>
          {!isPast && (
            <span className="text-sm font-medium text-primary bg-primary-light px-2 py-1 rounded-full">
              {event.price}
            </span>
          )}
        </div>
        <CardDescription className="text-muted-foreground">
          {event.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 mr-2 text-primary" />
            <span>{new Date(event.date).toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="h-4 w-4 mr-2 text-primary" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 mr-2 text-primary" />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Users className="h-4 w-4 mr-2 text-primary" />
            <span>{event.attendees} attendees</span>
          </div>
        </div>
        {!isPast && (
          <div className="mt-6 flex gap-3">
            <Button className="flex-1">
              Register Now
            </Button>
            <Button variant="outline" size="sm">
              Learn More
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );

  return (
    <Layout>
      <div className="pt-20">
        {/* Header */}
        <section className="section-padding bg-gradient-primary">
          <div className="container-custom text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Events & Programs
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Discover opportunities to learn, connect, and grow through our diverse range of events and programs.
            </p>
          </div>
        </section>

        {/* Events Content */}
        <section className="section-padding">
          <div className="container-custom">
            <Tabs defaultValue="upcoming" className="w-full">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
                <TabsList className="grid w-full md:w-auto grid-cols-2">
                  <TabsTrigger value="upcoming" className="px-6">Upcoming Events</TabsTrigger>
                  <TabsTrigger value="past" className="px-6">Past Events</TabsTrigger>
                </TabsList>

                {/* Search and Filter */}
                <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search events..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 w-full sm:w-64"
                    />
                  </div>
                  <select
                    value={activeFilter}
                    onChange={(e) => setActiveFilter(e.target.value)}
                    className="px-3 py-2 border border-border rounded-md bg-background text-foreground"
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <TabsContent value="upcoming">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredEvents.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
                {filteredEvents.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground text-lg">
                      No events found matching your criteria.
                    </p>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="past">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {pastEvents.map((event) => (
                    <EventCard key={event.id} event={event} isPast />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-surface">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Don't Miss Out on Future Events
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to stay updated on upcoming events, workshops, and networking opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input 
                placeholder="Enter your email address" 
                className="flex-1"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Events;