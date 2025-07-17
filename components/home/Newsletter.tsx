'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Gift, Sparkles, Bell } from 'lucide-react';
import { toast } from 'sonner';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      toast.success('Thank you for subscribing! Check your email for exclusive offers.');
      setEmail('');
    }
  };

  return (
    <section className="py-16 luxury-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-white/20 rounded-full">
                <Mail className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay in the Scent
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Subscribe to our newsletter and be the first to know about new arrivals, exclusive offers, and fragrance tips
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-white/70"
                required
              />
              <Button type="submit" className="bg-white text-purple-600 hover:bg-gray-100">
                Subscribe
              </Button>
            </div>
          </form>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 text-white/90">
              <Gift className="w-5 h-5" />
              <span className="text-sm">Exclusive Offers</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-white/90">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm">New Arrivals First</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-white/90">
              <Bell className="w-5 h-5" />
              <span className="text-sm">Fragrance Tips</span>
            </div>
          </div>

          <p className="text-white/70 text-xs mt-6">
            By subscribing, you agree to our Privacy Policy and Terms of Service. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}