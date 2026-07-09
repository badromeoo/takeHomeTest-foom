# Take Home Test Foam — Todo App

Aplikasi Todo full-stack: **Express + Sequelize + SQLite** (backend) dan **Next.js** (frontend).

## Prasyarat

- [Node.js](https://nodejs.org/) v18 atau lebih baru
- npm

## Port

| Service  | Port | URL                      |
| -------- | ---- | ------------------------ |
| Frontend | 3000 | http://localhost:3000    |
| Backend  | 3001 | http://localhost:3001    |

## Cara Menjalankan Project

Jalankan backend terlebih dahulu, lalu frontend di terminal terpisah.

### 1. Backend

```bash
cd backend-foam
npm install
cp .env.example .env
npm run migrate
npm run dev
```

Backend berjalan di **http://localhost:3001**.

**Penting:** Migration (`npm run migrate`) harus dijalankan **sebelum** `npm run dev` agar tabel database SQLite dibuat.

### 2. Frontend

Buka terminal baru:

```bash
cd frontend-foam
npm install
cp .env.example .env.local
npm run dev
```

Frontend berjalan di **http://localhost:3000**.

Buka browser ke http://localhost:3000 untuk menggunakan aplikasi Todo.

## Environment Variables

### Backend (`backend-foam/.env`)

Salin dari `.env.example`:

```env
PORT=3001
```

Saat ini backend hanya membaca variabel `PORT`. Koneksi database SQLite dan CORS origin masih dikonfigurasi di kode (bukan lewat env).

### Frontend (`frontend-foam/.env.local`)

Salin dari `.env.example`:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

Variabel ini mengatur base URL API backend. Jika tidak di-set, frontend otomatis memakai default `http://localhost:3001/api`. Semua request API dikelola lewat `frontend-foam/lib/api.ts`.

## API Backend

Base URL: `http://localhost:3001/api`

| Method | Endpoint         | Deskripsi        |
| ------ | ---------------- | ---------------- |
| GET    | `/api/todos`     | List semua todo  |
| GET    | `/api/todos/:id` | Detail todo      |
| POST   | `/api/todos`     | Buat todo baru   |
| PUT    | `/api/todos/:id` | Update todo      |
| DELETE | `/api/todos/:id` | Hapus todo       |

## Struktur Project

```
takeHomeTestFoam/
├── backend-foam/     # Express API + SQLite
│   ├── config/       # Konfigurasi Sequelize CLI
│   ├── migrations/   # Database migrations
│   └── src/          # Source code backend
└── frontend-foam/    # Next.js UI
    ├── app/          # Pages, components, hooks
    └── lib/          # Helper API (api.ts)
```
## Architecture Design Decisions
Pada frontend saya memisahkan hooks dan api agar mudah di maintenence jika project membesar dan mencari bug.
Pada Backend saya membuat design mirip seperti java springboot karena saya ingin setiap file hanya fokus pada satu tugas, itu akan project lebih mudah di maintain dan lebih rapi.
## Troubleshooting

**Backend error "Database connected" tidak muncul / tabel tidak ada**
→ Pastikan sudah menjalankan `npm run migrate` di folder `backend-foam`.

**Frontend tidak bisa fetch data**
→ Pastikan backend sudah jalan di port 3001 dan frontend di port 3000 (CORS backend hanya mengizinkan origin `http://localhost:3000`).

**Port sudah dipakai**
→ Ubah `PORT` di `backend-foam/.env`, lalu sesuaikan `NEXT_PUBLIC_API_URL` di `frontend-foam/.env.local`.

## Pengembangan Selanjutnya (Improvement Ideas)

Ide yang bisa dikembangkan:

### Validasi Data dengan Zod
- **Backend:** Validasi request body (`title`, `description`, `completed`) di controller atau middleware sebelum disimpan ke database. Response error menjadi lebih konsisten dan terstruktur.
- **Frontend:** Validasi form create/update todo sebelum submit — tampilkan pesan error di UI. Schema Zod bisa dibagi (shared types)

### Arsitektur & Code Quality
- Pisahkan business logic dari controller ke service layer di backend.
- Buat API client terpusat di frontend (bukan hanya helper URL, tapi juga wrapper fetch dengan error handling).

### Fitur Aplikasi
- Filter todo berdasarkan status (completed / pending).
- Pagination atau infinite scroll untuk daftar todo yang banyak.
- Autentikasi user agar setiap user hanya melihat todo miliknya sendiri.
