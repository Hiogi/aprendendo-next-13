type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  className?: string;
};
const Input: React.FC<InputProps> = (props) => {
  return (
    <div className="flex flex-col">
      {props.label && 
        <label htmlFor={props.name} className="text-white">
          {props.label}
        </label>
      }
      <input
        type="text"
        placeholder={props.placeholder}
        name={props.name}
        className={`p-1 rounded bg-slate-600 text-white hover:bg-orange-300 ${props.className}`}
      />
    </div>
  );
};
export default Input;
