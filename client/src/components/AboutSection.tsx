import { Button } from '@/components/ui/button';
import headshot from '@assets/CS_TOMEA-02248_websize_1766375082255.jpg';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white" data-testid="section-about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-md blur-2xl" />
            <div className="relative">
              <img
                src={headshot}
                alt="Tomea - Vocalist and Creative Coach"
                className="w-full max-w-md mx-auto rounded-md"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4">
              Meet the Artist
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-black mb-6 leading-tight">
              About <span className="italic text-primary">Tomea</span>
            </h2>
            
            <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
              <p>
                Tomea is more than a vocalist — she's a storyteller, a healer, and 
                a curator of moments that move people. With a voice that bridges 
                soul, jazz, and gospel, she transforms every performance into an 
                intimate experience that resonates long after the last note fades.
              </p>
              <p>
                As the founder of <span className="text-black">Mea Muziq Productions</span>, 
                Tomea has built an ecosystem dedicated to elevating artists and 
                delivering extraordinary musical experiences. Her work spans live 
                performances, vocal coaching, artist development, and curated events.
              </p>
              <p>
                Through <span className="text-black">The Muziq Fix Artist Academy</span> and 
                <span className="text-black"> The P.E.R.F.O.R.M. Muziq Program</span>, 
                she mentors the next generation of performers, sharing her expertise 
                in vocal technique, stage presence, and artistic authenticity.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="rounded-full bg-primary text-primary-foreground tracking-widest uppercase text-sm"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                data-testid="button-about-connect"
              >
                Connect with Tomea
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full tracking-widest uppercase text-sm text-black border-black"
                onClick={() => document.querySelector('#videos')?.scrollIntoView({ behavior: 'smooth' })}
                data-testid="button-about-watch"
              >
                Watch Performances
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
