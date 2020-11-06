import axios from 'axios';
import { SET_USERS } from './actionTypes';
import { SET_FAVOURITES } from './actionTypes';
import { ADD_NEW_USER } from './actionTypes';
import { ADD_USER_TO_FAVOURITES } from './actionTypes';
import { UPDATE_USER } from './actionTypes';
import { DELETE_USER } from './actionTypes';
import { DELETE_USER_FROM_FAVOURITES } from './actionTypes';
import { CHANGE_THEME } from './actionTypes';

export const fetchUsers = () => async (dispatch) => {
    const response = await axios.get('http://localhost:3001/users')
    dispatch(setUsers(response.data));
};

export const fetchFavourites = () => async (dispatch) => {
    const response = await axios.get('http://localhost:3001/favourites')
    dispatch(setFavourites(response.data));
};

export const postNewUser = (newUser) => async (dispatch) => {
    const response = await axios.post('http://localhost:3001/users', newUser)
    dispatch(addNewUser(response.data));
};

export const addUserToFavourites = (newUser) => async (dispatch) => {
    const response = await axios.post('http://localhost:3001/favourites', newUser)
    console.log(response.status);
    dispatch(addUserToFavs(newUser));
};

export const updateUserInDatabase = (userId, updatedUser) => async (dispatch) => {
    const response = await axios.put(`http://localhost:3001/users/${userId}/`, updatedUser)
    dispatch(updateUser(userId, response.data));
};

export const deleteUserFromDatabase = (userId) => async (dispatch) => {
    const response = await axios.delete(`http://localhost:3001/users/${userId}/`)
    console.log(response.status);
    dispatch(deleteUser(userId));
};

export const deleteUserFromFavourites = (userId) => async (dispatch) => {
    const response = await axios.delete(`http://localhost:3001/favourites/${userId}/`)
    console.log(response.status);
    dispatch(deleteUserFromFavs(userId));
}

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        payload: users
    };
};

export const setFavourites = (favourites) => {
    return {
        type: SET_FAVOURITES,
        payload: favourites
    };
};

export const addNewUser = (newUser) => {
    return {
        type: ADD_NEW_USER,
        payload: newUser
    };
};

export const addUserToFavs = (user) => {
    return {
        type: ADD_USER_TO_FAVOURITES,
        payload: user
    };
};

export const updateUser = (userId, updatedUser) => {
    return {
        type: UPDATE_USER,
        payload: {
            userId,
            updatedUser
        }
    };
};

export const deleteUser = (userId) => {
    return {
        type: DELETE_USER,
        payload: userId
    };
};

export const deleteUserFromFavs = (userId) => {
    return {
        type: DELETE_USER_FROM_FAVOURITES,
        payload: userId
    };
};

export const changeTheme = (value) => {
    console.log(value)
    return {
        type: CHANGE_THEME,
        payload: value
    };
};