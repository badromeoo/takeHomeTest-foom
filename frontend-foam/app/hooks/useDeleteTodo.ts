'use client';

import { Dispatch, SetStateAction } from 'react';
import { apiUrl } from '../../lib/api';

interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export function useDeleteTodo() {
  const handleDelete = async (
    id: number,
    setData: Dispatch<SetStateAction<Todo[] | null>>
  ) => {
    const konfirmasi = confirm('Apakah Anda yakin ingin menghapus todo ini?');
    if (!konfirmasi) return;

    try {
      const response = await fetch(apiUrl(`/todos/${id}`), {
        method: 'DELETE',
      });
      if (response.ok) {
        setData((prevData) =>
          prevData ? prevData.filter((todo) => todo.id !== id) : null
        );
      } else {
        const errResult = await response.json();
        alert(`Gagal menghapus: ${errResult.message}`);
      }
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return { handleDelete };
}
