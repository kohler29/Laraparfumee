'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useCart } from '@/context/CartContext';
import { 
  Heart, 
  ShoppingCart, 
  Share2,
  Minus,
  Plus
} from 'lucide-react';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  gallery: string[];
  rating: number;
  reviews: number;
  description: string;
  longDescription: string;
  category: string;
  isNew: boolean;
  isSale: boolean;
  sizes: string[];
  prices: { [key: string]: number };
  notes: {
    top: string[];
    middle: string[];
    base: string[];
  };
  ingredients: string;
  brand: string;
  concentration: string;
  longevity: string;
  sillage: string;
}

interface ProductInteractionProps {
  product: Product;
}

/**
 * Komponen untuk menangani interaksi produk (client-side)
 * Mengelola state untuk size selection, quantity, wishlist, dan cart actions
 */
export default function ProductInteraction({ product }: ProductInteractionProps) {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState('50ml');
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  /**
   * Menangani penambahan produk ke keranjang
   */
  const handleAddToCart = () => {
    // Menambahkan produk ke cart sebanyak quantity yang dipilih
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.prices[selectedSize as keyof typeof product.prices],
        image: product.image,
        size: selectedSize
      });
    }
    toast.success(`${product.name} (${selectedSize}) x${quantity} added to cart!`);
  };

  /**
   * Menangani perubahan kuantitas
   */
  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  /**
   * Toggle wishlist
   */
  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    toast.success(isWishlisted ? 'Removed from wishlist' : 'Added to wishlist');
  };

  const currentPrice = product.prices[selectedSize as keyof typeof product.prices];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      {/* Price */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex items-center gap-3"
      >
        <AnimatePresence mode="wait">
          <motion.span 
            key={currentPrice}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className="text-3xl font-bold text-purple-600"
          >
            ${currentPrice}
          </motion.span>
        </AnimatePresence>
      </motion.div>

      {/* Size Selection */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-2"
      >
        <label className="text-sm font-medium">Size</label>
        <Select value={selectedSize} onValueChange={setSelectedSize}>
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {product.sizes.map(size => (
              <SelectItem key={size} value={size}>
                {size} - ${product.prices[size as keyof typeof product.prices]}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </motion.div>

      {/* Quantity */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="space-y-2"
      >
        <label className="text-sm font-medium">Quantity</label>
        <div className="flex items-center gap-3">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleQuantityChange(-1)}
              disabled={quantity <= 1}
            >
              <Minus className="w-4 h-4" />
            </Button>
          </motion.div>
          <AnimatePresence mode="wait">
            <motion.span 
              key={quantity}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              transition={{ duration: 0.2 }}
              className="w-12 text-center font-medium"
            >
              {quantity}
            </motion.span>
          </AnimatePresence>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleQuantityChange(1)}
              disabled={quantity >= 10}
            >
              <Plus className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Action Buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex gap-3"
      >
        <motion.div 
          className="flex-1"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            onClick={handleAddToCart}
            className="w-full bg-purple-600 hover:bg-purple-700 h-12"
          >
            <motion.div
              initial={{ x: 0 }}
              whileHover={{ x: 2 }}
              className="flex items-center"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Add to Cart
            </motion.div>
          </Button>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Button
            variant="outline"
            onClick={toggleWishlist}
            className="h-12 px-4"
          >
            <motion.div
              animate={{ 
                scale: isWishlisted ? [1, 1.2, 1] : 1,
                rotate: isWishlisted ? [0, 10, -10, 0] : 0
              }}
              transition={{ duration: 0.3 }}
            >
              <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} />
            </motion.div>
          </Button>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <Button variant="outline" className="h-12 px-4">
            <Share2 className="w-5 h-5" />
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}