type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  disable?: string
}

const Button: React.FC<ButtonProps> = (props) => {
  return(
    <button className={`${props.color} rounded text-lg p-1 hover:bg-green-600 mt-3`}>{props.placeholder}</button>  
  )
}

export default Button;