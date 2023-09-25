import { UserButton } from '@clerk/nextjs';

const NavbarRoutes = () => (
  <div className='flex gap-x-2 ml-auto'>
    <UserButton />
  </div>
);

export default NavbarRoutes;
