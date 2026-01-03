import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'Booking', href: '#booking' },
  { label: 'Tour', href: '#tour' },
  { label: 'Artist Coaching', href: '#about' },
  { label: 'Merch', href: '#merch' },
  { label: 'Videos', href: '#videos' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/90 backdrop-blur-md border-b border-border'
            : 'bg-transparent'
        }`}
        data-testid="nav-header"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between gap-4">
            <a
              href="#"
              className="font-serif text-2xl tracking-wider text-foreground hover:text-primary active:text-primary transition-colors cursor-pointer"
              data-testid="link-logo"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Mea Muziq <span className="text-primary italic">Productions</span>
            </a>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm tracking-widest uppercase text-muted-foreground hover:text-primary active:text-primary transition-colors"
                  data-testid={`link-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <Button
              size="icon"
              variant="ghost"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/98 backdrop-blur-lg flex flex-col items-center justify-center gap-8"
          data-testid="mobile-menu-overlay"
        >
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="font-serif text-3xl tracking-widest text-foreground hover:text-primary active:text-primary transition-colors"
              data-testid={`link-mobile-${link.label.toLowerCase()}`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
