import axios from 'axios';

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.

export const FETCH_SMURFS_REQUEST = 'FETCH_SMURFS_REQUEST';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE';
export const ADD_NEW_SMURF = 'ADD_NEW_SMURF';
export const SET_ERROR = 'SET_ERROR';

export const fetchSmurfs = () => dispatch => {
    dispatch({type: FETCH_SMURFS_REQUEST});
    axios.get('http://localhost:3333/smurfs')
        .then(res => {
            dispatch({type: FETCH_SMURFS_SUCCESS, payload: res.data});
        })
        .catch(err => {
            dispatch({type: FETCH_SMURFS_FAILURE, payload: err.message});
        })
}

export const addSmurf = newSmurf => {
    newSmurf.id = Date.now();
    console.log('Adding new smurf', newSmurf);
    return { type: ADD_NEW_SMURF, payload: newSmurf}
}

export const setError = err => {
    console.log('Setting error: ', err)
    return { type: SET_ERROR, payload: err}
}