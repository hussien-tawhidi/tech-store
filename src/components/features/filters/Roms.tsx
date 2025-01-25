"use client";
import FilterDropdown from "./FilterDropdown";

interface Props {
  selectRom: string[];
  setSelectRom: (selectRom: string[]) => void;
  roms: string[];
}

const Roms = ({ roms, selectRom, setSelectRom }: Props) => {
 

  return (
    <FilterDropdown
      title='Roms'
      options={roms}
      selectedOptions={selectRom}
      setSelectedOptions={setSelectRom}
    />
  );
};

export default Roms;
