import { NotesProvider } from "./context/NotesContext"
import { NotesPage } from "./pages/notes"

function App() {

  return (
    <div id="app">
      <NotesProvider>
        <NotesPage />
      </NotesProvider>
    </div>
  )
}

export default App
