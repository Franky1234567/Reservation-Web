interface ButtonProps {
    text: string;
    onClick: () => void;
}

const Button:React.FC<ButtonProps> = ({text,onClick}) => {
    return <button onClick={onClick} className="border border-blue-400 bg-blue-500 w-auto px-5 py-3 text-center rounded-xl">{text}</button>;
}

export default Button