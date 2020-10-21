import React, { useEffect } from "react";
import { deleteUserFromDataBase, fetchUsers} from "../../redux/actionCreators";
import { useDispatch, useSelector } from "react-redux";

import { User } from "../index";

const UsersList = () => {
    const dispatch = useDispatch();
    const users = useSelector(({users}) => users.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    const deleteHandler = (id) => {
        if (window.confirm('Are you sure you want to delete this User?'))
        dispatch(deleteUserFromDataBase(id))
    }

    const usersElements = users.map(user => <User key={user.id}
                                                  {...user}
                                                  deleteHandler={deleteHandler}/>);

    return (
        <div className='usersList__container'>
            {usersElements}
        </div>
    );
}

export default UsersList;