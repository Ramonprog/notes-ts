import { Controls } from '../../components/Controls'
import { NotesCard } from '../../components/NotesCard'
import { useNotes } from '../../context/NotesContext'

export function NotesPage() {
  const { notes } = useNotes()
  return (
    <>
      <div>
        {notes.map(note => (
          <NotesCard key={note.$id} note={note} />
        ))}
        <Controls />
      </div>
    </>
  )
}