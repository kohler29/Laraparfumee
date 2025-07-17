'use client';

import { useAuth } from '@/context/AuthContext';
import { useCart } from '@/context/CartContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/layout/Header';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ShoppingBag, 
  Heart, 
  Package, 
  Star, 
  Clock, 
  CreditCard, 
  TrendingUp, 
  Users, 
  Settings, 
  Bell, 
  Gift,
  BarChart3,
  Calendar,
  MapPin,
  Phone,
  Mail,
  User,
  LogOut,
  ChevronRight,
  Activity
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const recentOrders = [
  {
    id: 'ORD-001',
    date: '2024-01-15',
    total: 289.97,
    status: 'delivered',
    items: [
      { name: 'Midnight Rose', quantity: 1, price: 129.99 },
      { name: 'Ocean Breeze', quantity: 2, price: 79.99 }
    ]
  },
  {
    id: 'ORD-002',
    date: '2024-01-10',
    total: 159.99,
    status: 'shipped',
    items: [
      { name: 'Golden Amber', quantity: 1, price: 159.99 }
    ]
  },
  {
    id: 'ORD-003',
    date: '2024-01-05',
    total: 79.99,
    status: 'processing',
    items: [
      { name: 'Lavender Dreams', quantity: 1, price: 79.99 }
    ]
  }
];

const wishlistItems = [
  { id: '1', name: 'Vanilla Orchid', price: 119.99, image: 'https://images.pexels.com/photos/1190829/pexels-photo-1190829.jpeg?auto=compress&cs=tinysrgb&w=100' },
  { id: '2', name: 'Citrus Burst', price: 89.99, image: 'https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=100' },
  { id: '3', name: 'Spiced Cedar', price: 139.99, image: 'https://images.pexels.com/photos/1961795/pexels-photo-1961795.jpeg?auto=compress&cs=tinysrgb&w=100' }
];

const salesData = [
  { month: 'Jan', sales: 1200 },
  { month: 'Feb', sales: 1900 },
  { month: 'Mar', sales: 1500 },
  { month: 'Apr', sales: 2100 },
  { month: 'May', sales: 1800 },
  { month: 'Jun', sales: 2400 }
];

const recentActivity = [
  { id: 1, action: 'Order placed', item: 'Midnight Rose', time: '2 hours ago', type: 'order' },
  { id: 2, action: 'Added to wishlist', item: 'Vanilla Orchid', time: '1 day ago', type: 'wishlist' },
  { id: 3, action: 'Review submitted', item: 'Ocean Breeze', time: '3 days ago', type: 'review' },
  { id: 4, action: 'Profile updated', item: 'Personal information', time: '1 week ago', type: 'profile' }
];

const quickActions = [
  { title: 'Browse Products', icon: ShoppingBag, href: '/products', color: 'bg-purple-500' },
  { title: 'Track Orders', icon: Package, href: '/dashboard/orders', color: 'bg-blue-500' },
  { title: 'View Wishlist', icon: Heart, href: '/dashboard/wishlist', color: 'bg-pink-500' },
  { title: 'Account Settings', icon: Settings, href: '/dashboard/settings', color: 'bg-gray-500' }
];

export default function Dashboard() {
  const { user } = useAuth();
  const { itemCount, total } = useCart();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'shipped': return 'bg-blue-100 text-blue-800';
      case 'processing': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Welcome back, {user?.firstName}!
              </h1>
              <p className="text-gray-600 text-lg">
                Here's what's happening with your account today
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Bell className="w-4 h-4" />
                Notifications
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                <Gift className="w-4 h-4 mr-2" />
                Rewards
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="luxury-card hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-purple-100">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 font-medium">Total Orders</p>
                  <p className="text-3xl font-bold text-purple-700">3</p>
                  <div className="flex items-center mt-2">
                    <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                    <span className="text-sm text-green-600 font-medium">+12% from last month</span>
                  </div>
                </div>
                <div className="bg-purple-500 p-3 rounded-full">
                  <ShoppingBag className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="luxury-card hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-pink-50 to-pink-100">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 font-medium">Wishlist Items</p>
                  <p className="text-3xl font-bold text-pink-700">{wishlistItems.length}</p>
                  <div className="flex items-center mt-2">
                    <Heart className="w-4 h-4 text-pink-500 mr-1" />
                    <span className="text-sm text-pink-600 font-medium">2 new this week</span>
                  </div>
                </div>
                <div className="bg-pink-500 p-3 rounded-full">
                  <Heart className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="luxury-card hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-blue-100">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 font-medium">Cart Items</p>
                  <p className="text-3xl font-bold text-blue-700">{itemCount}</p>
                  <div className="flex items-center mt-2">
                    <Package className="w-4 h-4 text-blue-500 mr-1" />
                    <span className="text-sm text-blue-600 font-medium">${total.toFixed(2)} total</span>
                  </div>
                </div>
                <div className="bg-blue-500 p-3 rounded-full">
                  <Package className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="luxury-card hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-green-100">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 font-medium">Total Spent</p>
                  <p className="text-3xl font-bold text-green-700">$529.95</p>
                  <div className="flex items-center mt-2">
                    <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                    <span className="text-sm text-green-600 font-medium">VIP Status</span>
                  </div>
                </div>
                <div className="bg-green-500 p-3 rounded-full">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Quick Actions */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <Link key={index} href={action.href}>
                <Card className="luxury-card hover:shadow-lg transition-all duration-300 cursor-pointer group border-0">
                  <CardContent className="p-6 text-center">
                    <div className={`${action.color} p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center`}>
                      <action.icon className="w-8 h-8 text-white" />
                    </div>
                    <p className="font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">{action.title}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          {/* Recent Orders */}
          <motion.div 
            className="xl:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="luxury-card border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-t-lg">
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Recent Orders
                  </div>
                  <Badge variant="secondary" className="bg-white/20 text-white border-0">
                    {recentOrders.length} orders
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order, index) => (
                    <motion.div 
                      key={order.id} 
                      className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all duration-300 hover:border-purple-300"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <p className="font-semibold">{order.id}</p>
                          <p className="text-sm text-gray-600">{order.date}</p>
                        </div>
                        <Badge className={getStatusColor(order.status)}>
                          {order.status}
                        </Badge>
                      </div>
                      <div className="space-y-1 mb-2">
                        {order.items.map((item, index) => (
                          <p key={index} className="text-sm text-gray-600">
                            {item.name} x{item.quantity} - ${item.price}
                          </p>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="font-semibold">Total: ${order.total}</p>
                        <Button variant="outline" size="sm" className="hover:bg-purple-50 hover:border-purple-300 hover:text-purple-600">
                          View Details
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Link href="/dashboard/orders">
                    <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                      View All Orders
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Wishlist */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="luxury-card border-0 shadow-lg mb-8">
              <CardHeader className="bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-t-lg">
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Heart className="w-5 h-5" />
                    Wishlist
                  </div>
                  <Badge variant="secondary" className="bg-white/20 text-white border-0">
                    {wishlistItems.length} items
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {wishlistItems.map((item, index) => (
                    <motion.div 
                      key={item.id} 
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded-lg shadow-sm"
                      />
                      <div className="flex-1">
                        <p className="font-medium text-sm text-gray-800">{item.name}</p>
                        <p className="text-pink-600 font-semibold">${item.price}</p>
                      </div>
                      <Button size="sm" variant="ghost" className="ml-auto hover:bg-pink-50 hover:text-pink-600">
                        <ShoppingBag className="w-4 h-4" />
                      </Button>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Link href="/dashboard/wishlist">
                    <Button className="w-full bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700 text-white">
                      View Wishlist
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="luxury-card border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <motion.div 
                      key={activity.id} 
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div className={`p-2 rounded-full ${
                        activity.type === 'order' ? 'bg-green-100 text-green-600' :
                        activity.type === 'wishlist' ? 'bg-pink-100 text-pink-600' :
                        activity.type === 'review' ? 'bg-yellow-100 text-yellow-600' :
                        'bg-blue-100 text-blue-600'
                      }`}>
                        {activity.type === 'order' && <ShoppingBag className="w-4 h-4" />}
                        {activity.type === 'wishlist' && <Heart className="w-4 h-4" />}
                        {activity.type === 'review' && <Star className="w-4 h-4" />}
                        {activity.type === 'profile' && <User className="w-4 h-4" />}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm text-gray-800">{activity.action}</p>
                        <p className="text-xs text-gray-600">{activity.item}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}