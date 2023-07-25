const Button = (props) => {
    const {children, classname = "bg-black", onclick=()=>{}, type} = props;
    return (
        <button className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`}
        type={type}
        onClick={() => onclick()}
        > 
        {children}
        </button>
    );
};


export default Button