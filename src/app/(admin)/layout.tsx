import SideBar from "@/components/admin/SideBar";
import { auth } from "../../../auth";
import { Button } from "@/components/ui/button";
import { IoStorefrontOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import Link from "next/link";

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();
  if (session?.user?.role === "admin")
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
  return (
    <div className='h-[100vh] flex items-center justify-center'>
      <div className='w-full md:w-1/3 mx-auto'>
        <div className='flex flex-col p-5 rounded-lg shadow bg-white'>
          <div className='flex flex-col items-center text-center'>
            <div className='inline-block p-4 bg-red-50 rounded-full'>
              <svg
                className='w-12 h-12 fill-current text-red-500'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'>
                <path d='M0 0h24v24H0V0z' fill='none' />
                <path d='M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z' />
              </svg>
            </div>
            <h2 className='mt-2 font-semibold text-gray-800'>
              Your not admin, Only administrator could be able to access this
              pages
            </h2>
            <p className='mt-2 text-sm text-gray-600 leading-relaxed'>
              If you cliam to be administrator, you must contact with our
              services, then the could add you to administrators and you could
              be able to access this pages
            </p>
          </div>

          <div className='flex items-center mt-3 capitalize'>
            <Button className='flex-1 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md'>
              <Link href='/' className='flex items-center gap-2'>
                <IoStorefrontOutline /> Store
              </Link>
            </Button>

            <Button className='flex-1  px-4 py-2 ml-2 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-md'>
              <Link
                href={`/user/${session?.user?._id}/profile`}
                className='flex items-center gap-2'>
                <CiUser /> Profile
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
