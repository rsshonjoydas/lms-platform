import { Chapter, Course, UserProgress } from '@prisma/client';
import { Menu } from 'lucide-react';

import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import CourseSidebar from './course-sidebar';

interface CourseMobileSidebarProps {
  course: Course & {
    chapters: (Chapter & {
      userProgress: UserProgress[] | null;
    })[];
  };
  progressCount: number;
}

export const CourseMobileSidebar = ({ course, progressCount }: CourseMobileSidebarProps) => (
  <Sheet>
    <SheetTrigger className='md:hidden pr-4 hover:opacity-75 transition'>
      <Menu />
    </SheetTrigger>
    <SheetClose>
      <SheetContent side='left' className='p-0 bg-white w-72'>
        <CourseSidebar course={course} progressCount={progressCount} />
      </SheetContent>
    </SheetClose>
  </Sheet>
);
