import { SET_USERS} from './actionTypes';
import { SET_FAVOURITES } from './actionTypes';
import { ADD_NEW_USER } from './actionTypes';
import { ADD_USER_TO_FAVOURITES } from './actionTypes';
import { UPDATE_USER } from './actionTypes';
import { DELETE_USER } from './actionTypes';
import { DELETE_USER_FROM_FAVOURITES } from './actionTypes';

const initialState = {
    users: [],
    favourites: []
}

const usersReducer = (state = initialState, action) => {
    console.log(action.type)
    switch (action.type) {
        case SET_USERS :
            return {
                ...state,
                users: action.payload
            }
        case SET_FAVOURITES :
            return {
                ...state,
                favourites: action.payload
            }
        case ADD_NEW_USER :
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        case ADD_USER_TO_FAVOURITES :
            return {
                ...state,
                favourites: [...state.favourites, action.payload]
            }
        case UPDATE_USER :
            return {
                ...state,
                users: state.users.map(user => user.id === action.payload.userId ? action.payload.updatedUser : user)
            }
        case DELETE_USER :
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload)
            }
        case DELETE_USER_FROM_FAVOURITES :
            return {
                ...state,
                favourites: state.favourites.filter(user => user.id !== action.payload)
            }
        default:
            return state;
    }
}

export default usersReducer;