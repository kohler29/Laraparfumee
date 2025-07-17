'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight, Sparkles } from 'lucide-react';

/**
 * Data kategori parfum dengan informasi lengkap
 */
const categories = [
  {
    id: 'floral',
    name: 'Floral',
    description: 'Aroma bunga yang segar dan feminin',
    image: '/images/categories/floral.jpg',
    productCount: 24,
    color: 'from-pink-400 to-rose-500',
    featured: true
  },
  {
    id: 'woody',
    name: 'Woody',
    description: 'Kehangatan kayu yang elegan dan maskulin',
    image: '/images/categories/woody.jpg',
    productCount: 18,
    color: 'from-amber-400 to-orange-500',
    featured: true
  },
  {
    id: 'citrus',
    name: 'Citrus',
    description: 'Kesegaran jeruk yang menyegarkan',
    image: '/images/categories/citrus.jpg',
    productCount: 15,
    color: 'from-yellow-400 to-orange-400',
    featured: false
  },
  {
    id: 'oriental',
    name: 'Oriental',
    description: 'Kemewahan rempah dan amber yang eksotis',
    image: '/images/categories/oriental.jpg',
    productCount: 21,
    color: 'from-purple-500 to-indigo-600',
    featured: true
  },
  {
    id: 'fresh',
    name: 'Fresh',
    description: 'Kesegaran alami yang menenangkan',
    image: '/images/categories/fresh.jpg',
    productCount: 12,
    color: 'from-green-400 to-blue-500',
    featured: false
  },
  {
    id: 'gourmand',
    name: 'Gourmand',
    description: 'Aroma manis seperti makanan penutup',
    image: '/images/categories/gourmand.jpg',
    productCount: 9,
    color: 'from-red-400 to-pink-500',
    featured: false
  },
  {
    id: 'aquatic',
    name: 'Aquatic',
    description: 'Kesegaran laut yang menyegarkan',
    image: '/images/categories/aquatic.jpg',
    productCount: 8,
    color: 'from-blue-400 to-cyan-500',
    featured: false
  },
  {
    id: 'spicy',
    name: 'Spicy',
    description: 'Kehangatan rempah yang menggoda',
    image: '/images/categories/spicy.jpg',
    productCount: 14,
    color: 'from-red-500 to-orange-600',
    featured: false
  }
];

/**
 * Komponen halaman kategori parfum
 * Menampilkan semua kategori dengan fitur pencarian dan filter
 */
export default function CategoriesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);

  /**
   * Filter kategori berdasarkan pencarian dan status featured
   */
  const filteredCategories = categories.filter(category => {
    const matchesSearch = category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         category.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFeatured = !showFeaturedOnly || category.featured;
    return matchesSearch && matchesFeatured;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Jelajahi Koleksi Kami
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold mb-6 luxury-text"
          >
            Kategori Parfum
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Temukan aroma yang sempurna untuk setiap momen dan kepribadian Anda. 
            Dari kesegaran floral hingga kehangatan woody, kami memiliki koleksi lengkap untuk Anda.
          </motion.p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col md:flex-row gap-4 mb-12 max-w-2xl mx-auto"
        >
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Cari kategori parfum..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 text-lg"
            />
          </div>
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              variant={showFeaturedOnly ? "default" : "outline"}
              onClick={() => setShowFeaturedOnly(!showFeaturedOnly)}
              className="h-12 px-6"
            >
              {showFeaturedOnly ? 'Semua Kategori' : 'Kategori Unggulan'}
            </Button>
          </motion.div>
        </motion.div>

        {/* Categories Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence>
            {filteredCategories.map((category, index) => (
              <motion.div
                key={category.id}
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
                <Link href={`/products?category=${category.id}`}>
                  <Card className="group hover-lift luxury-card h-full cursor-pointer overflow-hidden">
                    <CardContent className="p-0">
                      {/* Category Image */}
                      <div className="relative overflow-hidden">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.4 }}
                          className={`h-48 bg-gradient-to-br ${category.color} relative`}
                        >
                          {/* Placeholder untuk gambar kategori */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-white text-6xl font-bold opacity-20">
                              {category.name.charAt(0)}
                            </div>
                          </div>
                          
                          {/* Overlay gradient */}
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                          
                          {/* Featured badge */}
                          {category.featured && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              className="absolute top-4 left-4"
                            >
                              <Badge className="bg-yellow-500 text-white border-0">
                                <Sparkles className="w-3 h-3 mr-1" />
                                Unggulan
                              </Badge>
                            </motion.div>
                          )}
                          
                          {/* Product count */}
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="absolute top-4 right-4"
                          >
                            <Badge variant="secondary" className="bg-white/90 text-gray-800">
                              {category.productCount} produk
                            </Badge>
                          </motion.div>
                        </motion.div>
                      </div>
                      
                      {/* Category Info */}
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="p-6"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-2xl font-bold luxury-text group-hover:text-purple-600 transition-colors">
                            {category.name}
                          </h3>
                          <motion.div
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
                          </motion.div>
                        </div>
                        
                        <p className="text-gray-600 leading-relaxed">
                          {category.description}
                        </p>
                      </motion.div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results */}
        <AnimatePresence>
          {filteredCategories.length === 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center py-16"
            >
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto mb-4" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-600 mb-2">
                Kategori tidak ditemukan
              </h3>
              <p className="text-gray-500 mb-6">
                Coba ubah kata kunci pencarian atau hapus filter
              </p>
              <Button 
                onClick={() => {
                  setSearchQuery('');
                  setShowFeaturedOnly(false);
                }}
                variant="outline"
              >
                Reset Pencarian
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="luxury-gradient p-12 rounded-2xl text-center mt-16"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-3xl font-bold mb-6 text-white"
          >
            Tidak Menemukan Kategori yang Anda Cari?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-8"
          >
            Hubungi tim ahli parfum kami untuk konsultasi personal dan rekomendasi 
            aroma yang sesuai dengan kepribadian dan preferensi Anda.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                  Konsultasi Gratis
                </Button>
              </motion.div>
            </Link>
            
            <Link href="/products">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Lihat Semua Produk
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
}