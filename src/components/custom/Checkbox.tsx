interface CheckboxProps {
  className?: string;

  isRequired?: boolean;

  // Function to call to notify parent of child state changes
  onCheckboxChange: React.Dispatch<React.SetStateAction<boolean>>;

  // Current value of this checkbox --> Defined by the state
  currentValue: boolean;
}

function Checkbox(props: CheckboxProps) {
  const { className, currentValue, onCheckboxChange, isRequired } = props;

  return (
    <input
      checked={currentValue}
      onChange={(event) => {
        // Call the parent function and notify that a child has been
        // Updated
        onCheckboxChange(event.target.checked);
      }}
      type="checkbox"
      className={"h-5 w-5 cursor-pointer " + className}
      required={isRequired || false}
    />
  );
}

export default Checkbox;
