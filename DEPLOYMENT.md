# 🚀 Panduan Deployment Lara Parfume ke Vercel

## 📋 Persiapan Sebelum Deploy

### 1. Pastikan Build Berhasil
```bash
npm run build
```

### 2. File Konfigurasi yang Sudah Disiapkan
- ✅ `next.config.js` - Dikonfigurasi untuk Vercel
- ✅ `vercel.json` - Konfigurasi deployment
- ✅ `.gitignore` - File yang diabaikan
- ✅ `package.json` - Dependencies lengkap

## 🌐 Cara Deploy ke Vercel

### Metode 1: Deploy via Vercel CLI (Recommended)

1. **Install Vercel CLI**
```bash
npm i -g vercel
```

2. **Login ke Vercel**
```bash
vercel login
```

3. **Deploy dari Terminal**
```bash
cd /Users/mac/Downloads/Laraparfume
vercel
```

4. **Ikuti Prompt:**
   - Set up and deploy? → `Y`
   - Which scope? → Pilih akun Anda
   - Link to existing project? → `N` (untuk project baru)
   - Project name → `lara-parfume` atau nama yang diinginkan
   - Directory → `.` (current directory)
   - Override settings? → `N`

### Metode 2: Deploy via GitHub + Vercel Dashboard

1. **Push ke GitHub Repository**
```bash
git init
git add .
git commit -m "Initial commit - Lara Parfume"
git branch -M main
git remote add origin https://github.com/username/lara-parfume.git
git push -u origin main
```

2. **Connect di Vercel Dashboard**
   - Buka [vercel.com](https://vercel.com)
   - Login dengan GitHub
   - Klik "New Project"
   - Import repository `lara-parfume`
   - Deploy!

## ⚙️ Konfigurasi Environment Variables (Opsional)

Jika ada environment variables, tambahkan di Vercel Dashboard:
- Project Settings → Environment Variables
- Atau via CLI: `vercel env add`

## 🔧 Troubleshooting

### Build Errors
- Pastikan semua dependencies terinstall
- Jalankan `npm run build` lokal dulu
- Check TypeScript errors

### Deployment Issues
- Periksa `vercel.json` configuration
- Pastikan `next.config.js` tidak ada konflik
- Check Vercel build logs

## 📱 Setelah Deploy

1. **URL Production**: `https://your-project-name.vercel.app`
2. **Custom Domain**: Bisa ditambahkan di Project Settings
3. **Analytics**: Tersedia di Vercel Dashboard
4. **Monitoring**: Real-time logs dan metrics

## 🎯 Fitur yang Sudah Siap Deploy

- ✅ Homepage dengan hero section
- ✅ Product catalog dengan filter
- ✅ Product detail pages
- ✅ Authentication system
- ✅ Shopping cart functionality
- ✅ Admin dashboard dengan sidebar
- ✅ Responsive design
- ✅ SEO optimized

## 🚀 Performance Optimizations

- Static generation untuk halaman produk
- Image optimization dengan Next.js Image
- Code splitting otomatis
- CSS optimization
- Bundle analysis tersedia

---

**Happy Deploying! 🎉**

Untuk bantuan lebih lanjut, check [Vercel Documentation](https://vercel.com/docs)