import { Note } from "@prisma/client"


export type CreateNote = Omit<Note, 'id' | 'createdAt'| 'UpdatedAt'>
export type UpdateNote = Partial<CreateNote>;