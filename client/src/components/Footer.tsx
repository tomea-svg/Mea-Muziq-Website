import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SiInstagram, SiFacebook, SiYoutube, SiSpotify, SiTiktok } from 'react-icons/si';

const socialLinks = [
  { icon: SiInstagram, href: '#', label: 'Instagram' },
  { icon: SiFacebook, href: '#', label: 'Facebook' },
  { icon: SiYoutube, href: '#', label: 'YouTube' },
  { icon: SiSpotify, href: '#', label: 'Spotify' },
  { icon: SiTiktok, href: '#', label: 'TikTok' },
];

const footerLinks = [
  { label: 'Booking', href: '#booking' },
  { label: 'Tour Dates', href: '#tour' },
  { label: 'Artist Coaching', href: '#about' },
  { label: 'Merch', href: '#merch' },
  { label: 'Videos', href: '#videos' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-16 bg-card border-t border-border" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <a
              href="#"
              className="font-serif text-2xl tracking-wider text-foreground inline-block mb-4 hover:text-primary active:text-primary transition-colors cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Mea Muziq <span className="text-primary italic">Productions</span>
            </a>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Powerful yet warm. Artistic yet structured. A soulful, elevated 
              experience that transforms moments into memories.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={social.label}
                    size="icon"
                    variant="outline"
                    className="rounded-full"
                    onClick={() => window.open(social.href, '_blank')}
                    data-testid={`button-social-${social.label.toLowerCase()}`}
                  >
                    <Icon className="w-4 h-4" />
                  </Button>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-muted-foreground hover:text-primary active:text-primary transition-colors text-sm"
                    data-testid={`link-footer-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg text-foreground mb-4">Newsletter</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Stay updated on upcoming shows, new releases, and exclusive content.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="your@email.com"
                className="bg-muted border-border text-sm"
                data-testid="input-newsletter"
              />
              <Button
                size="sm"
                className="rounded-full bg-primary text-primary-foreground px-4"
                onClick={() => console.log('Newsletter signup')}
                data-testid="button-newsletter-submit"
              >
                Join
              </Button>
            </div>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            {new Date().getFullYear()} Mea Muziq Productions. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Privacy Policy
            </button>
            <button className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
