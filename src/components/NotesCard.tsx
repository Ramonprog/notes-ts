import { Trash2 } from "lucide-react";
import { FakeDataItem } from "../types";
import { useEffect, useRef } from "react";

export function NotesCard({ note }: { note: FakeDataItem }) {

  const colors = note.colors
  const position = note.position

  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    autoGrow(textAreaRef.current)
  }, [])

  function autoGrow(textArea: HTMLTextAreaElement | null) {
    if (textArea) {
      textArea.style.height = "auto"; // Reseta a altura
      textArea.style.height = textArea.scrollHeight + "px"; // Define a nova altura
    }
  }

  return (
    <div className="card" style={{ backgroundColor: colors.colorBody, left: position.x, top: position.y }}>
      <div
        className="card-header"
        style={{ backgroundColor: colors.colorHeader }}
      >
        <Trash2 size={20} color={colors.colorText} />
      </div>

      <div className="card-body">
        <textarea
          ref={textAreaRef}
          style={{ color: colors.colorText }}
          defaultValue={note.body}
          onInput={() => autoGrow(textAreaRef.current)}
        >

        </textarea>
      </div>
    </div>
  );
}