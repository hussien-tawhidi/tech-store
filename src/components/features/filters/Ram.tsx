import FilterDropdown from "./FilterDropdown";

const RamFilter = ({
  selectRam,
  setSelectRam,
  ram,
}: {
  selectRam: string[];
  setSelectRam: (ram: string[]) => void;
  ram: string[];
}) => (
  <FilterDropdown
    title='Ram'
    options={ram}
    selectedOptions={selectRam}
    setSelectedOptions={setSelectRam}
  />
);

export default RamFilter;
