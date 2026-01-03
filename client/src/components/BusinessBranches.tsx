import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Music, Users, Mic2, Award, ArrowRight } from 'lucide-react';

interface Branch {
  id: string;
  name: string;
  description: string;
  icon: typeof Music;
  color: string;
}

const branches: Branch[] = [
  {
    id: 'mea-muziq',
    name: 'Mea Muziq Productions',
    description: 'The creative hub behind all artistic endeavors. Full-service music production, event curation, and artist management.',
    icon: Music,
    color: 'text-primary',
  },
  {
    id: 'muziq-fix',
    name: 'The Muziq Fix Artist Academy',
    description: 'Transform your voice and stage presence. Expert vocal coaching and performance development for aspiring artists.',
    icon: Mic2,
    color: 'text-primary',
  },
  {
    id: 'band',
    name: 'TOMEA & \'Nem Band',
    description: 'A powerhouse collective of world-class musicians delivering unforgettable live performances across genres.',
    icon: Users,
    color: 'text-primary',
  },
  {
    id: 'perform',
    name: 'The P.E.R.F.O.R.M. Muziq Program',
    description: 'A comprehensive curriculum designed to develop complete performers — from technique to stage presence to artistry.',
    icon: Award,
    color: 'text-primary',
  },
];

export default function BusinessBranches() {
  return (
    <section className="py-24 bg-black" data-testid="section-branches">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4">
            The Ecosystem
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">
            Mea Muziq <span className="italic text-primary">Productions</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A multi-faceted creative empire dedicated to elevating artists and delivering 
            extraordinary musical experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {branches.map((branch) => {
            const Icon = branch.icon;
            return (
              <Card
                key={branch.id}
                className="p-8 hover-elevate group"
                data-testid={`card-branch-${branch.id}`}
              >
                <div className={`w-14 h-14 rounded-full bg-muted flex items-center justify-center mb-6 ${branch.color}`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-2xl text-foreground mb-3">{branch.name}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{branch.description}</p>
                <Button
                  variant="ghost"
                  className="p-0 h-auto text-primary group-hover:translate-x-1 transition-transform"
                  onClick={() => console.log('Learn more about', branch.name)}
                  data-testid={`button-learn-${branch.id}`}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
