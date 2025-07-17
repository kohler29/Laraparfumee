'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useCart } from '@/context/CartContext';
import { Heart, ShoppingCart, Star, Search, Filter } from 'lucide-react';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'framer-motion';

const products = [
  {
    id: '1',
    name: 'Midnight Rose',
    price: 129.99,
    originalPrice: 149.99,
    image: 'https://images.pexels.com/photos/1190829/pexels-photo-1190829.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.8,
    reviews: 156,
    description: 'A romantic blend of rose and vanilla with hints of bergamot',
    category: 'Floral',
    isNew: true,
    isSale: true
  },
  {
    id: '2',
    name: 'Ocean Breeze',
    price: 89.99,
    image: 'https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.6,
    reviews: 89,
    description: 'Fresh aquatic scent with marine notes and citrus',
    category: 'Fresh',
    isNew: false,
    isSale: false
  },
  {
    id: '3',
    name: 'Golden Amber',
    price: 159.99,
    image: 'https://images.pexels.com/photos/1961795/pexels-photo-1961795.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.9,
    reviews: 203,
    description: 'Warm and sophisticated with amber and sandalwood',
    category: 'Oriental',
    isNew: true,
    isSale: false
  },
  {
    id: '4',
    name: 'Lavender Dreams',
    price: 79.99,
    image: 'https://images.pexels.com/photos/1190829/pexels-photo-1190829.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.7,
    reviews: 134,
    description: 'Calming lavender with soft musk undertones',
    category: 'Floral',
    isNew: false,
    isSale: false
  },
  {
    id: '5',
    name: 'Vanilla Orchid',
    price: 119.99,
    image: 'https://images.pexels.com/photos/1190829/pexels-photo-1190829.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.5,
    reviews: 78,
    description: 'Exotic vanilla with delicate orchid notes',
    category: 'Floral',
    isNew: false,
    isSale: false
  },
  {
    id: '6',
    name: 'Citrus Burst',
    price: 89.99,
    image: 'https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.4,
    reviews: 92,
    description: 'Energizing citrus blend with grapefruit and lime',
    category: 'Fresh',
    isNew: false,
    isSale: false
  },
  {
    id: '7',
    name: 'Spiced Cedar',
    price: 139.99,
    image: 'https://images.pexels.com/photos/1961795/pexels-photo-1961795.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.6,
    reviews: 145,
    description: 'Rich cedar with warming spices and hints of leather',
    category: 'Woody',
    isNew: false,
    isSale: false
  },
  {
    id: '8',
    name: 'Jasmine Noir',
    price: 149.99,
    image: 'https://images.pexels.com/photos/1190829/pexels-photo-1190829.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.8,
    reviews: 167,
    description: 'Mysterious jasmine with dark chocolate undertones',
    category: 'Oriental',
    isNew: true,
    isSale: false
  }
];

export default function ProductsPage() {
  const { addItem } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [wishlist, setWishlist] = useState<string[]>([]);

  const categories = ['all', 'floral', 'fresh', 'oriental', 'woody'];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
                           product.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: '50ml'
    });
    toast.success(`${product.name} added to cart!`);
  };

  const toggleWishlist = (productId: string) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20 mb-8 rounded-lg"
        >
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl font-bold mb-6"
            >
              Luxury Fragrances
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl mb-8 max-w-2xl mx-auto"
            >
              Discover our exquisite collection of premium perfumes and find your signature scent
            </motion.p>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-lg shadow-sm border p-6 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" className="w-full">
              <Filter className="w-4 h-4 mr-2" />
              More Filters
            </Button>
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8"
        >
          <AnimatePresence>
            {sortedProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -50, scale: 0.9 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ y: -10 }}
                layout
              >
                <Card className="group hover-lift luxury-card h-full">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-xl">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={300}
                          height={300}
                          className="w-full h-48 md:h-64 object-cover"
                        />
                      </motion.div>
                      <div className="absolute top-4 left-4 flex flex-col gap-2">
                        {product.isNew && (
                          <Badge className="bg-green-500 text-white">New</Badge>
                        )}
                        {product.isSale && (
                          <Badge className="bg-red-500 text-white">Sale</Badge>
                        )}
                      </div>
                      <motion.button
                        onClick={() => toggleWishlist(product.id)}
                        className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <motion.div
                          animate={{ 
                            scale: wishlist.includes(product.id) ? [1, 1.2, 1] : 1,
                            rotate: wishlist.includes(product.id) ? [0, 10, -10, 0] : 0
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <Heart 
                            className={`w-5 h-5 ${wishlist.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
                          />
                        </motion.div>
                      </motion.button>
                    </div>
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="p-3 md:p-6"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {product.category}
                        </Badge>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm text-gray-600">{product.rating}</span>
                          <span className="text-sm text-gray-400">({product.reviews})</span>
                        </div>
                      </div>
                      
                      <h3 className="text-lg md:text-xl font-semibold mb-2">{product.name}</h3>
                      <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4 line-clamp-2">{product.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-xl md:text-2xl font-bold text-purple-600">
                            ${product.price}
                          </span>
                          {product.originalPrice && (
                            <span className="text-sm md:text-lg text-gray-400 line-through">
                              ${product.originalPrice}
                            </span>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </CardContent>
              
                  <CardFooter className="p-3 md:p-6 pt-0">
                    <div className="flex gap-2 w-full">
                      <motion.div 
                        className="flex-1"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          onClick={() => handleAddToCart(product)}
                          className="w-full bg-purple-600 hover:bg-purple-700 text-xs md:text-sm h-8 md:h-10"
                        >
                          <motion.div
                            whileHover={{ x: 2 }}
                            className="flex items-center"
                          >
                            <ShoppingCart className="w-3 md:w-4 h-3 md:h-4 mr-1 md:mr-2" />
                            <span className="hidden sm:inline">Add to Cart</span>
                            <span className="sm:hidden">Add</span>
                          </motion.div>
                        </Button>
                      </motion.div>
                      <Link href={`/products/${product.id}`}>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button variant="outline" className="px-2 md:px-4 text-xs md:text-sm h-8 md:h-10">
                            View
                          </Button>
                        </motion.div>
                      </Link>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {sortedProducts.length === 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center py-12"
            >
              <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <Footer />
    </div>
  );
}