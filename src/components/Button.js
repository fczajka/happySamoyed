const Button = (props) => {
    return (
        <button
            className={`relative my-5 font-radio-canada font-bold tracking-wider rounded-md  border-b-4 transition-all$ ${props.textColor} ${props.borderColor} ${props.padding}  ${props.bgColor} ${props.textSize}`}
        >
            {props.text}
        </button>
    );
};

export default Button;
