const initialState = ['World']


function country(state=initialState, action) {



    switch (action.type){
        case 'SET_COUNTRY':
            console.log('works2', action.payload)
            return [action.payload] 

            break;
      

        case 'DELETE_FRAMEWORK':
            return state
            break;
        

        default:
            return state          
        }

}


export default country