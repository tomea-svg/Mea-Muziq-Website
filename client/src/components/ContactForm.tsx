import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Send, Mail, MapPin, Clock } from 'lucide-react';

const eventTypes = [
  'Corporate Event',
  'Wedding',
  'Gala',
  'Private Showcase',
  'Festival',
  'Brand Activation',
  'Other',
];

export default function ContactForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventType: '',
    eventDate: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // todo: remove mock functionality - connect to backend API
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: 'Message Sent',
      description: 'Thank you for reaching out. We\'ll be in touch soon!',
    });
    
    setFormData({
      name: '',
      email: '',
      eventType: '',
      eventDate: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 bg-black" data-testid="section-contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4">
              Get in Touch
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight">
              Book <span className="italic text-primary">Your Event</span>
            </h2>
            
            <p className="text-gray-400 leading-relaxed mb-10">
              Ready to create an unforgettable experience? Fill out the form and 
              let's discuss how Tomea can elevate your event with soul-stirring 
              performances and artistic excellence.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-white">management@tomeanem.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Based In</p>
                  <p className="text-white">Dallas, Texas</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Response Time</p>
                  <p className="text-white">Within 24-48 hours</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="p-8" data-testid="card-contact-form">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="text-sm text-muted-foreground mb-2 block">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-muted border-border focus:border-primary"
                    data-testid="input-name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm text-muted-foreground mb-2 block">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-muted border-border focus:border-primary"
                    data-testid="input-email"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    Event Type
                  </label>
                  <Select
                    value={formData.eventType}
                    onValueChange={(value) => setFormData({ ...formData, eventType: value })}
                  >
                    <SelectTrigger className="bg-muted border-border" data-testid="select-event-type">
                      <SelectValue placeholder="Select event type" />
                    </SelectTrigger>
                    <SelectContent>
                      {eventTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label htmlFor="eventDate" className="text-sm text-muted-foreground mb-2 block">
                    Preferred Date
                  </label>
                  <Input
                    id="eventDate"
                    type="date"
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="bg-muted border-border focus:border-primary"
                    data-testid="input-date"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="text-sm text-muted-foreground mb-2 block">
                  Tell Us About Your Event
                </label>
                <Textarea
                  id="message"
                  placeholder="Share details about your event, vision, and what you're looking for..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  required
                  className="bg-muted border-border focus:border-primary resize-none"
                  data-testid="textarea-message"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full rounded-full bg-primary text-primary-foreground tracking-widest uppercase text-sm"
                disabled={isSubmitting}
                data-testid="button-submit"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Inquiry
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
