import Image from "next/image";

const ProductLists = () => {
  return (
    <div className='overflow-hidden w-full m-5 z-10'>
      <table className='w-full border-collaps text-left text-sm text-gray-500'>
        <thead className=''>
          <tr>
            <th
              scope='col'
              className='px-6 py-4 font-medium text-gray-600 dark:text-gray-300'>
              Name
            </th>
            <th
              scope='col'
              className='px-6 py-4 font-medium text-gray-600 dark:text-gray-300'>
              Status
            </th>
            <th
              scope='col'
              className='px-6 py-4 font-medium text-gray-600 dark:text-gray-300'>
              Role
            </th>
            <th
              scope='col'
              className='px-6 py-4 font-medium text-gray-600 dark:text-gray-300'>
              Team
            </th>
            <th
              scope='col'
              className='px-6 py-4 font-medium text-gray-600'></th>
          </tr>
        </thead>
        <tbody className='dark:divide-gray-400'>
          <tr className='hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer border-b'>
            <th className='flex gap-3 px-6 py-4 font-normal text-gray-900 dark:text-gray-400'>
              <div className='relative h-10 w-10'>
                <Image
                  width={200}
                  height={200}
                  className='h-full w-full rounded-full object-cover object-center'
                  src='/assets/airpods_3rd_gen__dhy5bknhvtqq_large.jpg'
                  alt='Photo'
                />
              </div>
              <div className='text-sm'>
                <div className='font-medium text-gray-700 dark:text-gray-500'>
                  apple
                </div>
                <div className='text-gray-400 dark:text-gray-300'>
                  AirPods (3rd Generation)
                </div>
              </div>
            </th>
            <td className='px-6 py-4'>
              <span className='inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold'>
                359$
              </span>
            </td>
            <td className='px-6 py-4 dark:text-gray-400'>Accessories</td>
            <td className='px-6 py-4'>
              <div className='flex gap-2'>
                <span className='inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-red-500 dark:hover:text-red-700 transition-all hover:text-red-600 dark:bg-blue-50'>
                  electronic
                </span>
              </div>
            </td>
            <td className='px-6 py-4'>
              <div className='flex justify-end gap-4'>
                <span x-data="{ tooltip: 'Delete' }">
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='h-6 w-6 hover:text-gray-300 cursor-pointer transition-all'
                    x-tooltip='tooltip'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                    />
                  </svg>
                </span>
                <span x-data="{ tooltip: 'Edite' }">
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='h-6 w-6  hover:text-gray-300 cursor-pointer transition-all'
                    x-tooltip='tooltip'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125'
                    />
                  </svg>
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductLists;
