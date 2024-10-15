interface CheckboxProps {
  className?: string;

  onCheckboxChange: React.Dispatch<React.SetStateAction<boolean>>

  currentValue: boolean;
}

function Checkbox(props: CheckboxProps) {
  const { className, currentValue,onCheckboxChange } = props;
  
  return <input
  value={currentValue.toString()}
  onChange={event => {
    console.log(event.target.checked);
    onCheckboxChange(event.target.checked);
  }}
   type="checkbox" className={"h-5 w-5 cursor-pointer " + className} />;
}

export default Checkbox;
