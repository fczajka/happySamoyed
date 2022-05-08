const Button = (props) => {
    return (
        <button className="relative my-5 font-radio-canada font-bold tracking-wider p-5 rounded-md bg-royalPink-400 text-royalPink-50 border-b-4 border-royalPink-500 transition-all">
            {props.text}
        </button>
    );
};

export default Button;
