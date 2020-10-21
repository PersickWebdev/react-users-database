import {DELETE_USER, SET_USERS} from "./actionTypes";
import axios from 'axios';

export const fetchUsers = () => (dispatch) => {
    axios.get('http://localhost:3001/users')
        .then((response) => {
            dispatch(setUsers(response.data));
        });
};

export const postNewUser = (newUser) => (dispatch) => {
    axios.post('http://localhost:3001/users', newUser)
        .then((response) => {
           if (response.status === 200) {
               dispatch(setUsers(response.data));
           } else {
               console.log('Error occurred');
           }
        });
};

export const deleteUserFromDataBase = (userId) => (dispatch) => {
    axios.delete(`http://localhost:3001/users/${userId}/`)
        .then((response) => {
            if (response.status === 200) {
                dispatch(deleteUser(userId));
                dispatch(setUsers(response.data));
            } else {
                console.log('Error occurred');
            }
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
};