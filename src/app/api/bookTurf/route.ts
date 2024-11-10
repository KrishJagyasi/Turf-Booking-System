// pages/api/book.ts
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email, phoneNumber, turfType } = body;
  try {
    await prisma.booking.create({
      data: { email, phoneNumber, turfType },
    });
    NextResponse.json({
      message: "Booking successfull",
      status: 200
    })
  } catch (error) {
    NextResponse.json({
      error: 'Error creating booking'
    });
  }
}

