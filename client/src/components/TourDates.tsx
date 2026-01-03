import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Calendar, MapPin, Ticket, ExternalLink } from 'lucide-react';

interface TourEvent {
  id: string;
  date: string;
  dayOfWeek: string;
  venue: string;
  city: string;
  ticketUrl: string;
}

// todo: remove mock functionality - replace with Bandsintown API data
const mockEvents: TourEvent[] = [
  {
    id: '1',
    date: 'Jan 15, 2025',
    dayOfWeek: 'Wed',
    venue: 'The Fillmore',
    city: 'San Francisco, CA',
    ticketUrl: '#',
  },
  {
    id: '2',
    date: 'Jan 22, 2025',
    dayOfWeek: 'Wed',
    venue: 'Blue Note Jazz Club',
    city: 'New York, NY',
    ticketUrl: '#',
  },
  {
    id: '3',
    date: 'Feb 8, 2025',
    dayOfWeek: 'Sat',
    venue: 'The Roxy Theatre',
    city: 'Los Angeles, CA',
    ticketUrl: '#',
  },
  {
    id: '4',
    date: 'Feb 14, 2025',
    dayOfWeek: 'Fri',
    venue: 'House of Blues',
    city: 'Chicago, IL',
    ticketUrl: '#',
  },
];

export default function TourDates() {
  return (
    <section id="tour" className="py-24 bg-white" data-testid="section-tour">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4">
            Live Performances
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-black mb-4">
            Upcoming <span className="italic text-primary">Shows</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the magic live. Follow on Bandsintown to never miss a show.
          </p>
        </div>

        <div className="space-y-4 mb-12">
          {mockEvents.map((event) => (
            <Card
              key={event.id}
              className="p-6 hover-elevate bg-white border border-gray-200"
              data-testid={`card-event-${event.id}`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-6">
                  <div className="text-center min-w-[80px]">
                    <p className="text-xs uppercase tracking-widest text-gray-500">
                      {event.dayOfWeek}
                    </p>
                    <p className="font-serif text-xl text-black">{event.date.split(',')[0].split(' ')[1]}</p>
                    <p className="text-xs text-gray-500">{event.date.split(',')[0].split(' ')[0]}</p>
                  </div>
                  
                  <div className="h-12 w-px bg-gray-200" />
                  
                  <div>
                    <h3 className="font-serif text-lg text-black mb-1">{event.venue}</h3>
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>{event.city}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 md:ml-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full text-black border-gray-300"
                    onClick={() => console.log('RSVP clicked for', event.venue)}
                    data-testid={`button-rsvp-${event.id}`}
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    RSVP
                  </Button>
                  <Button
                    size="sm"
                    className="rounded-full bg-primary text-primary-foreground"
                    onClick={() => window.open(event.ticketUrl, '_blank')}
                    data-testid={`button-tickets-${event.id}`}
                  >
                    <Ticket className="w-4 h-4 mr-2" />
                    Get Tickets
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="rounded-full tracking-widest uppercase text-sm text-black border-black"
            onClick={() => window.open('https://bandsintown.com', '_blank')}
            data-testid="button-bandsintown"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Follow on Bandsintown
          </Button>
        </div>
      </div>
    </section>
  );
}
