import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Users, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import type { Language } from '@/contexts/LanguageContext';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.events'), href: '/events' },
    { name: t('nav.gallery'), href: '/gallery' },
    { name: t('nav.blogs'), href: '/blogs' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'np', name: 'नेपाली', flag: '🇳🇵' },
    { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
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
        isScrolled || location.pathname !== '/'
          ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50'
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
              isScrolled || location.pathname !== '/' ? 'text-foreground' : 'text-white'
            )}>
              🕉️ {t('hero.title')}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  'nav-link text-sm font-medium transition-colors duration-300',
                  isActive(item.href)
                    ? isScrolled || location.pathname !== '/'
                      ? 'text-primary active'
                      : 'text-white active'
                    : isScrolled || location.pathname !== '/'
                    ? 'text-foreground hover:text-primary'
                    : 'text-white/90 hover:text-white'
                )}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className={cn(
                  'flex items-center space-x-1 px-3 py-2 rounded-md transition-colors duration-300',
                  isScrolled || location.pathname !== '/'
                    ? 'text-foreground hover:text-primary hover:bg-muted'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                )}
              >
                <Globe className="h-4 w-4" />
                <span className="text-sm font-medium">
                  {languages.find(lang => lang.code === language)?.flag}
                </span>
              </button>
              
              {isLangDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-background border border-border rounded-md shadow-lg z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsLangDropdownOpen(false);
                      }}
                      className={cn(
                        'w-full text-left px-4 py-2 text-sm hover:bg-muted transition-colors',
                        'flex items-center space-x-2',
                        language === lang.code ? 'bg-primary/10 text-primary' : 'text-foreground'
                      )}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Button
              variant="default"
              size="sm"
              className={cn(
                'transition-all duration-300',
                isScrolled || location.pathname !== '/'
                  ? 'bg-primary hover:bg-primary-hover'
                  : 'btn-hero'
              )}
            >
              {t('nav.joinUs')}
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              'md:hidden p-2 rounded-md transition-colors duration-300',
              isScrolled || location.pathname !== '/' ? 'text-foreground' : 'text-white'
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
              
              {/* Mobile Language Selector */}
              <div className="mt-4 pt-4 border-t border-border/50">
                <p className="text-sm font-medium text-muted-foreground mb-2">Language</p>
                <div className="grid grid-cols-3 gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsOpen(false);
                      }}
                      className={cn(
                        'flex items-center justify-center space-x-1 px-3 py-2 rounded-md text-xs',
                        'transition-colors duration-300',
                        language === lang.code 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-muted text-foreground hover:bg-muted/80'
                      )}
                    >
                      <span>{lang.flag}</span>
                      <span className="hidden sm:inline">{lang.name.split(' ')[0]}</span>
                    </button>
                  ))}
                </div>
              </div>

              <Button
                variant="default"
                size="sm"
                className="w-full mt-4"
                onClick={() => setIsOpen(false)}
              >
                {t('nav.joinUs')}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;