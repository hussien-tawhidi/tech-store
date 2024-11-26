import Image from "next/image";
import Team from "./team";

const Hero = () => {
  return (
    <section className='overflow-hidden'>
      <div className='container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:flex-row lg:justify-between'>
        <div className='flex items-center justify-center p-6 mt-8'>
          <Image
            src='/dashboardHero.png'
            alt=''
            width={700}
            height={700}
            className='object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128'
          />
        </div>
        <div className='flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left'>
          <h1 className='text-5xl font-bold leading-none sm:text-6xl'>
            Let's Work
            <span className='dark:text-red-600'>Togther</span>To serve better
          </h1>
          <p className='mt-6 mb-8 text-lg sm:mb-12'>
            If we tried our bests
            <br className='hidden md:inline lg:hidden' />
            we can improve and could promot our store
          </p>
        </div>
      </div>
      <Team />
    </section>
  );
};

export default Hero;
