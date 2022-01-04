const initialState = ['City']


function city(state=initialState, action) {



    switch (action.type){
        case 'SET_CITY':
            console.log('works3', action.payload)
            return [action.payload] 

            break;
      


        default:
            return state          
        }

}


export default city