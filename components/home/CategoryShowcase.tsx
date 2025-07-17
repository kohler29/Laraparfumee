'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const categories = [
  {
    id: 'floral',
    name: 'Floral',
    description: 'Romantic and feminine fragrances',
    image: 'https://images.pexels.com/photos/1190829/pexels-photo-1190829.jpeg?auto=compress&cs=tinysrgb&w=600',
    productCount: 24
  },
  {
    id: 'fresh',
    name: 'Fresh',
    description: 'Light and energizing scents',
    image: 'https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=600',
    productCount: 18
  },
  {
    id: 'oriental',
    name: 'Oriental',
    description: 'Rich and exotic fragrances',
    image: 'https://images.pexels.com/photos/1961795/pexels-photo-1961795.jpeg?auto=compress&cs=tinysrgb&w=600',
    productCount: 16
  },
  {
    id: 'woody',
    name: 'Woody',
    description: 'Warm and sophisticated scents',
    image: 'https://images.pexels.com/photos/1190829/pexels-photo-1190829.jpeg?auto=compress&cs=tinysrgb&w=600',
    productCount: 22
  }
];

export function CategoryShowcase() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 luxury-text">
            Shop by Category
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Find your perfect scent from our carefully curated fragrance categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Card key={category.id} className="group hover-lift luxury-card overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                      <p className="text-sm mb-1">{category.description}</p>
                      <span className="text-xs opacity-80">{category.productCount} products</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <Link href={`/categories/${category.id}`}>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      Explore {category.name}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}