import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Events', href: '/events' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 text-xl md:text-2xl font-bold"
          >
            <div className="bg-gradient-primary rounded-lg p-2">
              <Users className="h-6 w-6 text-white" />
            </div>
            <span className={cn(
              'transition-colors duration-300',
              isScrolled ? 'text-foreground' : 'text-white'
            )}>
              Connect & Grow
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  'nav-link text-sm font-medium transition-colors duration-300',
                  isActive(item.href)
                    ? isScrolled
                      ? 'text-primary active'
                      : 'text-white active'
                    : isScrolled
                    ? 'text-foreground hover:text-primary'
                    : 'text-white/90 hover:text-white'
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button
              variant="default"
              size="sm"
              className={cn(
                'transition-all duration-300',
                isScrolled
                  ? 'bg-primary hover:bg-primary-hover'
                  : 'btn-hero'
              )}
            >
              Join Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              'md:hidden p-2 rounded-md transition-colors duration-300',
              isScrolled ? 'text-foreground' : 'text-white'
            )}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t">
          <div className="container-custom py-4">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'px-3 py-2 text-base font-medium rounded-md transition-colors duration-300',
                    isActive(item.href)
                      ? 'text-primary bg-primary-light'
                      : 'text-foreground hover:text-primary hover:bg-muted'
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                variant="default"
                size="sm"
                className="w-full mt-4"
                onClick={() => setIsOpen(false)}
              >
                Join Us
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;