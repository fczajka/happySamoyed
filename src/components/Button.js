const Button = (props) => {
    return (
        <button
            className={`relative my-5 font-radio-canada font-bold tracking-wider rounded-md text-royalPink-50 border-b-4 transition-all ${props.borderColor} ${props.padding}  ${props.bgColor} ${props.textSize}`}
        >
            {props.text}
        </button>
    );
};

export default Button;
