// NotesContext.tsx
import React, { createContext, useState, ReactNode, useContext } from 'react';
import { NotesContextType, Colors, NotesData } from '../types/index';

const NotesContext = createContext<NotesContextType | undefined>(undefined);

export const NotesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [notes, setNotes] = useState<NotesData[]>([]);

  const addNote = (colors: Colors) => {
    const newNote: NotesData = {
      $id: notes.length + 1,
      body: '',
      colors,
      position: { x: 0, y: 0 },
    };
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  return (
    <NotesContext.Provider value={{ notes, addNote }}>
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
