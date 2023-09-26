// ? Third-party libraries
import { auth } from '@clerk/nextjs';
import { LayoutDashboard } from 'lucide-react';
import { redirect } from 'next/navigation';

// ? Local modules
import { IconBadge } from '@/components/icon-badge';
import prismadb from '@/lib/prismadb';
import DescriptionForm from './_components/description-form';
import TitleForm from './_components/title-form';

// * Type definition for props
interface CourseIdPageProps {
  params: {
    courseId: string;
  };
}

const CourseIdPage: React.FC<CourseIdPageProps> = async ({ params }) => {
  const { userId } = auth();

  if (!userId) {
    return redirect('/');
  }

  try {
    const course = await prismadb.course.findUnique({
      where: {
        id: params.courseId,
      },
    });

    if (!course) {
      return redirect('/');
    }

    // Calculate completion progress
    const requiredFields = [
      course.title,
      course.description,
      course.imageUrl,
      course.price,
      course.categoryId,
    ];

    const totalFields = requiredFields.length;
    const completedFields = requiredFields.filter(Boolean).length;

    const completionText = `(${completedFields}/${totalFields})`;

    return (
      <div className='p-6'>
        <div className='flex items-center justify-between'>
          <div className='flex flex-col gap-y-2'>
            <h1 className='text-2xl font-medium'>Course setup</h1>
            <span className='text-sm text-slate-700'>Complete all fields {completionText}</span>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-16'>
          <div>
            <div className='flex items-center gap-x-2'>
              <IconBadge icon={LayoutDashboard} />
              <h2 className='text-xl'>Customize your course</h2>
            </div>
            <TitleForm initialData={course} courseId={course.id} />
            <DescriptionForm initialData={course} courseId={course.id} />
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching course:', error);
    return redirect('/');
  }
};

export default CourseIdPage;