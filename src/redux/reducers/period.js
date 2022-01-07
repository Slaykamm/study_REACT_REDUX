import _ from 'lodash'

const initialState = []


function period(state=initialState, action) {



    switch (action.type){
        case 'SET_PERIOD':
            return [action.payload] 
            //...state, 


      

        // case 'DELETE_PERIOD':
        //     // state = _.without(state, action.payload)

           
        //     return state
        //     break;
        

        default:
            return state          
        }

}


export default period