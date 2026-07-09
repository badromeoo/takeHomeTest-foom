"use client";
import { useEffect, useState } from "react";
import Card from "./component/Card";
import { useDeleteTodo } from "./hooks/useDeleteTodo";
import { useUpdateTodo } from "./hooks/useUpdateTodo";

interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export default function Home() {
  const [data, setData] = useState<Todo[] | null>(null);
  const [loading, setLoading] = useState(true);
  const { handleDelete } = useDeleteTodo();
  const { handleToggleStatus } = useUpdateTodo();
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/todos", { 
        method: "GET",
        cache: "no-store" 
      });
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div className="p-4">Loading data...</div>;
  if (!data || data.length === 0) return <div className="p-4">Tidak ada data todo.</div>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Daftar Todo</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.map((todo) => (
          <Card
            key={todo.id}
            id={todo.id}
            title={todo.title}
            description={todo.description}
            completed={todo.completed}
            onToggleStatus={() => handleToggleStatus(todo.id, todo.completed, setData)}
            onDelete={() => handleDelete(todo.id, setData)}
          />
        ))}
      </div>
    </div>
  );
}