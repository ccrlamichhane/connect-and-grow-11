import React, { useState } from 'react';
import { Play, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Layout from '@/components/Layout';

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState<any>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const categories = [
    { id: 'all', name: 'All Media' },
    { id: 'events', name: 'Events' },
    { id: 'workshops', name: 'Workshops' },
    { id: 'community', name: 'Community' },
    { id: 'awards', name: 'Awards' },
  ];

  // Mock gallery data - in a real app, this would come from an API
  const galleryItems = [
    {
      id: 1,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop',
      title: 'Annual Networking Gala',
      category: 'events',
      date: '2024-01-20',
    },
    {
      id: 2,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop',
      title: 'Leadership Workshop',
      category: 'workshops',
      date: '2024-01-15',
    },
    {
      id: 3,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=300&fit=crop',
      title: 'Community Service Day',
      category: 'community',
      date: '2024-01-10',
    },
    {
      id: 4,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
      title: 'Tech Innovation Conference',
      category: 'events',
      date: '2024-01-05',
    },
    {
      id: 5,
      type: 'video',
      src: '#',
      thumbnail: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop',
      title: 'Excellence Awards Ceremony',
      category: 'awards',
      date: '2023-12-15',
      duration: '3:45',
    },
    {
      id: 6,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop',
      title: 'Team Building Workshop',
      category: 'workshops',
      date: '2023-12-10',
    },
    {
      id: 7,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop',
      title: 'Volunteer Appreciation Event',
      category: 'community',
      date: '2023-12-05',
    },
    {
      id: 8,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=300&fit=crop',
      title: 'Professional Development Summit',
      category: 'events',
      date: '2023-11-28',
    },
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = galleryItems.filter(item => 
    activeCategory === 'all' || item.category === activeCategory
  );

  const openLightbox = (item: any, index: number) => {
    setSelectedMedia(item);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setSelectedMedia(null);
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    const currentIndex = filteredItems.findIndex(item => item.id === selectedMedia.id);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredItems.length - 1;
    } else {
      newIndex = currentIndex < filteredItems.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedMedia(filteredItems[newIndex]);
    setLightboxIndex(newIndex);
  };

  return (
    <Layout>
      <div className="pt-20">
        {/* Header */}
        <section className="section-padding bg-gradient-primary">
          <div className="container-custom text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Photo & Video Gallery
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Explore our vibrant community through photos and videos from our events, workshops, and initiatives.
            </p>
          </div>
        </section>

        {/* Gallery Content */}
        <section className="section-padding">
          <div className="container-custom">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  onClick={() => setActiveCategory(category.id)}
                  className="px-6"
                >
                  {category.name}
                </Button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  className="group relative aspect-[4/3] rounded-lg overflow-hidden bg-muted cursor-pointer"
                  onClick={() => openLightbox(item, index)}
                >
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    {item.type === 'video' ? (
                      <div className="text-center text-white">
                        <Play className="h-12 w-12 mx-auto mb-2" />
                        <p className="text-sm font-medium">{item.duration}</p>
                      </div>
                    ) : (
                      <div className="text-white text-center">
                        <p className="text-lg font-medium">View Image</p>
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h3 className="text-white font-medium text-sm mb-1">{item.title}</h3>
                    <p className="text-white/80 text-xs">
                      {new Date(item.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {filteredItems.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  No media found in this category.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Lightbox */}
        {selectedMedia && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Navigation buttons */}
              <button
                onClick={() => navigateLightbox('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={() => navigateLightbox('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Media content */}
              {selectedMedia.type === 'video' ? (
                <div className="bg-black rounded-lg overflow-hidden">
                  <div className="aspect-video flex items-center justify-center text-white">
                    <div className="text-center">
                      <Play className="h-16 w-16 mx-auto mb-4" />
                      <p className="text-lg">Video Player Placeholder</p>
                      <p className="text-sm text-white/70">Duration: {selectedMedia.duration}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <img
                  src={selectedMedia.src}
                  alt={selectedMedia.title}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              )}

              {/* Media info */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 rounded-lg p-4 text-white">
                <h3 className="text-lg font-medium mb-1">{selectedMedia.title}</h3>
                <p className="text-white/80 text-sm">
                  {new Date(selectedMedia.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Gallery;