import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

import prismadb from '@/lib/prismadb';

export async function PATCH(req: Request, { params }: { params: { courseId: string } }) {
  try {
    const { userId } = auth();
    const { courseId } = params;
    const values = await req.json();

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const course = await prismadb.course.update({
      where: {
        id: courseId,
        userId,
      },
      data: {
        ...values,
      },
    });

    return NextResponse.json(course);
  } catch (error) {
    console.log('[COURSE_ID_PATCH]', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
