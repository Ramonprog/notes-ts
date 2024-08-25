// NotesContext.tsx
import React, { createContext, useState, ReactNode, useContext } from 'react';
import { NotesContextType, Colors, NotesData } from '../types/index';

const NotesContext = createContext<NotesContextType | undefined>(undefined);

export const NotesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [notes, setNotes] = useState<NotesData[]>([]);

  const addNote = (colors: Colors) => {

    const spacing = 50;

    // Calcule a nova posição
    const newPosition = {
      x: notes.length * spacing,
      y: notes.length * spacing,
    };

    const newNote: NotesData = {
      $id: notes.length + 1,
      body: '',
      colors,
      position: newPosition,
    };
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const removeNote = (id: number) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.$id !== id));
  };

  return (
    <NotesContext.Provider value={{ notes, addNote, removeNote }}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = (): NotesContextType => {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error('useNotes must be used within a NotesProvider');
  }
  return context;
};
