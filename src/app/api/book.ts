// pages/api/book.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: { method: string; body: { email: any; phoneNumber: any; turfType: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { booking?: any; error?: string; }): void; new(): any; }; }; }) {
  if (req.method === 'POST') {
    const { email, phoneNumber, turfType } = req.body;

    try {
      const booking = await prisma.booking.create({
        data: { email, phoneNumber, turfType },
      });
      res.status(201).json({ booking });
    } catch (error) {
      res.status(500).json({ error: 'Error creating booking' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
