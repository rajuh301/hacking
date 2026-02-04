// src/app/api/attendance/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
    try {
        const registerUser = await prisma.faceUser.findMany();
        return NextResponse.json(registerUser);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}
