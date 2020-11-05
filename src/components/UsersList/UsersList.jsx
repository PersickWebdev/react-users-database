import React, { useEffect, useMemo } from "react";
import {deleteUserFromDatabase, deleteUserFromDataBase, fetchUsers} from "../../redux/actionCreators";
import { useDispatch, useSelector } from "react-redux";

import { User } from "../index";

const UsersList = () => {
    const dispatch = useDispatch();
    const users = useSelector(({users}) => users.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const deleteHandler = (id) => {
        if (window.confirm('Are you sure you want to delete this User?'))
        dispatch(deleteUserFromDatabase(id))
    }

    console.log(users)
    const usersElements = useMemo(() => users.map(user => <User key={user.id}
                                                  {...user}
                                                  deleteHandler={deleteHandler}/>), [users, deleteHandler]);

    return (
        <div className='usersList__container'>
            {usersElements}
        </div>
    );
}

export default UsersList;