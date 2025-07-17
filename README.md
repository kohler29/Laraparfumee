# Lara Parfume - Luxury E-commerce Platform

A comprehensive e-commerce solution for luxury fragrances built with Next.js, featuring both customer and admin dashboards.

## 🚀 Features

### Customer Features
- **User Authentication**: Secure login/register with form validation
- **Product Catalog**: Browse products with advanced filtering and search
- **Shopping Cart**: Add/remove items with persistent storage
- **Wishlist**: Save favorite products for later
- **User Dashboard**: Profile management and order history
- **Order Tracking**: Real-time order status updates
- **Responsive Design**: Mobile-first approach with elegant UI

### Admin Features
- **Admin Dashboard**: Comprehensive analytics and metrics
- **Product Management**: CRUD operations for products
- **Order Management**: Process and track customer orders
- **Inventory Control**: Stock management and low-stock alerts
- **Customer Management**: View customer data and analytics
- **Sales Reports**: Revenue tracking and business insights

## 🛠️ Tech Stack

- **Framework**: Next.js 13+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom luxury theme
- **UI Components**: shadcn/ui component library
- **State Management**: React Context + localStorage
- **Authentication**: Custom auth system (easily replaceable)
- **Database**: Ready for Supabase integration
- **Payments**: Stripe integration ready
- **Icons**: Lucide React

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd lara-parfume
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Design System

### Color Palette
- **Primary**: Deep purple (#6B46C1)
- **Secondary**: Rose gold (#E8B4B8)
- **Accent**: Warm neutrals and gradients
- **Success**: Green tones for positive actions
- **Warning**: Amber for alerts
- **Error**: Red for validation errors

### Typography
- **Font Family**: Inter (clean, professional)
- **Headings**: 120% line height, bold weights
- **Body**: 150% line height, regular weight
- **Hierarchy**: Clear sizing scale (3xl, 2xl, xl, lg, base, sm, xs)

### Components
- **Cards**: Luxury aesthetic with subtle shadows
- **Buttons**: Consistent sizing with hover states
- **Forms**: Clear validation and error states
- **Navigation**: Intuitive breadcrumbs and menus

## 📁 Project Structure

```
├── app/
│   ├── auth/           # Authentication pages
│   ├── dashboard/      # User dashboard
│   ├── admin/          # Admin dashboard
│   ├── products/       # Product pages
│   └── globals.css     # Global styles
├── components/
│   ├── ui/             # Reusable UI components
│   ├── layout/         # Layout components
│   └── home/           # Homepage components
├── context/            # React Context providers
├── lib/               # Utility functions
└── public/            # Static assets
```

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file:
```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_key
STRIPE_SECRET_KEY=your_stripe_secret
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
```

### Database Schema (Supabase)
```sql
-- Users table (extends Supabase auth.users)
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  first_name TEXT,
  last_name TEXT,
  role TEXT DEFAULT 'user',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Products table
CREATE TABLE products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  category TEXT NOT NULL,
  image_url TEXT,
  stock_quantity INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Orders table
CREATE TABLE orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  total_amount DECIMAL(10,2) NOT NULL,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Order items table
CREATE TABLE order_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  order_id UUID REFERENCES orders(id),
  product_id UUID REFERENCES products(id),
  quantity INTEGER NOT NULL,
  price DECIMAL(10,2) NOT NULL
);
```

## 🎯 Usage

### Demo Accounts
- **Admin**: admin@lara.com (any password)
- **Customer**: Any email with any password

### Key Features Demo
1. **Homepage**: Carousel, featured products, categories
2. **Product Catalog**: Search, filter, sort functionality
3. **Shopping Cart**: Add items, view cart, persist across sessions
4. **User Dashboard**: Order history, profile, wishlist
5. **Admin Panel**: Product management, order tracking, analytics

## 🚀 Deployment

### Netlify (Recommended)
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `out`
4. Add environment variables in Netlify dashboard

### Vercel
1. Connect repository to Vercel
2. Environment variables will be automatically detected
3. Deploy with zero configuration

## 🔐 Security Features

- **Input Validation**: Form validation on all user inputs
- **Authentication**: Secure login/register flows
- **Authorization**: Role-based access control
- **Data Sanitization**: XSS protection
- **HTTPS**: SSL/TLS encryption in production

## 📱 Responsive Design

- **Mobile**: < 768px - Stacked layouts, mobile menu
- **Tablet**: 768px - 1024px - Adjusted grid layouts
- **Desktop**: > 1024px - Full feature layout
- **Large**: > 1536px - Optimized for large screens

## 🎨 Customization

### Theming
Modify `app/globals.css` and `tailwind.config.ts` for custom colors and spacing.

### Components
All components are in `components/ui/` and can be customized or replaced.

### Layout
Header and footer are in `components/layout/` for easy modification.

## 📊 Performance

- **Next.js Optimization**: Image optimization, code splitting
- **Lazy Loading**: Components and images load on demand
- **Caching**: Static generation where possible
- **Bundle Size**: Optimized with tree shaking

## 🧪 Testing

```bash
# Run tests
npm run test

# Run tests with coverage
npm run test:coverage

# Run e2e tests
npm run test:e2e
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **shadcn/ui**: For the excellent component library
- **Tailwind CSS**: For the utility-first styling approach
- **Lucide**: For the beautiful icon set
- **Pexels**: For the stock photography
- **Next.js**: For the powerful React framework