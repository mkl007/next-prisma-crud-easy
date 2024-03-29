"use client"

import React, { useState, useRef } from 'react'
import { useNotes } from '../context/NoteContext'

function NoteForm() {
    const [title, setTitle] = useState()
    const [content, setContent] = useState()
    const titleRef = useRef<HTMLElement>(null)   

    const { createNote } = useNotes()

    return (
        <form onSubmit={async (e) => {
            e.preventDefault();
            await createNote({ title, content, });
            setTitle("");
            setContent("");
            titleRef.current?.focus();
        }}

        >
            <input
                type="text"
                name='title'
                autoFocus
                placeholder='Title'
                className='w-full px-4 py-2 text-black bg-white rounded-md f
                ocus:outline-none focus-ring-2 focus:ring-blue-600 my-2'
                onChange={(e) => setTitle(e.target.value)}
                value={title} 
                ref={titleRef}
                />
                

            <textarea
                name='content'
                autoFocus
                placeholder='Content'
                className='w-full px-4 py-2 text-black bg-white rounded-md f
                ocus:outline-none focus-ring-2 focus:ring-blue-600 my-2'
                onChange={(e) => setContent(e.target.value)}
                value={content}></textarea>
            <button
                className='px-5 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700'>
                Create
            </button>
        </form>
    )
}

export default NoteForm