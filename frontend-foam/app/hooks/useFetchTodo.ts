'use client';

import { useEffect, useState } from 'react';

interface TodoData {
  title: string;
  description: string;
}

export function useFetchTodo(id: string) {
  const [todo, setTodo] = useState<TodoData | null>(null);

  useEffect(() => {
    const fetchOldData = async () => {
      const res = await fetch(`http://localhost:3001/api/todos/${id}`);
      if (res.ok) {
        const data = await res.json();
        setTodo(data);
      }
    };
    fetchOldData();
  }, [id]);

  return todo;
}
