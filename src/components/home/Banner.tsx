import Image from "next/image";

const Banner = () => {
  return (
    <div className='my-10'>
      <div className='overflow-hidden flex items-center  relative w-full'>
        <Image
          src='/banner.png'
          alt='banner image'
          width={1000}
          height={500}
          className='w-full object-cover z-10  h-auto'
        />
        <p className='text-7xl text-white stroke-10 stroke-slate-800 absolute -z-0 inset-0'>BEAT</p>
      </div>
    </div>
  );
};

export default Banner;
