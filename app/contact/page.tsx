'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  MessageCircle,
  Building,
  Globe
} from 'lucide-react';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Halaman Contact - Form kontak dan informasi perusahaan
 * Memungkinkan pelanggan untuk menghubungi LaraParfume
 */
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  /**
   * Menangani perubahan input form
   */
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  /**
   * Menangani submit form kontak
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulasi pengiriman form
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success('Pesan Anda berhasil dikirim! Kami akan merespons dalam 24 jam.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    
    setIsSubmitting(false);
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
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Badge className="mb-4 bg-purple-100 text-purple-800">Contact Us</Badge>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold mb-6 luxury-text"
          >
            Hubungi Kami
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Kami siap membantu Anda menemukan parfum yang sempurna. 
            Jangan ragu untuk menghubungi tim customer service kami.
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16"
        />
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="lg:col-span-2"
          >
            <Card className="luxury-card">
              <CardContent className="p-8">
                <motion.h2 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="text-2xl font-bold mb-6 luxury-text"
                >
                  Kirim Pesan
                </motion.h2>
                <motion.form 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <label className="block text-sm font-medium mb-2">Nama Lengkap *</label>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Masukkan nama lengkap"
                        required
                        className="w-full"
                      />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="nama@email.com"
                        required
                        className="w-full"
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <label className="block text-sm font-medium mb-2">Nomor Telepon</label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+62 812 3456 7890"
                        className="w-full"
                      />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <label className="block text-sm font-medium mb-2">Subjek *</label>
                      <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Pilih subjek" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="product-inquiry">Pertanyaan Produk</SelectItem>
                          <SelectItem value="order-status">Status Pesanan</SelectItem>
                          <SelectItem value="custom-fragrance">Custom Fragrance</SelectItem>
                          <SelectItem value="partnership">Kerjasama</SelectItem>
                          <SelectItem value="complaint">Keluhan</SelectItem>
                          <SelectItem value="other">Lainnya</SelectItem>
                        </SelectContent>
                      </Select>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                  >
                    <label className="block text-sm font-medium mb-2">Pesan *</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tulis pesan Anda di sini..."
                      rows={6}
                      required
                      className="w-full"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        disabled={isSubmitting || !formData.name || !formData.email || !formData.subject || !formData.message}
                        className="w-full bg-purple-600 hover:bg-purple-700 h-12"
                      >
                        <AnimatePresence mode="wait">
                          {isSubmitting ? (
                            <motion.div 
                              key="submitting"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="flex items-center gap-2"
                            >
                              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                              Mengirim...
                            </motion.div>
                          ) : (
                            <motion.div 
                              key="submit"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="flex items-center gap-2"
                            >
                              <motion.div
                                whileHover={{ x: 2 }}
                                transition={{ duration: 0.2 }}
                              >
                                <Send className="w-5 h-5" />
                              </motion.div>
                              Kirim Pesan
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </Button>
                    </motion.div>
                  </motion.div>
                </motion.form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="space-y-6"
          >
            {/* Contact Details */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="luxury-card hover-lift">
                <CardContent className="p-6">
                  <motion.h3 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-xl font-bold mb-4 luxury-text"
                  >
                    Informasi Kontak
                  </motion.h3>
                  <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Alamat</h4>
                      <p className="text-gray-600 text-sm">
                        Jl. Kemang Raya No. 123<br />
                        Jakarta Selatan 12560<br />
                        Indonesia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Telepon</h4>
                      <p className="text-gray-600 text-sm">
                        +62 21 1234 5678<br />
                        +62 812 3456 7890
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-gray-600 text-sm">
                        info@laraparfume.com<br />
                        support@laraparfume.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Jam Operasional</h4>
                      <p className="text-gray-600 text-sm">
                        Senin - Jumat: 09:00 - 18:00<br />
                        Sabtu: 09:00 - 15:00<br />
                        Minggu: Tutup
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <Card className="luxury-card hover-lift">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 luxury-text">Kontak Cepat</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="tel:+6221123456789" className="flex items-center gap-3">
                      <Phone className="w-4 h-4" />
                      Telepon Sekarang
                    </a>
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="mailto:info@laraparfume.com" className="flex items-center gap-3">
                      <Mail className="w-4 h-4" />
                      Kirim Email
                    </a>
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Store Locations */}
            <Card className="luxury-card hover-lift">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 luxury-text">Lokasi Toko</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Building className="w-5 h-5 text-purple-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">LaraParfume Kemang</h4>
                      <p className="text-gray-600 text-sm">Jl. Kemang Raya No. 123</p>
                      <p className="text-gray-600 text-sm">Jakarta Selatan</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Building className="w-5 h-5 text-purple-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">LaraParfume PIK</h4>
                      <p className="text-gray-600 text-sm">Mall PIK Avenue Lt. 2</p>
                      <p className="text-gray-600 text-sm">Jakarta Utara</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-purple-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Online Store</h4>
                      <p className="text-gray-600 text-sm">Tersedia 24/7</p>
                      <p className="text-gray-600 text-sm">Pengiriman ke seluruh Indonesia</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 luxury-text">Pertanyaan Umum</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="luxury-card hover-lift">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Berapa lama pengiriman?</h3>
                <p className="text-gray-600 text-sm">
                  Untuk area Jakarta: 1-2 hari kerja. Luar Jakarta: 2-5 hari kerja. 
                  Kami menggunakan kurir terpercaya untuk memastikan produk sampai dengan aman.
                </p>
              </CardContent>
            </Card>

            <Card className="luxury-card hover-lift">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Apakah ada garansi produk?</h3>
                <p className="text-gray-600 text-sm">
                  Ya, semua produk LaraParfume memiliki garansi kualitas. Jika ada masalah 
                  dengan produk, Anda dapat menghubungi kami dalam 30 hari setelah pembelian.
                </p>
              </CardContent>
            </Card>

            <Card className="luxury-card hover-lift">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Bisakah membuat custom fragrance?</h3>
                <p className="text-gray-600 text-sm">
                  Tentu! Kami menyediakan layanan custom fragrance. Konsultasikan kebutuhan 
                  Anda dengan tim perfumer kami untuk menciptakan aroma yang unik.
                </p>
              </CardContent>
            </Card>

            <Card className="luxury-card hover-lift">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Bagaimana cara merawat parfum?</h3>
                <p className="text-gray-600 text-sm">
                  Simpan parfum di tempat sejuk, kering, dan terhindar dari sinar matahari langsung. 
                  Jangan simpan di kamar mandi karena kelembaban dapat merusak kualitas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="luxury-gradient p-12 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Kunjungi Toko Kami</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
            Datang langsung ke toko kami untuk merasakan pengalaman berbelanja parfum yang tak terlupakan. 
            Tim kami siap membantu Anda menemukan parfum yang sempurna.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
            <div className="aspect-video bg-white/20 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <MapPin className="w-12 h-12 mx-auto mb-4" />
                <p className="text-lg font-semibold">Peta Lokasi</p>
                <p className="text-sm opacity-90">Jl. Kemang Raya No. 123, Jakarta Selatan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}