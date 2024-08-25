import { NotesCard } from '../../components/NotesCard'
import { fakeData as notes } from '../../source/database/fakeData'

export function NotesPage() {
  return (
    <>
      <div>
        {notes.map(note => (
          <NotesCard key={note.$id} note={note} />
        ))}
      </div>
    </>
  )
}