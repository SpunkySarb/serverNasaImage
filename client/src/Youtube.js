import 'animate.css';




const Youtube = props => {





    return (<>

        <iframe width="420" height="315" className=" animate__animated animate__zoomIn w3-round w3-mobile w3-card-4 w3-center" src={ props.url}>
        </iframe>



    </>);
}

export default Youtube;