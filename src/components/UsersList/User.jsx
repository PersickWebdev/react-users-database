import React, {useState} from "react";
import PropTypes from 'prop-types';

const User = ({ id, firstName, secondName, age, location, occupation,
                maritalStatus, children, interests, deleteHandler }) => {

    const [isVisible, setIsVisible] = useState(false);

    const showMore = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className='user__container'>
            <div className='user__nameAge'>
                <h3 className='user__name'>{firstName} {secondName}</h3>
                <p className='user__age'>Age: <span>{age}</span></p>
            </div>
            <div className='user__info'>
                <p className='user__location'> Location: <span>{location}</span></p>
                <p className='user__occupation'> Occupation: <span>{occupation}</span></p>
                <p className='user__maritalStatus'> Marital Status: <span>{maritalStatus}</span></p>
                <p className='user__children'> Children: <span>{children}</span></p>
            </div>
            <div className='user__bottom'>
                <span className='user__bioLink'
                      onClick={showMore}> See more </span>
                <div className='user__actions'>
                    <button className='user__button user__button--delete'
                            onClick={() => deleteHandler(id)}>&times;</button>
                </div>
            </div>
            {isVisible &&
            <div className='user__more'>
                <button className='user__button user__button--close'
                        onClick={showMore}>&times;</button>
                <p className='user__interests'><span>Interests:</span> <br/>
                    {interests.map((item, index) => index + 1 === interests.length ? `${item}.` : `${item}, `)}
                </p>
            </div>
            }
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