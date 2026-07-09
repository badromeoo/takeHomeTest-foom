'use client';

import { Dispatch, SetStateAction } from 'react';

interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export function useUpdateTodo() {
  const handleToggleStatus = async (
    id: number,
    currentStatus: boolean,
    setData: Dispatch<SetStateAction<Todo[] | null>>
  ) => {
    const nextStatus = !currentStatus;
    try {
      const response = await fetch(`http://localhost:3001/api/todos/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ completed: nextStatus }),
      });
      if (response.ok) {
        setData((prevData) =>
          prevData
            ? prevData.map((todo) =>
                todo.id === id ? { ...todo, completed: nextStatus } : todo
              )
            : null
        );
      } else {
        const errResult = await response.json();
        alert(`Gagal mengupdate: ${errResult.message}`);
      }
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  return { handleToggleStatus };
}
