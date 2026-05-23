# JhingShaw — Premium Creative Portfolio

Website portfolio pribadi milik **JhingShaw**, seorang siswa kelas 8 SMP di Bogor yang sedang belajar coding, web development, UI, dan cybersecurity.

Versi ini dibuat lebih premium dari template biasa. Fokusnya bukan hanya “website jadi”, tapi membangun identitas digital yang terlihat serius, modern, aman dipublikasikan, dan tetap jujur sebagai portfolio belajar.

## ✨ Highlight

- Hero section cinematic dengan aurora background
- Glassmorphism + modern dark interface
- Animated terminal card
- Project showcase interaktif
- Skill matrix dengan progress animation
- Learning roadmap yang rapi
- Responsive untuk HP, tablet, dan desktop
- Siap deploy ke Vercel
- Tidak memakai data rahasia atau API key
- Bebas dipublikasikan oleh pemilik

## 🧠 Identitas Portfolio

Portfolio ini menampilkan JhingShaw sebagai:

> Student Developer & Cybersecurity Learner

Fokus belajar:

- HTML, CSS, dan JavaScript
- React dan Vite
- UI design modern
- GitHub workflow
- Dasar keamanan web
- Project kecil yang bisa dipublikasikan

## 🚀 Tech Stack

- **React**
- **Vite**
- **Framer Motion**
- **Custom CSS**
- **Responsive Design**

## 📁 Struktur Project

```txt
jhingshaw-portfolio-premium/
├─ index.html
├─ package.json
├─ README.md
├─ LICENSE.md
└─ src/
   ├─ main.jsx
   ├─ App.jsx
   └─ index.css
```

## 🛠️ Jalankan di Lokal

```bash
npm install
npm run dev
```

## 📦 Build Production

```bash
npm run build
```

Output production akan dibuat di folder:

```txt
dist/
```

## 🌐 Deploy ke Vercel

1. Upload semua file ke repository GitHub.
2. Buka Vercel.
3. Klik **Add New Project**.
4. Import repository GitHub.
5. Pilih framework **Vite**.
6. Pastikan:
   - Build Command: `npm run build`
   - Output Directory: `dist`
7. Klik **Deploy**.

## ✏️ Cara Edit Konten

Buka file:

```txt
src/App.jsx
```

Bagian penting yang bisa diedit:

```js
const profile = {...}
const projects = [...]
const skills = [...]
const roadmap = [...]
```

## 🔐 Catatan Keamanan Publikasi

Sebelum publish, jangan pernah memasukkan:

- Password
- Token API
- Cookie/session
- Nomor HP pribadi
- Alamat rumah lengkap
- Screenshot dashboard private
- Data bug bounty yang belum boleh diungkap

## © Hak Cipta

Copyright © 2026 **JhingShaw**.

Website ini dibuat sebagai portfolio pribadi dan boleh dipublikasikan secara gratis oleh pemiliknya. Identitas, teks personal, dan konten portfolio tidak boleh diklaim ulang oleh pihak lain tanpa izin.

Lihat detail di file [LICENSE.md](./LICENSE.md).
