# Portfolio 2026 Ready Deploy

Website portfolio modern berbasis Vite + React + Framer Motion.

## Cara jalanin lokal

```bash
npm install
npm run dev
```

## Cara build

```bash
npm run build
```

## Deploy ke Vercel

1. Upload semua file ini ke repository GitHub.
2. Buka Vercel.
3. Klik **Add New Project**.
4. Import repository GitHub.
5. Framework akan terdeteksi sebagai **Vite**.
6. Build Command: `npm run build`
7. Output Directory: `dist`
8. Klik **Deploy**.

## Edit data portfolio

Buka file:

```txt
src/App.jsx
```

Ubah bagian:

```js
const profile = {...}
const projects = [...]
const skills = [...]
const experience = [...]
```
