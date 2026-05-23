# JhingShaw — Portfolio 2026

Website portfolio pribadi milik **JhingShaw**, seorang siswa kelas 8 SMP di Bogor yang sedang belajar coding, web development, dan cybersecurity.

Project ini dibuat sebagai ruang publik untuk menampilkan perjalanan belajar, eksperimen UI, catatan project, dan perkembangan skill secara bertahap.

## ✨ Preview Konsep

Portfolio ini mengusung gaya modern 2026 dengan nuansa:

- Dark futuristic interface
- Gradient glow dan glassmorphism
- Bento-style project cards
- Animasi halus menggunakan Framer Motion
- Layout responsif untuk HP, tablet, dan desktop
- Konten yang mudah diedit untuk kebutuhan portfolio pribadi

## 🚀 Tech Stack

- **React**
- **Vite**
- **CSS Custom**
- **Framer Motion**
- **Lucide React**

## 📁 Struktur Project

```txt
jhingshaw-portfolio/
├─ index.html
├─ package.json
├─ README.md
├─ LICENSE.md
└─ src/
   ├─ main.jsx
   ├─ App.jsx
   └─ index.css
```

## 🛠️ Cara Menjalankan di Lokal

```bash
npm install
npm run dev
```

Setelah itu buka link lokal yang muncul di terminal.

## 📦 Cara Build

```bash
npm run build
```

Hasil build akan masuk ke folder:

```txt
dist/
```

## 🌐 Deploy ke Vercel

1. Upload semua file ke repository GitHub.
2. Buka Vercel.
3. Klik **Add New Project**.
4. Import repository GitHub.
5. Pilih framework **Vite**.
6. Pastikan setting berikut:
   - Build Command: `npm run build`
   - Output Directory: `dist`
7. Klik **Deploy**.

## ✏️ Cara Edit Data Portfolio

Buka file:

```txt
src/App.jsx
```

Lalu edit bagian berikut:

```js
const profile = {...}
const projects = [...]
const skills = [...]
const experience = [...]
```

## 🔐 Catatan Publikasi Aman

Website ini boleh dipublikasikan secara gratis di platform seperti:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

Sebelum publikasi, pastikan tidak memasukkan:

- Password
- Token API
- Alamat rumah lengkap
- Nomor HP pribadi
- Screenshot akun/private dashboard
- Data bug bounty yang belum boleh diungkap

## © Hak Cipta

Copyright © 2026 **JhingShaw**.

Website ini dibuat untuk portfolio pribadi dan bebas dipublikasikan oleh pemiliknya. Desain, teks, dan identitas personal di dalam project ini tidak boleh diklaim ulang oleh pihak lain tanpa izin.

Lihat detail di file [LICENSE.md](./LICENSE.md).
