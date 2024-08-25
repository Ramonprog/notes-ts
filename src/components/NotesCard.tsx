import { Trash2 } from "lucide-react";
import { FakeDataItem } from "../types";

export function NotesCard({ note }: { note: FakeDataItem }) {

  const colors = note.colors
  // const position = note.position

  return (
    <div className="card" style={{ backgroundColor: colors.colorBody }}>
      <div
        className="card-header"
        style={{ backgroundColor: colors.colorHeader }}
      >
        <Trash2 size={20} color={colors.colorText} />
      </div>

      <div className="card-body">
        <textarea
          style={{ color: colors.colorText }}
          defaultValue={note.body}
        >

        </textarea>
      </div>
    </div>
  );
}