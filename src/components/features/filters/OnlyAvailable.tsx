import { Checkbox } from "../../ui/checkbox"; // Update the path to your Checkbox component
import StyledCheckbox from "../StyledChecbox";

interface Props {
  onlyAvailable: boolean;
  setOnlyAvailable: (onlyAvailable: boolean) => void;
}

const OnlyAvailable = ({ onlyAvailable, setOnlyAvailable }: Props) => {
  const handleToggle = () => {
    setOnlyAvailable(!onlyAvailable);
    console.log("Only Available Products:", !onlyAvailable);
  };

  return (
    <div className='p-4 border-b rounded'>
      <div className='flex items-center gap-2'>
        <StyledCheckbox checked={onlyAvailable} onToggle={handleToggle} />
        <label htmlFor='only-available' className='cursor-pointer'>
          Only Available Products
        </label>
      </div>
    </div>
  );
};

export default OnlyAvailable;
