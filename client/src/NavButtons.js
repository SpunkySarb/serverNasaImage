import ReactDOM from 'react-dom';
import Button from './Button';
import { useSelector, useDispatch } from 'react-redux';
import { dateActions } from './Store';
const Buttons = props => {

    const dateDispatch = useDispatch();
    const currentDate = useSelector((state)=>state.date);
    const gotoNext = () => {
      
        dateDispatch(dateActions.next());
        
        

}

    const gotoPrev = () => {
        dateDispatch(dateActions.prev());
       
    }

    return (<>

        <Button onClick={gotoNext } style={{position:'fixed', right:'0', bottom:0, 'z-index':'100'}} action='NEXT'/>

        <Button onClick={gotoPrev } style={{ position: 'fixed', left: '0', bottom: 0, 'z-index': '100' }} action='PREV'/>
        


    </>);
}







const NavButtons = () => {




    return (<>

        {ReactDOM.createPortal(<Buttons/>, document.getElementById('navButtons')) }


    </>);
}

export default NavButtons;