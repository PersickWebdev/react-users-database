import React from 'react';
import classNames from 'classnames';
import {useSelector} from "react-redux";

const FavouriteUser = ({ id, firstName, secondName, isFavourite, age, deleteFromFavouritesHandler }) => {
    const theme = useSelector((state) => state.users.theme);

    return (
        <div className={classNames('favouriteUser', {
            'theme--dark--text': theme === 'Dark Theme',
            'theme--light--text': theme === 'Light Theme'
        })}>
            <div className='nameBox'>
                <span>{firstName} </span>
                <span>{secondName} </span>
                <span>({age}) </span>
            </div>
            <button className={isFavourite ? 'button button--favourites' : 'button button--favourites'}
                    onClick={() => deleteFromFavouritesHandler(id)}
            >
                &#9734;
            </button>
        </div>
    );
};

export default FavouriteUser;