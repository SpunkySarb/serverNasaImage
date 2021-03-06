import React from 'react';
import ReactDOM from 'react-dom';
import LoadImage from './LoadImage.js';
import { useState, useEffect, useRef } from 'react';
import useHttp from './http-hook';
import NavButtons from './NavButtons';
import { useSelector, useDispatch } from 'react-redux';
import { dateActions } from './Store';

const Home = () => {


    const dateState = useSelector((state)=> state.date);
    const currentDate = useRef();
   
    const dateDispatch = useDispatch();
 
    const today = () => {

        let todayDate = new Date();

        let month;
        let date;

        if ((todayDate.getMonth() + 1).length == 2) {
            month = (todayDate.getMonth() + 1);

        } else {
            month = "0"+(todayDate.getMonth() + 1);
        }


        if ((todayDate.getDate() + 1).length == 2) {
            date = (todayDate.getDate());

        } else {
            date = "0" + (todayDate.getDate());
        }
        const dated = todayDate.getFullYear() + "-" + month + "-" + date;

        
       
       
        return dated;
    }

 
    
   
    useEffect(() => {
        const date = currentDate.current.value;
        updateURL("https://api.nasa.gov/planetary/apod?api_key=DgPLcIlnmN0Cwrzcg3e9NraFaYLIDI68Ysc6Zh3d&date=" + date); 
    }, [dateState]);

    const [URL, updateURL] = useState("https://api.nasa.gov/planetary/apod?api_key=DgPLcIlnmN0Cwrzcg3e9NraFaYLIDI68Ysc6Zh3d&date=" + today());

    //requestdata is stateful
    const requestData=useHttp(URL);





    const dateChangeHandler = () => {
      
        let dateChosen = currentDate.current.value;
  
        dateDispatch(dateActions.setDate({ selectedDate: dateChosen }));

        updateURL("https://api.nasa.gov/planetary/apod?api_key=DgPLcIlnmN0Cwrzcg3e9NraFaYLIDI68Ysc6Zh3d&date=" + dateChosen);




    }

    return (
        <>
        <NavButtons />
        <div>

            
            <meta charSet="utf-8" />
            
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
            <div className="w3-container w3-round w3-red w3-card-4 w3-large w3-center w3-padding w3-wide">
                Nasa Image/video of the Day
        </div>
            <br /><br />
            <h5 className="w3-text-White w3-text w3-center"><b>SELECT DAY</b></h5>
            <form className="w3-container w3-center w3-text-red w3-wide  w3-black " action="index.html" method="post">
                    <input ref={currentDate} id="date" min="1995-06-16" max={today()}  onChange={dateChangeHandler} type="date" className="w3-wide" value={ dateState }  />
            </form>
            <br /><br />


            
            {!requestData.loadingStatus && requestData.errorMessage == null && <LoadImage mediaType={requestData.media_type} title={requestData.title} description={requestData.explanation} url={requestData.url} today={today()} />}

            {requestData.loadingStatus && <div  className=" w3-display-middle w3-jumbo w3-spin fa fa-spinner w3-text-white w3-transparent"></div>}
           
            {!requestData.loadingStatus && requestData.errorMessage && <div className=" w3-center w3-xlarge  w3-black">{requestData.errorMessage}</div>}



            <br /><br />
            <div className="w3-container w3-center w3-black w3-wide">
                <h6>Developed by Sarbjeet Singh</h6>
            </div>
        </div>
        </>
        );





}

        export default Home;
