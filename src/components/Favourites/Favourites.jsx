import React from 'react';
import {useSelector} from "react-redux";

const Favourites = () => {
    const { users } = useSelector(({ users }) => users);
    const favouriteUsers = users.filter(user => user.isFavourite);

    return(
        <div>
            {favouriteUsers.map(item => <div className='favouriteUser' key={item.id}>{item.firstName} {item.secondName}</div>)}
        </div>
    );
}

export default Favourites;