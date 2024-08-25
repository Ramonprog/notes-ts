import { FakeDataItem } from "../types";

export function NotesCard({ note }: { note: FakeDataItem }) {

  const colors = note.colors
  // const position = note.position

  return (
    <div className="card" style={{ backgroundColor: colors.colorBody }}>
      <div
        className="card-header"
        style={{ backgroundColor: colors.colorHeader }}
      ></div>

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