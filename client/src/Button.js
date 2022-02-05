

const Button = props => {



    return (

        <div onClick={ props.onClick} style={props.style} className={`w3-button w3-red w3-card-4 w3-round`}>{ props.action}</div>
        
        );
}

export default Button;