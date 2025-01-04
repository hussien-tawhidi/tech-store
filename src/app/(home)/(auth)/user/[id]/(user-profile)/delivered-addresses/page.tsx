import { IoLocation } from "react-icons/io5";

const UserDelivereAddressesPage = () => {
  return (
    <div className='text-slate-600'>
      <p className='h-1 font-semibold md:text-5xl text-xl mb-20'>
        Delivered addresses
      </p>
      <div className='flex items-center justify-center h-[30vh] bg-slate-100'>
        <p className='flex items-center justify-center flex-col gap-3'>
          <IoLocation className='w-10 h-10' />
          You have no delivered addresses. You can add new addresses by tapping
          on the plus icon below.
        </p>
      </div>
    </div>
  );
};

export default UserDelivereAddressesPage;
