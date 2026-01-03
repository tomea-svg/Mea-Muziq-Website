import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ShoppingBag, ExternalLink } from 'lucide-react';

interface MerchItem {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

// todo: remove mock functionality - replace with Printful API data
const mockMerch: MerchItem[] = [
  {
    id: '1',
    name: 'TOMEA & \'Nem Logo Tee',
    price: 35.00,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop',
    category: 'Apparel',
  },
  {
    id: '2',
    name: 'Gold Signature Hoodie',
    price: 65.00,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop',
    category: 'Apparel',
  },
  {
    id: '3',
    name: 'Mea Muziq Cap',
    price: 28.00,
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=500&fit=crop',
    category: 'Accessories',
  },
  {
    id: '4',
    name: 'Artist Edition Tote',
    price: 25.00,
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=400&h=500&fit=crop',
    category: 'Accessories',
  },
  {
    id: '5',
    name: 'P.E.R.F.O.R.M. Sweatshirt',
    price: 55.00,
    image: 'https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?w=400&h=500&fit=crop',
    category: 'Apparel',
  },
  {
    id: '6',
    name: 'Vocal Coach Journal',
    price: 22.00,
    image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=400&h=500&fit=crop',
    category: 'Accessories',
  },
];

const categories = ['All', 'Apparel', 'Accessories'];

export default function MerchGallery() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredMerch = activeCategory === 'All'
    ? mockMerch
    : mockMerch.filter((item) => item.category === activeCategory);

  return (
    <section id="merch" className="py-24 bg-white" data-testid="section-merch">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4">
            Official Merchandise
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-black mb-4">
            Shop <span className="italic text-primary">Merch</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Premium artist-inspired apparel and accessories from the TOMEA & 'Nem collection.
          </p>

          <div className="flex items-center justify-center gap-2 flex-wrap">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'outline'}
                size="sm"
                className="rounded-full"
                onClick={() => setActiveCategory(category)}
                data-testid={`button-category-${category.toLowerCase()}`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMerch.map((item) => (
            <Card
              key={item.id}
              className="group overflow-visible hover-elevate"
              data-testid={`card-merch-${item.id}`}
            >
              <div className="aspect-[4/5] overflow-hidden rounded-t-md">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="font-serif text-lg text-foreground mb-1">{item.name}</h3>
                <div className="flex items-center justify-between gap-4">
                  <p className="text-primary font-semibold">${item.price.toFixed(2)}</p>
                  <Button
                    size="sm"
                    variant="outline"
                    className="rounded-full"
                    onClick={() => console.log('View product', item.name)}
                    data-testid={`button-view-${item.id}`}
                  >
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    View
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="rounded-full bg-primary text-primary-foreground tracking-widest uppercase text-sm"
            onClick={() => window.open('https://printful.com', '_blank')}
            data-testid="button-shop-all"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Visit Full Store
          </Button>
        </div>
      </div>
    </section>
  );
}
