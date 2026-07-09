"use client";
import TodoForm from"../component/todoForm";
import { useRouter } from "next/navigation";

export default function CreateTodoPage() {
  const router = useRouter();

  const handleCreateSubmit = async (title: string, description: string) => {
    const response = await fetch("http://localhost:3001/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description }),
    });

    if (response.ok) {
      alert("Todo berhasil dibuat!");
      router.push("/"); 
    } else {
      const err = await response.json();
      alert(`Gagal: ${err.message}`);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center  mb-6">Buat Todo Baru</h1>
      <TodoForm buttonLabel="Tambah Todo" onSubmit={handleCreateSubmit} />
    </div>
  );
}