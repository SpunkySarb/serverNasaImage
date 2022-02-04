import Youtube from './Youtube';
import Image from './Image';

const LoadImage = (props) => {
    

    const type = () => {


        let media = "";
        if (props.mediaType == "video") {
            media = <Youtube url={props.url} />;
        } else {
            media = <Image url={props.url} />;
        }
        return media;
    }






    return (
        
        
        <div className="w3-display-container w3-center w3-black">
            <h4 className="w3-center"><b>{ props.title}</b></h4>
            { type() }
            <br /><br />
            <h4 className="w3-left-align">{props.description}</h4>
        </div> 
        
        
        
        
        );





}

export default LoadImage;