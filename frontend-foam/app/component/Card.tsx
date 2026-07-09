"use client";
import Link from "next/link"; // 1. Import Link dari Next.js

type CardProps = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  onToggleStatus: () => void;
  onDelete: () => void;
};

function Card({ id, title, description, completed, onToggleStatus, onDelete }: CardProps) {
  return (
    <div className="text-center bg-amber-500 rounded-xl overflow-hidden shadow-md flex flex-col justify-between p-6">
      <div>
        <p className="text-xl font-bold text-slate-800 mb-2">{title}</p>
        <p className="text-slate-700 mb-4">{description}</p>
      </div>

      {/* Kontainer Tombol */}
      <div className="flex flex-col gap-2 mt-auto">
        
        {/* 2. Tombol Status (Dibuat full width di baris atas) */}
        <button 
          onClick={onToggleStatus} 
          className={`w-full px-4 py-2 rounded text-white font-medium transition-colors ${
            completed ? 'bg-green-500 hover:bg-green-600' : 'bg-amber-600 hover:bg-amber-700'
          }`}
        >
          {completed ? "Selesai" : "Belum Selesai"}
        </button>

        {/* Baris Bawah: Tombol Edit & Delete Berdampingan */}
        <div className="grid grid-cols-2 gap-2">
          
          {/* 3. Tombol Update menggunakan Link untuk navigasi */}
          {/* Ubah '/edit/' sesuai dengan struktur folder routing Next.js Anda */}
          <Link 
            href={`/formUpdate/${id}`} 
            className="px-4 py-2 rounded text-white font-medium bg-blue-600 hover:bg-blue-700 transition-colors text-center block"
          >
            Edit
          </Link>

          {/* Tombol Delete */}
          <button 
            onClick={onDelete} 
            className="px-4 py-2 rounded text-white font-medium bg-red-800 hover:bg-red-900 transition-colors"
          >
            Delete
          </button>
        </div>

      </div>
    </div>
  );
}

export default Card;