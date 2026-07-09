"use client";
import { use } from "react"; 
import TodoForm from "../../component/todoForm";
import { useFetchTodo } from "../../hooks/useFetchTodo";
import { useUpdateTodoForm } from "../../hooks/useUpdateTodoForm";

interface EditPageProps {
  params: Promise<{ id: string }>;
}

export default function EditTodoPage({ params }: EditPageProps) {
  const unwrappedParams = use(params);
  const id = unwrappedParams.id;
  
  const todo = useFetchTodo(id);
  const { handleUpdateSubmit } = useUpdateTodoForm();

  const handleSubmit = async (title: string, description: string) => {
    await handleUpdateSubmit(id, title, description);
  };

  if (!todo) return <p className="text-center p-6">Loading data lama...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Edit Todo</h1>
      <TodoForm
        initialTitle={todo.title}
        initialDescription={todo.description}
        buttonLabel="Simpan Perubahan"
        onSubmit={handleSubmit}
      />
    </div>
  );
}