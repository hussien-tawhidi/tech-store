"use client";
import TopCateCard from "./TopCateCard";

const TopCategory = () => {
  return (
    <div className='my-10'>
      <div className='grid md:grid-cols-2'>
        <TopCateCard
          category='latop'
          title='Features for labtops'
          description='Here you can find any kind of labtops'
          image='/assets/mac/mac/photo2.jpg'
          className='h-full'
        />
        <div className='grid md:grid-cols-2 grid-cols-1'>
          <TopCateCard
            category='phone'
            title='Features for smart phones'
            description='Choose a smart phone any price'
            image='/assets/IPhone/se/photo2.jpg'
          />
          <TopCateCard
            category='accessories'
            title='Accessories for yours devices'
            description='Your accessorie with any kind of products'
            image='/assets/accessories/battery-safe/s1.jpg'
            className='h-full'
          />
          <TopCateCard
            category='phone'
            title='Features for smart phones'
            description='Choose a smart phone any price'
            image='/assets/AirPods/galaxy-buds2-pro-fit-buds-with-model.jpg'
          />
          <TopCateCard
            category='phone'
            className='h-full'
            title='Features for smart phones'
            description='Choose a smart phone any price'
            image='/assets/watches/galaxy-watch5-os-model.jpg'
          />
        </div>
      </div>
    </div>
  );
};

export default TopCategory;
