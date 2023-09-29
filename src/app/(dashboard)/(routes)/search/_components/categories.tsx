'use client';

import { Category } from '@prisma/client';
import { IconType } from 'react-icons';
import {
  FcEngineering,
  FcMultipleDevices,
  FcMusic,
  FcOldTimeCamera,
  FcSalesPerformance,
  FcSportsMode,
} from 'react-icons/fc';

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { CategoryItem } from './category-item';

interface CategoriesProps {
  items: Category[];
}

const iconMap: Record<Category['name'], IconType> = {
  Music: FcMusic,
  Photography: FcOldTimeCamera,
  Fitness: FcSportsMode,
  Accounting: FcSalesPerformance,
  'Computer Science': FcMultipleDevices,
  Engineering: FcEngineering,
};

const Categories = ({ items }: CategoriesProps) => (
  <ScrollArea>
    <ScrollBar orientation='horizontal' />
    <div className='flex items-center gap-x-2 pb-4'>
      {items.map((item) => (
        <CategoryItem key={item.id} label={item.name} icon={iconMap[item.name]} value={item.id} />
      ))}
    </div>
  </ScrollArea>
);

export default Categories;
