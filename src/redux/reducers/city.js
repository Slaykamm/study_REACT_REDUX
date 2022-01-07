const initialState = []


function city(state=initialState, action) {



    switch (action.type){
        case 'SET_CITY':

            return [action.payload] 



        default:
            return state          
        }

}


export default city