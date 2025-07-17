import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Star, 
  ArrowLeft, 
  Truck, 
  Shield, 
  RotateCcw
} from 'lucide-react';
import ProductInteraction from './ProductInteraction';

// Data produk yang sama dengan halaman products
const products = [
  {
    id: '1',
    name: 'Midnight Rose',
    price: 129.99,
    originalPrice: 149.99,
    image: 'https://images.pexels.com/photos/1190829/pexels-photo-1190829.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/1190829/pexels-photo-1190829.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1961795/pexels-photo-1961795.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    rating: 4.8,
    reviews: 156,
    description: 'A romantic blend of rose and vanilla with hints of bergamot',
    longDescription: 'Midnight Rose adalah parfum yang menggabungkan keanggunan mawar dengan kehangatan vanilla. Dibuka dengan sentuhan segar bergamot, kemudian berkembang menjadi bouquet mawar yang mempesona di heart notes, dan diakhiri dengan base notes vanilla yang sensual dan musk yang lembut.',
    category: 'Floral',
    isNew: true,
    isSale: true,
    sizes: ['30ml', '50ml', '100ml'],
    prices: { '30ml': 89.99, '50ml': 129.99, '100ml': 189.99 },
    notes: {
      top: ['Bergamot', 'Pink Pepper', 'Mandarin'],
      middle: ['Rose Petals', 'Jasmine', 'Peony'],
      base: ['Vanilla', 'White Musk', 'Sandalwood']
    },
    ingredients: 'Alcohol Denat., Parfum (Fragrance), Aqua (Water), Benzyl Salicylate, Linalool, Limonene, Geraniol, Citronellol',
    brand: 'LaraParfume',
    concentration: 'Eau de Parfum',
    longevity: '6-8 hours',
    sillage: 'Moderate to Strong'
  },
  {
    id: '2',
    name: 'Ocean Breeze',
    price: 89.99,
    image: 'https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1190829/pexels-photo-1190829.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    rating: 4.6,
    reviews: 89,
    description: 'Fresh aquatic scent with marine notes and citrus',
    longDescription: 'Ocean Breeze menghadirkan kesegaran laut yang menyegarkan. Parfum ini menggabungkan note akuatik dengan sentuhan citrus yang energizing, sempurna untuk penggunaan sehari-hari.',
    category: 'Fresh',
    isNew: false,
    isSale: false,
    sizes: ['30ml', '50ml', '100ml'],
    prices: { '30ml': 59.99, '50ml': 89.99, '100ml': 129.99 },
    notes: {
      top: ['Sea Salt', 'Lemon', 'Grapefruit'],
      middle: ['Marine Notes', 'Lily of the Valley', 'Cucumber'],
      base: ['White Musk', 'Driftwood', 'Ambergris']
    },
    ingredients: 'Alcohol Denat., Parfum (Fragrance), Aqua (Water), Limonene, Linalool, Citral',
    brand: 'LaraParfume',
    concentration: 'Eau de Toilette',
    longevity: '4-6 hours',
    sillage: 'Light to Moderate'
  }
];

/**
 * Menggenerate static params untuk semua produk yang tersedia
 * Diperlukan untuk Next.js dengan konfigurasi "output: export"
 */
export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

/**
 * Komponen halaman detail produk
 * Menampilkan informasi lengkap produk dengan galeri gambar, deskripsi, dan opsi pembelian
 */
export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  // Await params untuk kompatibilitas Next.js 15
  const { id } = await params;
  
  // Mencari produk berdasarkan ID dari parameter URL
  const product = products.find(p => p.id === id);

  // Jika produk tidak ditemukan, tampilkan halaman 404
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
          <Link href="/products">
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
              Back to Products
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8 text-sm text-gray-600">
          <Link href="/" className="hover:text-purple-600">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-purple-600">Products</Link>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </div>

        {/* Back Button */}
        <Link href="/products" className="inline-flex items-center gap-2 mb-8 text-purple-600 hover:text-purple-700">
          <ArrowLeft className="w-4 h-4" />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-xl bg-gray-100">
              <Image
                src={product.gallery[0]}
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              {product.isNew && (
                <Badge className="absolute top-4 left-4 bg-green-500 text-white">New</Badge>
              )}
              {product.isSale && (
                <Badge className="absolute top-4 right-4 bg-red-500 text-white">Sale</Badge>
              )}
            </div>
            
            {/* Thumbnail Gallery */}
            <div className="flex gap-2 overflow-x-auto">
              {product.gallery.map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 border-gray-200"
                >
                  <Image
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary">{product.category}</Badge>
                <Badge variant="outline">{product.concentration}</Badge>
              </div>
              <h1 className="text-3xl font-bold mb-2 luxury-text">{product.name}</h1>
              <p className="text-gray-600 mb-4">{product.description}</p>
              
              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="font-medium">{product.rating}</span>
                <span className="text-gray-500">({product.reviews} reviews)</span>
              </div>
            </div>

            {/* Product Interaction Component */}
            <ProductInteraction product={product} />

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t">
              <div className="text-center">
                <Truck className="w-6 h-6 mx-auto mb-2 text-purple-600" />
                <p className="text-sm font-medium">Free Shipping</p>
                <p className="text-xs text-gray-500">Orders over $100</p>
              </div>
              <div className="text-center">
                <Shield className="w-6 h-6 mx-auto mb-2 text-purple-600" />
                <p className="text-sm font-medium">Authentic</p>
                <p className="text-xs text-gray-500">100% Original</p>
              </div>
              <div className="text-center">
                <RotateCcw className="w-6 h-6 mx-auto mb-2 text-purple-600" />
                <p className="text-sm font-medium">Easy Returns</p>
                <p className="text-xs text-gray-500">30-day policy</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="notes">Fragrance Notes</TabsTrigger>
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">About {product.name}</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {product.longDescription}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div>
                      <h4 className="font-medium mb-2">Longevity</h4>
                      <p className="text-gray-600">{product.longevity}</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Sillage</h4>
                      <p className="text-gray-600">{product.sillage}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="notes" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6">Fragrance Pyramid</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium mb-3 text-purple-600">Top Notes</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.notes.top.map(note => (
                          <Badge key={note} variant="secondary">{note}</Badge>
                        ))}
                      </div>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-medium mb-3 text-purple-600">Middle Notes</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.notes.middle.map(note => (
                          <Badge key={note} variant="secondary">{note}</Badge>
                        ))}
                      </div>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-medium mb-3 text-purple-600">Base Notes</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.notes.base.map(note => (
                          <Badge key={note} variant="secondary">{note}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="details" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6">Product Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-2">Brand</h4>
                      <p className="text-gray-600 mb-4">{product.brand}</p>
                      
                      <h4 className="font-medium mb-2">Concentration</h4>
                      <p className="text-gray-600 mb-4">{product.concentration}</p>
                      
                      <h4 className="font-medium mb-2">Category</h4>
                      <p className="text-gray-600">{product.category}</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Ingredients</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {product.ingredients}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6">Customer Reviews</h3>
                  <div className="text-center py-8">
                    <p className="text-gray-500">Reviews feature coming soon...</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}