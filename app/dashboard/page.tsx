'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useCart } from '@/context/CartContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/layout/Header';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Skeleton } from '@/components/ui/skeleton';
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
  Activity,
  Truck,
  CheckCircle,
  AlertCircle,
  RefreshCw
} from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

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
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [notifications, setNotifications] = useState(3);

  // Simulasi loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Fungsi untuk refresh data
  const handleRefresh = async () => {
    setRefreshing(true);
    // Simulasi API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setRefreshing(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'shipped': return 'bg-blue-100 text-blue-800';
      case 'processing': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered': return <CheckCircle className="w-4 h-4" />;
      case 'shipped': return <Truck className="w-4 h-4" />;
      case 'processing': return <AlertCircle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  // Loading skeleton component
  const LoadingSkeleton = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <Card key={i} className="p-6">
            <Skeleton className="h-4 w-20 mb-2" />
            <Skeleton className="h-8 w-16 mb-2" />
            <Skeleton className="h-4 w-24" />
          </Card>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <Card key={i} className="p-6 text-center">
            <Skeleton className="h-16 w-16 rounded-full mx-auto mb-4" />
            <Skeleton className="h-4 w-20 mx-auto" />
          </Card>
        ))}
      </div>
    </div>
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <Header />
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <LoadingSkeleton />
        </div>
      </div>
    );
  }

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
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Welcome back, {user?.firstName || 'User'}!
              </h1>
              <p className="text-gray-600 text-base md:text-lg">
                Here&apos;s what&apos;s happening with your account today
              </p>
            </div>
            <div className="flex items-center gap-2 md:gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex items-center gap-2 relative"
                  onClick={() => setNotifications(0)}
                >
                  <Bell className="w-4 h-4" />
                  <span className="hidden sm:inline">Notifications</span>
                  {notifications > 0 && (
                    <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 min-w-[1.25rem] h-5">
                      {notifications}
                    </Badge>
                  )}
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleRefresh}
                  disabled={refreshing}
                  className="flex items-center gap-2"
                >
                  <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} />
                  <span className="hidden sm:inline">{refreshing ? 'Refreshing...' : 'Refresh'}</span>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="sm" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  <Gift className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Rewards</span>
                  <span className="sm:hidden">VIP</span>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="luxury-card hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-purple-100 h-full">
              <CardContent className="p-3 md:p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <p className="text-xs md:text-sm text-gray-600 font-medium">Total Orders</p>
                    <p className="text-2xl md:text-3xl font-bold text-purple-700">3</p>
                    <div className="flex items-center mt-1 md:mt-2">
                      <TrendingUp className="w-3 md:w-4 h-3 md:h-4 text-green-500 mr-1" />
                      <span className="text-xs md:text-sm text-green-600 font-medium hidden sm:inline">+12%</span>
                      <span className="text-xs text-green-600 font-medium sm:hidden">↑12%</span>
                    </div>
                  </div>
                  <div className="bg-purple-500 p-2 md:p-3 rounded-full mt-2 md:mt-0 self-end md:self-auto">
                    <ShoppingBag className="w-4 md:w-6 h-4 md:h-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="luxury-card hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-pink-50 to-pink-100 h-full">
              <CardContent className="p-3 md:p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <p className="text-xs md:text-sm text-gray-600 font-medium">Wishlist Items</p>
                    <p className="text-2xl md:text-3xl font-bold text-pink-700">{wishlistItems.length}</p>
                    <div className="flex items-center mt-1 md:mt-2">
                      <Heart className="w-3 md:w-4 h-3 md:h-4 text-pink-500 mr-1" />
                      <span className="text-xs md:text-sm text-pink-600 font-medium hidden sm:inline">2 new</span>
                      <span className="text-xs text-pink-600 font-medium sm:hidden">+2</span>
                    </div>
                  </div>
                  <div className="bg-pink-500 p-2 md:p-3 rounded-full mt-2 md:mt-0 self-end md:self-auto">
                    <Heart className="w-4 md:w-6 h-4 md:h-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="luxury-card hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-blue-100 h-full">
              <CardContent className="p-3 md:p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <p className="text-xs md:text-sm text-gray-600 font-medium">Cart Items</p>
                    <p className="text-2xl md:text-3xl font-bold text-blue-700">{itemCount}</p>
                    <div className="flex items-center mt-1 md:mt-2">
                      <Package className="w-3 md:w-4 h-3 md:h-4 text-blue-500 mr-1" />
                      <span className="text-xs md:text-sm text-blue-600 font-medium">${total.toFixed(2)}</span>
                    </div>
                  </div>
                  <div className="bg-blue-500 p-2 md:p-3 rounded-full mt-2 md:mt-0 self-end md:self-auto">
                    <Package className="w-4 md:w-6 h-4 md:h-6 text-white" />
                  </div>
                </div>
            </CardContent>
            </Card>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="luxury-card hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-green-100 h-full">
              <CardContent className="p-3 md:p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <p className="text-xs md:text-sm text-gray-600 font-medium">Total Spent</p>
                    <p className="text-2xl md:text-3xl font-bold text-green-700">$529.95</p>
                    <div className="flex items-center mt-1 md:mt-2">
                      <TrendingUp className="w-3 md:w-4 h-3 md:h-4 text-green-500 mr-1" />
                      <span className="text-xs md:text-sm text-green-600 font-medium hidden sm:inline">VIP Status</span>
                      <span className="text-xs text-green-600 font-medium sm:hidden">VIP</span>
                    </div>
                  </div>
                  <div className="bg-green-500 p-2 md:p-3 rounded-full mt-2 md:mt-0 self-end md:self-auto">
                    <CreditCard className="w-4 md:w-6 h-4 md:h-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {quickActions.map((action, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href={action.href}>
                  <Card className="luxury-card hover:shadow-lg transition-all duration-300 cursor-pointer group border-0 h-full">
                    <CardContent className="p-3 md:p-6 text-center">
                      <div className={`${action.color} p-3 md:p-4 rounded-full w-12 h-12 md:w-16 md:h-16 mx-auto mb-2 md:mb-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center`}>
                        <action.icon className="w-5 h-5 md:w-8 md:h-8 text-white" />
                      </div>
                      <p className="font-semibold text-xs md:text-sm text-gray-800 group-hover:text-purple-600 transition-colors leading-tight">{action.title}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
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
                <CardTitle className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base">Recent Orders</span>
                  </div>
                  <Badge variant="secondary" className="bg-white/20 text-white border-0 text-xs sm:text-sm self-start sm:self-auto">
                    {recentOrders.length} orders
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-3 sm:p-6">
                <div className="space-y-3 sm:space-y-4">
                  {recentOrders.map((order, index) => (
                    <motion.div 
                      key={order.id} 
                      className="border border-gray-200 rounded-lg p-3 sm:p-4 hover:shadow-md transition-all duration-300 hover:border-purple-300"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                        <div className="flex-1">
                          <p className="font-semibold text-sm sm:text-base">{order.id}</p>
                          <p className="text-xs sm:text-sm text-gray-600">{order.date}</p>
                        </div>
                        <Badge className={`${getStatusColor(order.status)} text-xs self-start sm:self-auto`}>
                          {order.status}
                        </Badge>
                      </div>
                      <div className="space-y-1 mb-2">
                        {order.items.map((item, index) => (
                          <p key={index} className="text-xs sm:text-sm text-gray-600">
                            {item.name} x{item.quantity} - ${item.price}
                          </p>
                        ))}
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <p className="font-semibold text-sm sm:text-base">Total: ${order.total}</p>
                        <Button variant="outline" size="sm" className="hover:bg-purple-50 hover:border-purple-300 hover:text-purple-600 text-xs sm:text-sm w-full sm:w-auto">
                          View Details
                          <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-4 sm:mt-6 text-center">
                  <Link href="/dashboard/orders">
                    <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white w-full sm:w-auto text-sm">
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
            <Card className="luxury-card border-0 shadow-lg mb-4 md:mb-8">
              <CardHeader className="bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-t-lg">
                <CardTitle className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base">Wishlist</span>
                  </div>
                  <Badge variant="secondary" className="bg-white/20 text-white border-0 text-xs sm:text-sm self-start sm:self-auto">
                    {wishlistItems.length} items
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-3 sm:p-6">
                <div className="space-y-3 sm:space-y-4">
                  {wishlistItems.map((item, index) => (
                    <motion.div 
                      key={item.id} 
                      className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={48}
                        height={48}
                        className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-lg shadow-sm flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-xs sm:text-sm text-gray-800 truncate">{item.name}</p>
                        <p className="text-pink-600 font-semibold text-xs sm:text-sm">${item.price}</p>
                      </div>
                      <Button size="sm" variant="ghost" className="ml-auto hover:bg-pink-50 hover:text-pink-600 p-1 sm:p-2">
                        <ShoppingBag className="w-3 h-3 sm:w-4 sm:h-4" />
                      </Button>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-4 sm:mt-6 text-center">
                  <Link href="/dashboard/wishlist">
                    <Button className="w-full bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700 text-white text-sm">
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
                  <Activity className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">Recent Activity</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-3 sm:p-6">
                <div className="space-y-3 sm:space-y-4">
                  {recentActivity.map((activity, index) => (
                    <motion.div 
                      key={activity.id} 
                      className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className={`p-1.5 sm:p-2 rounded-full flex-shrink-0 ${
                        activity.type === 'order' ? 'bg-green-100 text-green-600' :
                        activity.type === 'wishlist' ? 'bg-pink-100 text-pink-600' :
                        activity.type === 'review' ? 'bg-yellow-100 text-yellow-600' :
                        'bg-blue-100 text-blue-600'
                      }`}>
                        {activity.type === 'order' && <ShoppingBag className="w-3 h-3 sm:w-4 sm:h-4" />}
                        {activity.type === 'wishlist' && <Heart className="w-3 h-3 sm:w-4 sm:h-4" />}
                        {activity.type === 'review' && <Star className="w-3 h-3 sm:w-4 sm:h-4" />}
                        {activity.type === 'profile' && <User className="w-3 h-3 sm:w-4 sm:h-4" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-xs sm:text-sm text-gray-800 truncate">{activity.action}</p>
                        <p className="text-xs text-gray-600 truncate">{activity.item}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-4 sm:mt-6 text-center">
                  <Link href="/dashboard/activity">
                    <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white w-full sm:w-auto text-sm">
                      View All Activity
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}