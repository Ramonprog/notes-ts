import { Trash2 } from "lucide-react";
import { NotesData, Position } from "../types";
import { useEffect, useRef, useState } from "react";

export function NotesCard({ note }: { note: NotesData }) {

  const [position, setPosition] = useState(note.position)

  const colors = note.colors
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const mouseStartPos = useRef<Position>({ x: 0, y: 0 });

  const cardRef = useRef<HTMLDivElement>(null);

  const setZIndex = (selectedCard: HTMLDivElement | null): void => {
    if (!selectedCard) return;

    selectedCard.style.zIndex = '999';

    Array.from(document.getElementsByClassName('card')).forEach((card) => {
      if (card !== selectedCard) {
        const element = card as HTMLDivElement;
        element.style.zIndex = (parseInt(selectedCard.style.zIndex, 10) - 1).toString();
      }
    });
  };

  useEffect(() => {
    autoGrow(textAreaRef.current)
  }, [])

  function autoGrow(textArea: HTMLTextAreaElement | null) {
    if (textArea) {
      textArea.style.height = "auto"; // Reseta a altura
      textArea.style.height = textArea.scrollHeight + "px"; // Define a nova altura
    }
  }

  function handleMouseDown(e: React.MouseEvent<HTMLDivElement>) {
    // Define a posição inicial do mouse
    mouseStartPos.current = { x: e.clientX, y: e.clientY };

    // Adiciona o ouvinte de eventos para o movimento do mouse
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    setZIndex(cardRef.current);
  }

  function handleMouseMove(e: MouseEvent) {

    if (cardRef.current) {
      // Calcula a direção do movimento
      const mouseMoveDir = {
        x: mouseStartPos.current.x - e.clientX,
        y: mouseStartPos.current.y - e.clientY,
      };

      // Atualiza a posição inicial para o próximo movimento
      mouseStartPos.current = { x: e.clientX, y: e.clientY };

      // Atualiza a posição do card
      setPosition(prevPosition => ({
        x: prevPosition.x - mouseMoveDir.x,
        y: prevPosition.y - mouseMoveDir.y,
      }));
    }
  }

  function handleMouseUp() {
    // Remove os ouvintes de eventos quando o mouse é solto
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  }


  return (
    <div onFocus={() => setZIndex(cardRef.current)} ref={cardRef} onMouseDown={handleMouseDown} className="card" style={{ backgroundColor: colors.colorBody, left: position.x, top: position.y }}>
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