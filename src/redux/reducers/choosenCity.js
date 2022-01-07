const initialState = {}


function choosenCity(state=initialState, action) {



    switch (action.type){
        case 'PICK_INFO':

            return action.payload 



        default:
            return state          
        }

}


export default choosenCity