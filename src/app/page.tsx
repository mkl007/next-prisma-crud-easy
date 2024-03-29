"use client"

import { useEffect } from 'react'
import NoteForm from './components/NoteForm';
import { useNotes } from './context/NoteContext';
import NoteCards from './components/NoteCards';

function HomePage() {
  const { notes, loadNotes } = useNotes()
  console.log(notes,)

  useEffect(() => {
    loadNotes()
  }, [])
  return (
    <div className=' flex items-center justify-center h-screen'>
      <div>
        <NoteForm />
        {notes.map(note => (
          <NoteCards note={note} key={note.id}/>
        ))}
      </div>
    </div>
  )
}

export default HomePage