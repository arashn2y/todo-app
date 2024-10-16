interface InputProps {
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
  className?: string;
}

function Input(props: InputProps) {
  const { placeholder, className, value, setValue } = props;

  return (
    <input
      className={"text-lg h-12 p-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-300 border border-gray-300 " + className}
      placeholder={placeholder}
      value={value}
      onChange={event => {
        const value = event.target.value;
        setValue(value);
      }}
    />
  );
}

export default Input;
