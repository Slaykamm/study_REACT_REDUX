const initialState = []


function country(state=initialState, action) {



    switch (action.type){
        case 'SET_COUNTRY':
            return [action.payload] 
        default:
            return state          
        }

}


export default country