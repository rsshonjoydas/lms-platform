import Logo from './logo';
import SidebarRoutes from './sidebar-routes';

const Sidebar = () => (
  <div className='h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm'>
    <div className='p-6 -my-11'>
      <Logo />
    </div>
    <div className='flex flex-col w-full'>
      <SidebarRoutes />
    </div>
  </div>
);

export default Sidebar;
