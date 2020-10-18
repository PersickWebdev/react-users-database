import React from "react";
import PropTypes from 'prop-types';

const User = ({ id, firstName, secondName, age, location, occupation, maritalStatus, children, deleteHandler }) => {
    return (
        <div className='user__container'>
            <div className='user__nameAge'>
                <h3 className='user__name'>{firstName} {secondName}</h3>
                <p className='user__age'>Age: {age}</p>
            </div>
            <div className='user__info'>
                <p className='user__location'> Location: <span>{location}</span></p>
                <p className='user__occupation'> Occupation: <span>{occupation}</span></p>
                <p className='user__maritalStatus'> Marital Status: <span>{maritalStatus}</span></p>
                <p className='user__children'> Children: <span>{children}</span></p>
            </div>
            <div className='user__actions'>
                <button className='user__button'>Edit</button>
                <button className='user__button user__button--delete'
                        onClick={() => deleteHandler(id)}>Delete</button>
            </div>
        </div>
    )
}

User.propTypes = {
    id: PropTypes.number,
    firstName: PropTypes.string,
    secondName: PropTypes.string,
    age: PropTypes.number,
    location: PropTypes.string,
    occupation: PropTypes.string,
    maritalStatus: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}


export default User;