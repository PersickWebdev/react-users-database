import React from 'react';

const FavouriteUser = ({ id, firstName, secondName, isFavourite, age, deleteFromFavouritesHandler }) => {
    return (
        <div className='favouriteUser'>
            <div className='nameBox'>
                <span>{firstName} </span>
                <span>{secondName} </span>
                <span>({age}) </span>
            </div>
            <button className={isFavourite ? 'favouriteUser__button favouriteUser__button--active' : 'favouriteUser__button'}
                    onClick={() => deleteFromFavouritesHandler(id)}
            >
                &#9734;
            </button>
        </div>
    );
};

export default FavouriteUser;