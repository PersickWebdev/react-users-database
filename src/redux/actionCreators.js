import {DELETE_USER, SET_USERS} from "./actionTypes";
import axios from 'axios';

export const fetchUsers = () => (dispatch) => {
    axios.get('http://localhost:3001/users')
        .then((response) => {
            dispatch(setUsers(response.data));
        });
};

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        payload: users
    };
};

export const deleteUser = (userId) => {
    return {
        type: DELETE_USER,
        payload: userId
    }
}