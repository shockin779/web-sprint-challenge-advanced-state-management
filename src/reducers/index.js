import { FETCH_SMURFS_REQUEST, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAILURE, ADD_NEW_SMURF, SET_ERROR } from '../actions/index';


export const initialState = {
    smurfs: [],
    isLoading: false,
    errorMessage: ''
}

const reducer = (state = initialState, action)=>{
    switch(action.type) {
        case FETCH_SMURFS_REQUEST:
            return {
                ...state,
                isLoading: true
            }

        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                smurfs: action.payload
            }

        case FETCH_SMURFS_FAILURE:
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload
            }

        case ADD_NEW_SMURF:
            return {
                ...state,
                smurfs: [...state.smurfs, action.payload]
            }

        case SET_ERROR:
            return {
                ...state,
                errorMessage: action.payload
            }
            
        default:
            return state;
    }
}

export default reducer;

//Task List:
//1. Adds the following state values into the initialState: [Done]
//  - an array of smurfs [Done]
//  - a boolean indicating if the app is loading [Done]
//  - a string indicating a possible error message [Done]

//2. Add in the arguments needed to complete a standard reducer function. [Done]
//3. Add in a reducer case to accomidate the start of a smurf fetch. [Done]
//4. Add in a reducer case to accomidate the successful smurf api fetch. [Done]
//5. Add in a reducer cases to accomidate the failed smurf api fetch. [Done]
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.