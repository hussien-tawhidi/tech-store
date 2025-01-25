"use client";

import FilterDropdown from "./FilterDropdown";

interface Props {
  selectedNetWork: string[];
  setSelectedNetWork: (networks: string[]) => void;
  networks: string[]; // List of all available networks
}

const NetWork = ({ selectedNetWork, setSelectedNetWork, networks }: Props) => {
  return (
    <FilterDropdown
      title='Network & Connectivity'
      options={networks}
      selectedOptions={selectedNetWork}
      setSelectedOptions={setSelectedNetWork}
    />
  );
};

export default NetWork;
