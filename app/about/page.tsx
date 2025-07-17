import Image from 'next/image';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Award, 
  Users, 
  Globe, 
  Heart,
  Sparkles,
  Leaf,
  Clock,
  Star
} from 'lucide-react';

/**
 * Halaman About - Menampilkan informasi tentang LaraParfume
 * Termasuk sejarah, misi, tim, dan nilai-nilai perusahaan
 */
export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800">About Us</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 luxury-text">
            LaraParfume
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Menciptakan parfum berkualitas tinggi dengan sentuhan kemewahan dan keanggunan. 
            Setiap botol adalah karya seni yang menggabungkan tradisi dan inovasi modern.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold luxury-text">Cerita Kami</h2>
            <p className="text-gray-600 leading-relaxed">
              LaraParfume didirikan pada tahun 2018 dengan visi untuk menciptakan parfum 
              yang tidak hanya harum, tetapi juga menceritakan kisah. Setiap fragrance 
              kami dibuat dengan bahan-bahan premium yang dipilih secara selektif dari 
              seluruh dunia.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Dari kebun mawar Bulgaria hingga vanilla Madagascar, kami berkomitmen untuk 
              menghadirkan kualitas terbaik dalam setiap tetes parfum. Tim perfumer 
              berpengalaman kami menggabungkan teknik tradisional dengan teknologi modern 
              untuk menciptakan aroma yang tak terlupakan.
            </p>
            <div className="flex gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">50+</div>
                <div className="text-sm text-gray-600">Fragrance Unik</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">10K+</div>
                <div className="text-sm text-gray-600">Pelanggan Puas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">25+</div>
                <div className="text-sm text-gray-600">Negara</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="luxury-card p-8 h-full">
              <Image
                src="https://images.pexels.com/photos/1190829/pexels-photo-1190829.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="LaraParfume Story"
                width={600}
                height={400}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Crafted with Passion</h3>
                <p className="text-gray-600 text-sm">
                  Setiap parfum dibuat dengan dedikasi tinggi dan perhatian terhadap detail
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 luxury-text">Nilai-Nilai Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="luxury-card hover-lift">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Kualitas Premium</h3>
                <p className="text-sm text-gray-600">
                  Menggunakan bahan-bahan terbaik dari seluruh dunia
                </p>
              </CardContent>
            </Card>

            <Card className="luxury-card hover-lift">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Ramah Lingkungan</h3>
                <p className="text-sm text-gray-600">
                  Berkomitmen pada praktik berkelanjutan dan eco-friendly
                </p>
              </CardContent>
            </Card>

            <Card className="luxury-card hover-lift">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Tradisi & Inovasi</h3>
                <p className="text-sm text-gray-600">
                  Menggabungkan teknik tradisional dengan teknologi modern
                </p>
              </CardContent>
            </Card>

            <Card className="luxury-card hover-lift">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="font-semibold mb-2">Kepuasan Pelanggan</h3>
                <p className="text-sm text-gray-600">
                  Mengutamakan kepuasan dan pengalaman pelanggan terbaik
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 luxury-text">Tim Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="luxury-card hover-lift">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">LR</span>
                </div>
                <h3 className="font-semibold mb-1">Lara Rodriguez</h3>
                <p className="text-purple-600 text-sm mb-2">Founder & Master Perfumer</p>
                <p className="text-gray-600 text-sm">
                  Dengan pengalaman 15 tahun di industri parfum, Lara memimpin tim kreatif 
                  dalam menciptakan fragrance yang unik dan berkualitas.
                </p>
              </CardContent>
            </Card>

            <Card className="luxury-card hover-lift">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">MJ</span>
                </div>
                <h3 className="font-semibold mb-1">Michael Johnson</h3>
                <p className="text-purple-600 text-sm mb-2">Head of Product Development</p>
                <p className="text-gray-600 text-sm">
                  Bertanggung jawab atas inovasi dan pengembangan produk baru, 
                  memastikan setiap parfum memenuhi standar kualitas tertinggi.
                </p>
              </CardContent>
            </Card>

            <Card className="luxury-card hover-lift">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">SP</span>
                </div>
                <h3 className="font-semibold mb-1">Sarah Parker</h3>
                <p className="text-purple-600 text-sm mb-2">Creative Director</p>
                <p className="text-gray-600 text-sm">
                  Memimpin tim kreatif dalam menciptakan konsep visual dan branding 
                  yang mencerminkan kemewahan dan keanggunan LaraParfume.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Awards Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 luxury-text">Penghargaan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="font-semibold mb-1">Best Luxury Fragrance 2023</h3>
              <p className="text-sm text-gray-600">International Perfume Awards</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-1">Innovation Excellence</h3>
              <p className="text-sm text-gray-600">Beauty Industry Summit 2023</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-1">Sustainable Brand 2022</h3>
              <p className="text-sm text-gray-600">Eco Beauty Awards</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-1">Customer Choice 2022</h3>
              <p className="text-sm text-gray-600">Beauty Consumer Awards</p>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center luxury-gradient p-12 rounded-2xl">
          <h2 className="text-3xl font-bold mb-6 text-white">Misi Kami</h2>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            "Menciptakan parfum yang tidak hanya mempercantik penampilan, tetapi juga 
            membangkitkan emosi, kenangan, dan kepercayaan diri. Kami berkomitmen untuk 
            terus berinovasi sambil menjaga kualitas dan nilai-nilai yang kami junjung tinggi."
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}