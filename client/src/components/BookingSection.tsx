import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import headshot from '@assets/997bfc71-3e4b-4236-9bc3-089896e26a1e_1766604492060.png';
import { siteConfig } from '@/lib/config';

const eventTypes = [
  'Corporate Events & Galas',
  'Luxury Weddings',
  'Private Showcases',
  'Festival Performances',
  'Brand Activations',
  'Curated Artistic Experiences',
];

export default function BookingSection() {
  const goToBooking = () => {
    window.open(siteConfig.bookingUrl, '_blank');
  };

  return (
    <section id="booking" className="py-24 bg-black" data-testid="section-booking">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4">
              Elevate Your Event
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              Book <span className="italic text-primary">Tomea</span>
            </h2>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              More than a performance — an experience. Tomea brings powerful 
              storytelling, soul-stirring vocals, and an undeniable stage presence 
              that transforms any event into an unforgettable moment. Every note 
              is intentional. Every emotion is felt.
            </p>

            <div className="mb-10">
              <p className="text-sm uppercase tracking-widest text-white mb-4">
                Perfect For:
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {eventTypes.map((event) => (
                  <div key={event} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-gray-400 text-sm">{event}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button
              size="lg"
              onClick={goToBooking}
              className="bg-primary text-primary-foreground rounded-full px-10 tracking-widest uppercase text-sm"
              data-testid="button-booking-cta"
            >
              Book Now
            </Button>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-deep-red/10 rounded-md blur-2xl" />
            <div className="relative aspect-[3/4] overflow-hidden rounded-md">
              <img
                src={headshot}
                alt="Tomea performing"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
