# Frontend — Todo App

Antarmuka Todo berbasis **Next.js 16**, **React 19**, dan **Tailwind CSS**.

## Prasyarat

- [Node.js](https://nodejs.org/) v18 atau lebih baru
- Backend API sudah berjalan di `http://localhost:3001` (lihat [README backend](../backend-foom/README.md))

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Aplikasi berjalan di **http://localhost:3000**.

## Environment Variables

Salin `.env.example` ke `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

| Variabel               | Default                        | Deskripsi                          |
| ---------------------- | ------------------------------ | ---------------------------------- |
| `NEXT_PUBLIC_API_URL`  | `http://localhost:3001/api`    | Base URL API backend               |

Jika variabel tidak di-set, frontend otomatis memakai default di atas.

Semua request API dikelola lewat helper `lib/api.ts` — tidak perlu mengubah URL di setiap file fetch.

## Scripts

| Script          | Deskripsi                          |
| --------------- | ---------------------------------- |
| `npm run dev`   | Jalankan server development        |
| `npm run build` | Build production                   |
| `npm start`     | Jalankan build production          |
| `npm run lint`  | Jalankan ESLint                    |

## Struktur Utama

```
frontend-foom/
├── app/
│   ├── page.tsx              # Halaman daftar todo
│   ├── formCreate/           # Form buat todo
│   ├── formUpdate/[id]/      # Form edit todo
│   ├── component/            # Komponen UI
│   └── hooks/                # Custom hooks (fetch, update, delete)
└── lib/
    └── api.ts                # Helper URL API backend
```

## Catatan

- Pastikan backend sudah jalan sebelum membuka frontend, agar data todo bisa dimuat.
- Jika port backend diubah, sesuaikan `NEXT_PUBLIC_API_URL` di `.env.local`.
