import { handsFreeBrand } from "../../../../constant";
import OverlayForBanner from "../OverlayForBanner";

const HandlesFree = () => {
  return (
    <div className='border md:p-10 p-5'>
      {/* brands */}
      <div className=''>
        <h3 className='text-slate-600 text-3xl my-3 font-bold'>
          Best of handsfree brands
        </h3>
        <div className='grid md:grid-cols-5 grid-cols-2 md:gap-5 gap-2 rounded'>
          {handsFreeBrand.map((handsFreeBrand) => (
            <OverlayForBanner
              key={handsFreeBrand.id}
              des={handsFreeBrand.des}
              src={handsFreeBrand.image}
              title={handsFreeBrand.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HandlesFree;
