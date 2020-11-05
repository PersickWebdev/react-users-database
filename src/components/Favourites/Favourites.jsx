import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchFavourites} from "../../redux/actionCreators";

const Favourites = () => {
    const dispatch = useDispatch();
    const favourites = useSelector((state) => state.users.favourites);

    useEffect(() => {
        console.log(favourites)
        dispatch(fetchFavourites());
    }, []);

    const favouriteUsers = favourites.map(user => <div className='favouriteUser' key={user.id}>{user.firstName} {user.secondName}</div>)

    return(
        <div>
            {favouriteUsers}
        </div>
    );
}

export default Favourites;