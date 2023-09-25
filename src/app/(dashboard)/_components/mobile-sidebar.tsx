import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Sidebar from './sidebar';

const MobileSidebar = () => (
  <Sheet>
    <SheetTrigger className='md:hidden pr-4 hover:opacity-75 transition'>
      <Menu />
    </SheetTrigger>
    <SheetClose>
      <SheetContent side='left' className='p-0 bg-white'>
        <Sidebar />
      </SheetContent>
    </SheetClose>
  </Sheet>
);

export default MobileSidebar;
