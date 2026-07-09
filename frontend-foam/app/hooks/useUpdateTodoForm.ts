'use client';

import { useRouter } from 'next/navigation';

export function useUpdateTodoForm() {
  const router = useRouter();

  const handleUpdateSubmit = async (
    id: string,
    title: string,
    description: string
  ) => {
    const response = await fetch(`http://localhost:3001/api/todos/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description }),
    });

    if (response.ok) {
      alert('Todo berhasil diperbarui!');
      router.push('/');
    } else {
      const err = await response.json();
      alert(`Gagal: ${err.message}`);
    }
  };

  return { handleUpdateSubmit };
}
