import React, {useState} from "react";
import PropTypes from 'prop-types';
import {UserEditFormHook} from "../index";

const User = ({ id, firstName, secondName, age, location, occupation,
                maritalStatus, children, interests, qualities, goals,
                deleteHandler }) => {

    const [isVisible, setIsVisible] = useState(false);
    const [isEdit, setIsEdit] = useState(false);

    const showMore = () => {
        setIsVisible(!isVisible);
    };

    const processArray = (array) => {
        return array.map((item, index) => index + 1 === array.length ? `${item}.` : `${item}, `)
    }

    const toggleEditMode = () => {
        setIsEdit(!isEdit);
    }

    return (
        <div className='container'>
            {isEdit
                ?
                <UserEditFormHook id={id}
                                  firstName={firstName}
                                  secondName={secondName}
                                  age={age}
                                  location={location}
                                  occupation={occupation}
                                  maritalStatus={maritalStatus}
                                  children={children}
                                  interests={interests}
                                  qualities={qualities}
                                  goals={goals}
                                  toggleEditMode={toggleEditMode}
                />
                :
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
                            <button className='user__button user__button--edit'
                                    onClick={toggleEditMode}>
                                &#x270E;
                            </button>
                            <button className='user__button user__button--delete'
                                    onClick={() => deleteHandler(id)}>
                                &times;
                            </button>
                        </div>
                    </div>
                    {isVisible &&
                    <div className='user__more'>
                        <p className='user__interests user__more--field'><span>Interests:</span> <br/>
                            {processArray(interests)}
                        </p>
                        <p className='user__qualities user__more--field'><span>Qualities:</span> <br/>
                            {processArray(qualities)}
                        </p>
                        <p className='user__goals user__more--field'><span>Goals:</span> <br/>
                            {processArray(goals)}
                        </p>
                        <div className='user__more--actions'>
                            <button className='user__button user__button--back'
                                    onClick={showMore}>
                                &#129044;
                            </button>
                        </div>
                    </div>
                    }
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
    children: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    interests: PropTypes.arrayOf(PropTypes.string),
    qualities: PropTypes.arrayOf(PropTypes.string),
    goals: PropTypes.arrayOf(PropTypes.string)
}

export default User;