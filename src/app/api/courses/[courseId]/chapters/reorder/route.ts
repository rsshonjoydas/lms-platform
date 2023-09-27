import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

import prismadb from '@/lib/prismadb';

export async function PUT(req: Request, { params }: { params: { courseId: string } }) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const { list } = await req.json();

    const ownCourse = await prismadb.course.findUnique({
      where: {
        id: params.courseId,
        userId,
      },
    });

    if (!ownCourse) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    // Create an array of promises for chapter updates
    const updatePromises = list.map(async (item: any) => {
      await prismadb.chapter.update({
        where: { id: item.id },
        data: { position: item.position },
      });
    });

    // Await all chapter updates in parallel
    await Promise.all(updatePromises);

    return new NextResponse('Success', { status: 200 });
  } catch (error) {
    console.log('[REORDER]', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
