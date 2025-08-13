import React, { useState } from 'react';
import { Search, Calendar, User, Clock, ArrowRight, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/Layout';

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'leadership', name: 'Leadership' },
    { id: 'networking', name: 'Networking' },
    { id: 'development', name: 'Development' },
    { id: 'community', name: 'Community' },
    { id: 'innovation', name: 'Innovation' },
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Professional Networking in a Digital World',
      excerpt: 'Explore how digital transformation is reshaping the way we build professional relationships and create meaningful connections.',
      author: 'Sarah Johnson',
      date: '2024-02-10',
      readTime: '8 min read',
      category: 'networking',
      tags: ['digital', 'networking', 'future'],
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop',
      featured: true,
    },
    {
      id: 2,
      title: 'Building Resilient Communities Through Collaboration',
      excerpt: 'Learn how collaborative approaches can strengthen communities and create lasting positive impact in our society.',
      author: 'Michael Chen',
      date: '2024-02-08',
      readTime: '6 min read',
      category: 'community',
      tags: ['collaboration', 'resilience', 'impact'],
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=400&fit=crop',
    },
    {
      id: 3,
      title: 'Leadership Lessons from Successful Organizations',
      excerpt: 'Discover key leadership principles and strategies that drive organizational success and employee engagement.',
      author: 'Emily Rodriguez',
      date: '2024-02-05',
      readTime: '10 min read',
      category: 'leadership',
      tags: ['leadership', 'management', 'success'],
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=400&fit=crop',
    },
    {
      id: 4,
      title: 'Innovation in Professional Development Programs',
      excerpt: 'How modern organizations are revolutionizing employee development through innovative training approaches.',
      author: 'David Park',
      date: '2024-02-03',
      readTime: '7 min read',
      category: 'development',
      tags: ['innovation', 'training', 'growth'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop',
    },
    {
      id: 5,
      title: 'The Art of Meaningful Conversations',
      excerpt: 'Master the skills needed to create deeper, more meaningful professional and personal conversations.',
      author: 'Lisa Thompson',
      date: '2024-01-30',
      readTime: '5 min read',
      category: 'networking',
      tags: ['communication', 'relationships', 'skills'],
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=400&fit=crop',
    },
    {
      id: 6,
      title: 'Technology Trends Shaping the Future of Work',
      excerpt: 'An in-depth look at emerging technologies and their impact on the modern workplace and career development.',
      author: 'Alex Kumar',
      date: '2024-01-28',
      readTime: '9 min read',
      category: 'innovation',
      tags: ['technology', 'future', 'workplace'],
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop',
    },
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const BlogCard = ({ post, isFeatured = false }: { post: any; isFeatured?: boolean }) => (
    <Card className={`card-hover ${isFeatured ? 'lg:col-span-2' : ''}`}>
      <div className={`${isFeatured ? 'md:flex' : ''}`}>
        <div className={`${isFeatured ? 'md:w-1/2' : ''} relative`}>
          <img
            src={post.image}
            alt={post.title}
            className={`w-full object-cover rounded-t-lg ${isFeatured ? 'md:rounded-l-lg md:rounded-t-none h-64 md:h-full' : 'h-48'}`}
          />
          {isFeatured && (
            <Badge className="absolute top-4 left-4 bg-secondary">
              Featured
            </Badge>
          )}
        </div>
        <div className={`${isFeatured ? 'md:w-1/2' : ''}`}>
          <CardHeader className={isFeatured ? 'pb-4' : ''}>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <Badge variant="outline" className="text-xs">
                {categories.find(cat => cat.id === post.category)?.name}
              </Badge>
            </div>
            <CardTitle className={`${isFeatured ? 'text-2xl md:text-3xl' : 'text-xl'} font-bold mb-3`}>
              {post.title}
            </CardTitle>
            <CardDescription className={`${isFeatured ? 'text-base' : 'text-sm'} leading-relaxed`}>
              {post.excerpt}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag: string) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  <Tag className="h-3 w-3 mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="p-0 h-auto text-primary hover:text-primary-hover">
                Read More
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  );

  return (
    <Layout>
      <div className="pt-20">
        {/* Header */}
        <section className="section-padding bg-gradient-primary">
          <div className="container-custom text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Blog & Insights
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Discover valuable insights, expert perspectives, and inspiring stories from our community of professionals.
            </p>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 bg-surface">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search articles, topics, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <section className="section-padding">
          <div className="container-custom">
            {/* Featured Post */}
            {featuredPost && selectedCategory === 'all' && !searchTerm && (
              <div className="mb-16">
                <h2 className="text-2xl font-bold text-foreground mb-8">Featured Article</h2>
                <BlogCard post={featuredPost} isFeatured />
              </div>
            )}

            {/* Regular Posts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {regularPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  No articles found matching your criteria.
                </p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}

            {/* Load More */}
            {filteredPosts.length > 0 && (
              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  Load More Articles
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="section-padding bg-surface">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest articles, insights, and updates directly in your inbox.
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

export default Blogs;