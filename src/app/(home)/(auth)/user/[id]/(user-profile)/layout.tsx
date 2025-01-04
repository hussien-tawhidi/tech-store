import UserProfileMenu from "@/components/auth/user-profile/UserProfileMenu";
const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='grid grid-cols-5'>
      <div className='lg:col-span-1 sm:col-span-2 col-span-5 sm:block hidden'>
        <UserProfileMenu />
      </div>
      <div className='lg:col-span-4 sm:col-span-3 sm:p-10 p-0 col-span-5'>
        {children}
      </div>
    </div>
  );
};

export default UserLayout;
