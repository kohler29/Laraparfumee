'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Search, Filter, Trash2, ShoppingCart, Star, Package } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Image from 'next/image';

// Interface untuk item wishlist
interface WishlistItem {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  category: string;
  addedDate: string;
  description: string;
}

// Data mock untuk wishlist
const mockWishlistItems: WishlistItem[] = [
  {
    id: '1',
    name: 'Chanel No. 5 Eau de Parfum',
    brand: 'Chanel',
    price: 2850000,
    originalPrice: 3200000,
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop',
    rating: 4.8,
    reviewCount: 1250,
    inStock: true,
    category: 'Floral',
    addedDate: '2024-01-15',
    description: 'Parfum ikonik dengan aroma floral yang elegan dan timeless'
  },
  {
    id: '2',
    name: 'Dior Sauvage Eau de Toilette',
    brand: 'Dior',
    price: 1950000,
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=400&fit=crop',
    rating: 4.7,
    reviewCount: 890,
    inStock: true,
    category: 'Woody',
    addedDate: '2024-01-10',
    description: 'Aroma maskulin dengan sentuhan segar dan woody'
  },
  {
    id: '3',
    name: 'Tom Ford Black Orchid',
    brand: 'Tom Ford',
    price: 3200000,
    image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?w=400&h=400&fit=crop',
    rating: 4.6,
    reviewCount: 567,
    inStock: false,
    category: 'Oriental',
    addedDate: '2024-01-05',
    description: 'Parfum mewah dengan aroma oriental yang bold dan sensual'
  },
  {
    id: '4',
    name: 'Versace Bright Crystal',
    brand: 'Versace',
    price: 1650000,
    originalPrice: 1850000,
    image: 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400&h=400&fit=crop',
    rating: 4.5,
    reviewCount: 423,
    inStock: true,
    category: 'Fresh',
    addedDate: '2023-12-28',
    description: 'Aroma segar dan feminin dengan sentuhan bunga dan buah'
  }
];

/**
 * Komponen untuk skeleton loading
 */
const WishlistSkeleton: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, index) => (
        <Card key={index} className="overflow-hidden">
          <CardContent className="p-0">
            <Skeleton className="h-48 w-full" />
            <div className="p-4 space-y-3">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-6 w-1/3" />
              <div className="flex gap-2">
                <Skeleton className="h-8 flex-1" />
                <Skeleton className="h-8 w-8" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

/**
 * Komponen utama halaman wishlist
 */
const WishlistPage: React.FC = () => {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);
  const [filteredItems, setFilteredItems] = useState<WishlistItem[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('newest');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  /**
   * Simulasi loading data wishlist
   */
  useEffect(() => {
    const timer = setTimeout(() => {
      setWishlistItems(mockWishlistItems);
      setFilteredItems(mockWishlistItems);
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  /**
   * Filter dan sort items berdasarkan query dan filter
   */
  useEffect(() => {
    let filtered = wishlistItems.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           item.brand.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = categoryFilter === 'all' || item.category.toLowerCase() === categoryFilter.toLowerCase();
      return matchesSearch && matchesCategory;
    });

    // Sort items
    switch (sortBy) {
      case 'newest':
        filtered.sort((a, b) => new Date(b.addedDate).getTime() - new Date(a.addedDate).getTime());
        break;
      case 'oldest':
        filtered.sort((a, b) => new Date(a.addedDate).getTime() - new Date(b.addedDate).getTime());
        break;
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    setFilteredItems(filtered);
  }, [wishlistItems, searchQuery, categoryFilter, sortBy]);

  /**
   * Hapus item dari wishlist
   */
  const removeFromWishlist = (itemId: string): void => {
    setWishlistItems(prev => prev.filter(item => item.id !== itemId));
  };

  /**
   * Tambah item ke cart
   */
  const addToCart = (item: WishlistItem): void => {
    console.log('Adding to cart:', item.name);
    // Implementasi add to cart logic
  };

  /**
   * Format harga ke rupiah
   */
  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  /**
   * Get unique categories
   */
  const getCategories = (): string[] => {
    const categories = wishlistItems.map(item => item.category);
    return Array.from(new Set(categories));
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <Skeleton className="h-8 w-48 mb-2" />
            <Skeleton className="h-4 w-96" />
          </div>
          <WishlistSkeleton />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">My Wishlist</h1>
              <p className="text-gray-600">Koleksi parfum impian Anda</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Heart className="h-5 w-5 text-pink-500" />
                  <div>
                    <p className="text-sm text-gray-600">Total Items</p>
                    <p className="text-xl font-bold">{wishlistItems.length}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Package className="h-5 w-5 text-green-500" />
                  <div>
                    <p className="text-sm text-gray-600">In Stock</p>
                    <p className="text-xl font-bold">{wishlistItems.filter(item => item.inStock).length}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <div>
                    <p className="text-sm text-gray-600">Avg Rating</p>
                    <p className="text-xl font-bold">
                      {wishlistItems.length > 0 
                        ? (wishlistItems.reduce((acc, item) => acc + item.rating, 0) / wishlistItems.length).toFixed(1)
                        : '0.0'
                      }
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <ShoppingCart className="h-5 w-5 text-blue-500" />
                  <div>
                    <p className="text-sm text-gray-600">Total Value</p>
                    <p className="text-xl font-bold">
                      {formatPrice(wishlistItems.reduce((acc, item) => acc + item.price, 0))}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Cari parfum atau brand..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-full md:w-48">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Kategori" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua Kategori</SelectItem>
                {getCategories().map(category => (
                  <SelectItem key={category} value={category.toLowerCase()}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Urutkan" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Terbaru</SelectItem>
                <SelectItem value="oldest">Terlama</SelectItem>
                <SelectItem value="price-low">Harga Terendah</SelectItem>
                <SelectItem value="price-high">Harga Tertinggi</SelectItem>
                <SelectItem value="rating">Rating Tertinggi</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </motion.div>

        {/* Wishlist Items */}
        {filteredItems.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              {searchQuery || categoryFilter !== 'all' ? 'Tidak ada item yang ditemukan' : 'Wishlist kosong'}
            </h3>
            <p className="text-gray-500">
              {searchQuery || categoryFilter !== 'all' 
                ? 'Coba ubah filter atau kata kunci pencarian'
                : 'Mulai tambahkan parfum favorit Anda ke wishlist'
              }
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-0">
                    <div className="relative">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {!item.inStock && (
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                          <Badge variant="destructive">Stok Habis</Badge>
                        </div>
                      )}
                      {item.originalPrice && (
                        <Badge className="absolute top-2 left-2 bg-red-500">
                          Sale
                        </Badge>
                      )}
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                        onClick={() => removeFromWishlist(item.id)}
                      >
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>
                    
                    <div className="p-4">
                      <div className="mb-2">
                        <Badge variant="outline" className="text-xs">
                          {item.category}
                        </Badge>
                      </div>
                      
                      <h3 className="font-semibold text-lg mb-1 line-clamp-1">{item.name}</h3>
                      <p className="text-gray-600 text-sm mb-2">{item.brand}</p>
                      
                      <div className="flex items-center gap-1 mb-2">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{item.rating}</span>
                        <span className="text-xs text-gray-500">({item.reviewCount})</span>
                      </div>
                      
                      <p className="text-xs text-gray-500 mb-3 line-clamp-2">{item.description}</p>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-lg font-bold text-gray-900">{formatPrice(item.price)}</p>
                          {item.originalPrice && (
                            <p className="text-sm text-gray-500 line-through">
                              {formatPrice(item.originalPrice)}
                            </p>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button
                          className="flex-1"
                          onClick={() => addToCart(item)}
                          disabled={!item.inStock}
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          {item.inStock ? 'Add to Cart' : 'Stok Habis'}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;