import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import heroImage from '@assets/1000018146_a62d5b0ab281c9802dfad7724865b13a-9_25_2025,_12_36_3_1765394189794.png';
import { siteConfig } from '@/lib/config';

export default function HeroSection() {
  const goToBooking = () => {
    window.open(siteConfig.bookingUrl, '_blank');
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      <div className="absolute inset-0 bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <p className="text-primary tracking-[0.3em] uppercase text-sm mb-6 font-sans">
          Vocalist | Creative Coach | Artist
        </p>
        
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight">
          Experience the{' '}
          <span className="italic text-primary">Artistry</span>
        </h1>
        
        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-sans leading-relaxed">
          Powerful yet warm. Artistic yet structured. A soulful, elevated experience 
          that moves hearts and creates unforgettable moments.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            onClick={goToBooking}
            className="bg-primary text-primary-foreground rounded-full px-8 tracking-widest uppercase text-sm"
            data-testid="button-hero-book"
          >
            Book Tomea
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => document.querySelector('#videos')?.scrollIntoView({ behavior: 'smooth' })}
            className="rounded-full px-8 tracking-widest uppercase text-sm border-white/30 text-white bg-white/10 backdrop-blur-sm"
            data-testid="button-hero-watch"
          >
            Watch Performances
          </Button>
        </div>
      </div>

      <button
        onClick={() => document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        data-testid="button-scroll-down"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
}
