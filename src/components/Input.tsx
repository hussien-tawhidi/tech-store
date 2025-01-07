"use client"

interface Props {
  value: string|number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  error?: string | null;
  id?: string;
  className?: string;
  type?: string;
}

const TextInput: React.FC<Props> = ({
  value,
  onChange,
  placeholder,
  error,
  id,
  className,
  type,
}) => {
  return (
    <span className={`mb-4 w-full ${className}`}>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className='placeholder:text-gray-700 text-gray-800 dark:placeholder:text-gray-400 dark:text-gray-300 dark:shadow-gray-700 shadow-md w-full bg-transparent placeholder:text-[12px] p-3 focus:border-none'
      />
      {error && <p className='text-red-500 text-sm mt-1'>{error}</p>}
    </span>
  );
};

export default TextInput;
