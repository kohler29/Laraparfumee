'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import {
  DollarSign,
  ShoppingCart,
  Package,
  Users,
  TrendingUp,
  Plus,
  Eye,
  Edit,
  Menu,
  X,
  Home,
  Settings,
  BarChart3,
  ShoppingBag,
  UserCheck,
  Bell,
  Search,
  LogOut
} from 'lucide-react';

const stats = [
  {
    title: 'Total Revenue',
    value: '$24,567',
    change: '+12.5%',
    icon: DollarSign,
    color: 'text-green-600'
  },
  {
    title: 'Total Orders',
    value: '156',
    change: '+8.2%',
    icon: ShoppingCart,
    color: 'text-blue-600'
  },
  {
    title: 'Total Products',
    value: '48',
    change: '+2.1%',
    icon: Package,
    color: 'text-purple-600'
  },
  {
    title: 'Total Customers',
    value: '234',
    change: '+15.3%',
    icon: Users,
    color: 'text-pink-600'
  }
];

const recentOrders = [
  {
    id: 'ORD-001',
    customer: 'Sarah Johnson',
    amount: 289.97,
    status: 'delivered',
    date: '2024-01-15'
  },
  {
    id: 'ORD-002',
    customer: 'Michael Chen',
    amount: 159.99,
    status: 'shipped',
    date: '2024-01-14'
  },
  {
    id: 'ORD-003',
    customer: 'Emma Williams',
    amount: 79.99,
    status: 'processing',
    date: '2024-01-13'
  }
];

const lowStockProducts = [
  { id: '1', name: 'Midnight Rose', stock: 3, price: 129.99 },
  { id: '2', name: 'Ocean Breeze', stock: 5, price: 89.99 },
  { id: '3', name: 'Lavender Dreams', stock: 2, price: 79.99 }
];

export default function AdminDashboard() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Fungsi untuk mendeteksi ukuran layar
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      router.push('/auth/login');
    }
  }, [user, router]);

  if (!user || user.role !== 'admin') {
    return null;
  }

  // Fungsi untuk menangani logout
  const handleLogout = () => {
    logout();
    router.push('/auth/login');
  };

  // Menu items untuk sidebar
  const menuItems = [
    { icon: Home, label: 'Dashboard', href: '/admin', active: true },
    { icon: ShoppingBag, label: 'Products', href: '/admin/products' },
    { icon: ShoppingCart, label: 'Orders', href: '/admin/orders' },
    { icon: Users, label: 'Customers', href: '/admin/customers' },
    { icon: BarChart3, label: 'Analytics', href: '/admin/analytics' },
    { icon: Package, label: 'Inventory', href: '/admin/inventory' },
    { icon: Settings, label: 'Settings', href: '/admin/settings' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'shipped': return 'bg-blue-100 text-blue-800';
      case 'processing': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <motion.div
        initial={{ x: isMobile ? -300 : 0, width: isMobile ? 256 : (sidebarCollapsed ? 80 : 256) }}
        animate={{ 
          x: isMobile ? (sidebarOpen ? 0 : -300) : 0,
          width: isMobile ? 256 : (sidebarCollapsed ? 80 : 256)
        }}
        transition={{ duration: 0.3 }}
        className="fixed inset-y-0 left-0 z-50 bg-white shadow-lg lg:relative lg:translate-x-0 lg:shadow-none lg:block"
      >
        <div className="flex h-full flex-col">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 border-b">
            {!sidebarCollapsed && (
              <h2 className="text-xl font-bold luxury-text">Admin Panel</h2>
            )}
            <div className="flex items-center space-x-2">
              {!isMobile && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                >
                  <Menu className="w-4 h-4" />
                </Button>
              )}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarOpen(false)}
                className="lg:hidden"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* User Info */}
          <div className="p-4 border-b">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">
                  {user.firstName.charAt(0)}
                </span>
              </div>
              {!sidebarCollapsed && (
                <div>
                  <p className="font-medium">{user.firstName} {user.lastName}</p>
                  <p className="text-sm text-gray-500">Administrator</p>
                </div>
              )}
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`flex items-center ${sidebarCollapsed ? 'justify-center' : 'space-x-3'} px-3 py-2 rounded-lg transition-colors group relative ${
                      item.active
                        ? 'bg-purple-100 text-purple-700'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                    title={sidebarCollapsed ? item.label : ''}
                  >
                    <item.icon className="w-5 h-5" />
                    {!sidebarCollapsed && (
                      <span>{item.label}</span>
                    )}
                    {sidebarCollapsed && (
                      <div className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
                        {item.label}
                      </div>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Logout Button */}
          <div className="p-4 border-t">
            <Button
              variant="ghost"
              onClick={handleLogout}
              className={`w-full ${sidebarCollapsed ? 'justify-center' : 'justify-start'} text-red-600 hover:bg-red-50 group relative`}
              title={sidebarCollapsed ? 'Logout' : ''}
            >
              <LogOut className="w-4 h-4 mr-2" />
              {!sidebarCollapsed && 'Logout'}
              {sidebarCollapsed && (
                <div className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
                  Logout
                </div>
              )}
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Overlay untuk mobile */}
      {sidebarOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen" style={{ marginLeft: isMobile ? '0px' : (sidebarCollapsed ? '80px' : '0px') }}>
        {/* Top Header */}
        <header className="bg-white shadow-sm border-b px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden"
              >
                <Menu className="w-5 h-5" />
              </Button>
              <h1 className="text-2xl font-bold luxury-text">Dashboard</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <Button variant="ghost" size="sm">
                <Bell className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </header>
        {/* Dashboard Content */}
        <main className="flex-1 p-6">
          <div className="mb-8">
            <p className="text-gray-600">
              Welcome back! Here's what's happening with your store today.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="luxury-card hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">{stat.title}</p>
                        <p className="text-2xl font-bold">{stat.value}</p>
                        <p className={`text-sm ${stat.color} flex items-center`}>
                          <TrendingUp className="w-4 h-4 mr-1" />
                          {stat.change}
                        </p>
                      </div>
                      <div className={`p-3 rounded-full bg-gradient-to-r ${stat.color === 'text-green-600' ? 'from-green-100 to-green-200' : stat.color === 'text-blue-600' ? 'from-blue-100 to-blue-200' : stat.color === 'text-purple-600' ? 'from-purple-100 to-purple-200' : 'from-pink-100 to-pink-200'}`}>
                        <stat.icon className={`w-6 h-6 ${stat.color}`} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-8"
          >
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link href="/admin/products/new">
                <Button className="w-full h-12 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Product
                </Button>
              </Link>
              <Link href="/admin/orders">
                <Button variant="outline" className="w-full h-12 border-blue-200 hover:bg-blue-50">
                  <Eye className="w-4 h-4 mr-2" />
                  View Orders
                </Button>
              </Link>
              <Link href="/admin/products">
                <Button variant="outline" className="w-full h-12 border-green-200 hover:bg-green-50">
                  <Package className="w-4 h-4 mr-2" />
                  Manage Products
                </Button>
              </Link>
              <Link href="/admin/customers">
                <Button variant="outline" className="w-full h-12 border-pink-200 hover:bg-pink-50">
                  <Users className="w-4 h-4 mr-2" />
                  View Customers
                </Button>
              </Link>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Orders */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="lg:col-span-2"
            >
              <Card className="luxury-card">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center justify-between">
                    Recent Orders
                    <Badge variant="secondary">{recentOrders.length} orders</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentOrders.map((order, index) => (
                      <motion.div
                        key={order.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <p className="font-semibold">{order.id}</p>
                            <p className="text-sm text-gray-600">{order.customer}</p>
                          </div>
                          <Badge className={getStatusColor(order.status)}>
                            {order.status}
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-gray-600">{order.date}</p>
                          <p className="font-semibold text-green-600">${order.amount}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <Link href="/admin/orders">
                      <Button variant="outline" className="w-full">
                        View All Orders
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Low Stock Alert */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Card className="luxury-card border-red-200">
                <CardHeader className="pb-4">
                  <CardTitle className="text-red-600 flex items-center">
                    <Bell className="w-5 h-5 mr-2" />
                    Low Stock Alert
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {lowStockProducts.map((product, index) => (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                        className="flex items-center justify-between p-3 bg-red-50 rounded-lg"
                      >
                        <div>
                          <p className="font-medium text-sm">{product.name}</p>
                          <p className="text-purple-600 font-semibold">${product.price}</p>
                        </div>
                        <Badge variant="destructive">
                          {product.stock} left
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <Link href="/admin/inventory">
                      <Button variant="outline" className="w-full border-red-200 hover:bg-red-50">
                        <Edit className="w-4 h-4 mr-2" />
                        Manage Inventory
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
}