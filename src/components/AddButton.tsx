import { Plus } from "lucide-react";
import { colorsOptions } from "../source/database/colors";
import { useNotes } from "../context/NotesContext";
import { Color } from "./Color";
import { useState } from "react";
import { Colors } from "../types";

export function AddButton() {
  const { addNote } = useNotes();
  const [selectedColor, setSelectedColor] = useState<Colors | null>(null);

  function handleAddCard() {
    if (!selectedColor) {
      return alert("Please select a color");
    }
    addNote(selectedColor);
  }

  return (
    <>
      <button id="add-btn" onClick={handleAddCard}>
        <Plus size={20} />
      </button>
      {colorsOptions.map((color) => (
        <Color key={color.id} color={color} handleAddColor={setSelectedColor} />
      ))}
    </>


  )
}