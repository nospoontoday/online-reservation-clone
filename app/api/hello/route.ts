import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server';
const prisma = new PrismaClient();

export async function GET(request: Request) {
    const restaurants = await prisma.restaurant.findMany()

    return NextResponse.json(restaurants)
}