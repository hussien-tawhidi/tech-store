import SideBar from "@/components/admin/SideBar";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className='flex relative'>
        <div className='h-screen sticky top-0'>
          <SideBar />
        </div>
        <div className='w-full'>{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
