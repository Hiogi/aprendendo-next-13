type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  labelClassname?: string;
  className?: string;
  type?: string
};
const Input: React.FC<InputProps> = (props) => {
  return (
    <div className="flex flex-col">
      {props.label && 
        <label htmlFor={props.name} className={props.labelClassname}>
          {props.label}
        </label>
      }
      <input
        {...props}
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        className={`p-1 rounded bg-slate-600 text-white ${props.className} `}
      />
    </div>
  );
};
export default Input;
