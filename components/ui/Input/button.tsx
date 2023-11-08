type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  //
};

const Button: React.FC<ButtonProps> = (props) => {
  const colorCss = props.disabled ? 'bg-gray-800 text-white' : props.color;
  const hoverCss = props.disabled ? '' : 'hover:bg-green-600';

  return(
    <button className={`${colorCss} ${hoverCss} rounded text-lg p-1 mt-3`}>{props.placeholder}</button>  
  )
}

export default Button;