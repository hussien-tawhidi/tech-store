"use client";

interface Props {
  value: string | number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  error?: string | null;
  id?: string;
  className?: string;
  type?: string;
  name?: string;
  disabled?: boolean;
}

const TextInput: React.FC<Props> = ({
  value,
  disabled,
  onChange,
  placeholder,
  error,
  id,
  className,
  type,
  name,
}) => {
  return (
    <span className={`mb-4 w-full ${className}`}>
      <input
        type={type}
        id={id}
        disabled={disabled}
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        className='placeholder:text-gray-500 text-gray-800 dark:placeholder:text-gray-400 font-semibold capitalize dark:text-gray-300 dark:shadow-gray-700 shadow-md w-full bg-transparent placeholder:text-[12px] focus:outline-none p-3 focus:border-none'
      />
      {error && <p className='text-red-500 text-sm mt-1'>{error}</p>}
    </span>
  );
};

export default TextInput;
