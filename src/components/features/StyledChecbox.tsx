
interface Props {
  checked: boolean;
  onToggle: () => void;
}

const StyledCheckbox = ({ checked, onToggle }: Props) => {
  return (
    <div
      className={`w-10 h-5 flex items-center rounded-full p-1 cursor-pointer ${
        checked ? "bg-slate-500" : "bg-gray-300"
      }`}
      onClick={onToggle}>
      <div
        className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
          checked ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </div>
  );
};

export default StyledCheckbox;
