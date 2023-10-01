import { Category, Chapter, Course } from '@prisma/client';

import { getProgress } from '@/actions/get-progress';
import prismadb from '@/lib/prismadb';

type CourseWithProgressWithCategory = Course & {
  category: Category;
  chapters: Chapter[];
  progress: number | null;
};

type DashboardCourses = {
  completedCourses: CourseWithProgressWithCategory[];
  coursesInProgress: CourseWithProgressWithCategory[];
};

export const getDashboardCourses = async (userId: string): Promise<DashboardCourses> => {
  try {
    const purchasedCourses = await prismadb.purchase.findMany({
      where: {
        userId,
      },
      select: {
        course: {
          include: {
            category: true,
            chapters: {
              where: {
                isPublished: true,
              },
            },
          },
        },
      },
    });

    const courses = purchasedCourses.map(
      (purchase) => purchase.course
    ) as CourseWithProgressWithCategory[];

    // Create an array of promises to fetch progress for each course concurrently
    const progressPromises = courses.map(async (course) => {
      const progress = await getProgress(userId, course.id);
      return { ...course, progress }; // Create a new object with updated progress
    });

    // Use Promise.all to wait for all progress requests to complete
    const coursesWithProgress = await Promise.all(progressPromises);

    const completedCourses = coursesWithProgress.filter((course) => course.progress === 100);
    const coursesInProgress = coursesWithProgress.filter((course) => (course.progress ?? 0) < 100);

    return {
      completedCourses,
      coursesInProgress,
    };
  } catch (error) {
    console.log('[GET_DASHBOARD_COURSES]', error);
    return {
      completedCourses: [],
      coursesInProgress: [],
    };
  }
};
