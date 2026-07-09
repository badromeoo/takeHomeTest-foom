# Backend — Todo API

Express + Sequelize + SQLite.

## Setup

```bash
npm install
cp .env.example .env
npm run migrate
npm run dev
```

## Scripts
`npm run dev`  | Jalankan server development     
`npm run migrate`| Jalankan migration database  
`npm run build` | Compile TypeScript ke `dist/` 
`npm start`     | Jalankan build production         

## Environment
File `.env` (salin dari `.env.example`):

```env
PORT=3001
```

## Database
- Engine: SQLite
- File: `./database/database.sqlite` (dibuat otomatis setelah migration)
- Migration wajib dijalankan sebelum start server: `npm run migrate`
