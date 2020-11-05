import React from 'react';

const FavouriteUser = ({ id, firstName, secondName, isFavourite, age, deleteFromFavouritesHandler }) => {
    return (
        <div className='favouriteUser'>
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