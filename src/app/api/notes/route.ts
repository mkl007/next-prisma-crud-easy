import { NextResponse } from "next/server";
import { prisma } from "../..//libs/prisma";
import { Erica_One } from "next/font/google";

export async function GET() {
  try {
    const notes = await prisma.note.findMany();
    return NextResponse.json(notes);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
}

export async function POST(request: Request) {
  try {
    const { title, content } = await request.json();
    const newNotes = await prisma.note.create({
      data: {
        title,
        content
      }
    });
    return NextResponse.json(newNotes);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
}

export async function DELETE() {
  try {
    const notes = await prisma.note.deleteMany();
    return NextResponse.json(notes);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
}

