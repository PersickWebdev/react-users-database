import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteUserFromFavourites, fetchFavourites} from "../../redux/actionCreators";
import { FavouriteUser } from '../../components';

const Favourites = () => {
    const dispatch = useDispatch();
    const favourites = useSelector((state) => state.users.favourites);

    useEffect(() => {
        dispatch(fetchFavourites());
    }, []);

    const deleteFromFavouritesHandler = (userId) => {
        dispatch(deleteUserFromFavourites(userId))
    }

    const favouriteUsers = favourites.map(user => <FavouriteUser key={user.id}
                                                                 {...user}
                                                                 deleteFromFavouritesHandler={deleteFromFavouritesHandler}/>)

    return(
        <div>
            {favouriteUsers}
        </div>
    );
}

export default Favourites;