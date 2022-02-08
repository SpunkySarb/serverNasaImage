import 'animate.css';



const Image = props => {





    return (<>

        <img src={props.url} className="animate__animated animate__zoomIn w3-round w3-mobile w3-card-4 w3-center" />


    </>);
}

export default Image;