import prismadb from '@/lib/prismadb';
import Categories from './_components/categories';

const SearchPage = async () => {
  const categories = await prismadb.category.findMany({
    orderBy: {
      name: 'asc',
    },
  });

  return (
    <div className='p-6 space-y-4'>
      <Categories items={categories} />
    </div>
  );
};

export default SearchPage;
