import { homeApplliance } from "../../../../constant";
import OverlayForBanner from "../OverlayForBanner";
import ApplianceSlider from "./ApplianceSlider";

const Applliance = () => {
  return (
    <div className='my-10 border p-3'>
      <h4 className='md:text-3xl text-xl font-semibold font-serif my-5'>
        Applliance <span className='font-light text-sm'>home & kitchen</span>
      </h4>
      <div className='grid md:gap-4 gap-2 md:grid-cols-6 sm:grid-cols-3 grid-cols-2'>
        {homeApplliance.map((a) => (
          <OverlayForBanner
            key={a.id}
            src={a.image}
            title={a.title}
            des={a.des}
          />
        ))}
      </div>
      <ApplianceSlider />
    </div>
  );
};

export default Applliance;
