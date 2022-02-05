import { createSlice, configureStore } from '@reduxjs/toolkit';


const today = () => {

    let todayDate = new Date();

    let month;
    let date;

    if ((todayDate.getMonth() + 1).length == 2) {
        month = (todayDate.getMonth() + 1);

    } else {
        month = "0" + (todayDate.getMonth() + 1);
    }


    if ((todayDate.getDate() + 1).length == 2) {
        date = (todayDate.getDate());

    } else {
        date = "0" + (todayDate.getDate());
    }
    const dated = todayDate.getFullYear() + "-" + month + "-" + date;




    return { date:dated, dateObj:todayDate };
}

const numFormat = (num, digits)=>{

    const number = num + "";

    if (number.length == digits) {
        return number;
    } else if (number.length < digits) {

        const missingDigits = digits - number.length;
        let prefix = "";
        for (var i = 0; i < missingDigits; i++) {
            prefix = prefix + "0";
        }

        return prefix + number;
    }
    return number;
}




const dateSlice = createSlice({

    name: 'dateSlice',
    initialState: {  ...today() },
    reducers: {
        next(state) {
            
           state.dateObj.setDate(state.dateObj.getDate()+1);

            let month;
            let date;

            
                month = numFormat((state.dateObj.getMonth() + 1),2);

          


         
                date = numFormat((state.dateObj.getDate()), 2);

           
            const dated = state.dateObj.getFullYear() + "-" + month + "-" + date;

            state.date = dated;

            
        },

        prev(state) {
            
            state.dateObj.setDate(state.dateObj.getDate() - 1);

            let month;
            let date;

            month = numFormat((state.dateObj.getMonth() + 1), 2);



            date = numFormat((state.dateObj.getDate()), 2);


            const dated = state.dateObj.getFullYear() + "-" + month + "-" + date;

            state.date = dated;
           
        },

        setDate(state, action) {
            state.date = action.payload.selectedDate;
            
            const dateArray = (state.date.split("-"));
           state.dateObj = new Date(dateArray[0], dateArray[1]-1, dateArray[2]);
         
            console.log(state.dateObj);
        }
    }

});




const store = configureStore({
    reducer: dateSlice.reducer
});


export const dateActions = dateSlice.actions;
export default store;