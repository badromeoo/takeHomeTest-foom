"use client";
import { FormEvent, useState, useEffect } from "react";

// Definisikan properti apa saja yang dibutuhkan oleh Form ini
type TodoFormProps = {
  initialTitle?: string;
  initialDescription?: string;
  buttonLabel: string; // Misal: "Tambah" atau "Simpan Perubahan"
  onSubmit: (title: string, description: string) => Promise<void>;
};

export default function TodoForm({
  initialTitle = "",
  initialDescription = "",
  buttonLabel,
  onSubmit,
}: TodoFormProps) {
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);
  const [loading, setLoading] = useState(false);

  // Jika data awal berubah (berguna saat data edit baru selesai di-fetch dari API)
  useEffect(() => {
    setTitle(initialTitle);
    setDescription(initialDescription);
  }, [initialTitle, initialDescription]);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!title.trim()) return alert("Title tidak boleh kosong");

    setLoading(true);
    try {
      // Lempar data title dan description ke fungsi onSubmit milik parent page
      await onSubmit(title, description);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto p-6 bg-white rounded-xl shadow-md border">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Masukkan judul todo..."
          className="w-full px-3 py-2 border text-black rounded-lg focus:outline-amber-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Masukkan deskripsi..."
          rows={3}
          className="w-full px-3 py-2 border rounded-lg text-black focus:outline-amber-500"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-lg transition-colors disabled:bg-slate-300"
      >
        {loading ? "Processing..." : buttonLabel}
      </button>
    </form>
  );
}