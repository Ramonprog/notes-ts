import { Plus } from "lucide-react";
import { colorsOptions } from "../source/database/colors";
import { useNotes } from "../context/NotesContext";

export function AddButton() {
  const { addNote } = useNotes();



  return <button id="add-btn" onClick={() => addNote(colorsOptions[0])}>
    <Plus size={20} />
  </button>;
}