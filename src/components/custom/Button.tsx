interface ButtonProps {
  title: string;
  className?: string;
}

function Button(props: ButtonProps) {
  const { title, className } = props;
  return <button type="submit" className={"px-4 py-2 text-gray-50 bg-blue-500 rounded-lg text-lg hover:bg-blue-600 " + className}>{title}</button>;
}

export default Button;
