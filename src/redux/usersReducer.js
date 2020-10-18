import {DELETE_USER, SET_USERS} from "./actionTypes";

const initialState = {
    users: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS :
            return {
                ...state,
                users: action.payload
            }
        case DELETE_USER :
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload)
            }
        default:
            return state;
    }
}

export default usersReducer;