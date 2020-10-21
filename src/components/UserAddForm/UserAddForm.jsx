import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {postNewUser} from "../../redux/actionCreators";

const UserAddForm = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState({
        userName: '',
        userSurname: '',
        userAge: '',
        userLocation: '',
        userOccupation: '',
        userMaritalStatus: '',
        userChildren: '',
        userInterests: [],
        userQualities: [],
        userGoals: []
    });

    const handler = (event) => {
        setValue({
            ...value,
            [event.target.name]: event.target.value
        });
    };

    const arrayHandler = (event) => {
        const array = event.target.value.split(',').map(item => item[0] === ' ' ? item.split('').slice(1).join('') : item);
        setValue({
            ...value,
            [event.target.name]: array
        });
    };

    // The following code optimization needed (32 - 48)
    const handleUserName = (event) => {
        handler(event);
    };

    const handleUserSurname = (event) => {
        handler(event);
    };

    const handleUserAge = (event) => {
        handler(event);
    };

    const handleUserLocation = (event) => {
        handler(event);
    };

    const handleUserOccupation = (event) => {
        handler(event);
    };

    const handleUserMaritalStatus = (event) => {
        handler(event);
    };

    const handleUserChildren = (event) => {
        handler(event);
    };

    const handleUserInterests = (event) => {
        handler(event);
    };

    const handleUserQualities = (event) => {
        handler(event);
    }

    const handleUserGoals = (event) => {
        handler(event);
    }

    const setUserInterests = (event) => {
        arrayHandler(event);
    };

    const setUserQualities = (event) => {
        arrayHandler(event);
    }

    const setUserGoals = (event) => {
        arrayHandler(event);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const newUser = {
            id: Date.now(),
            firstName: value.userName,
            secondName: value.userSurname,
            age: Number(value.userAge),
            location: value.userLocation,
            maritalStatus: value.userMaritalStatus,
            children: value.userChildren,
            occupation: value.userOccupation,
            interests: value.userInterests,
            qualities: value.userQualities,
            goals: value.userGoals
        };
        dispatch(postNewUser(newUser));
    };

    return (
        <form className='form'>
            <div className='form__section'>
                <p className='form__label'>User first name:</p>
                <input onChange={handleUserName}
                       value={value.userName}
                       type='text'
                       name='userName'
                       placeholder='Enter user name ...'/>
            </div>
            <div className='form__section'>
                <p className='form__label'>User second name:</p>
                <input onChange={handleUserSurname}
                       value={value.userSurname}
                       type='text'
                       name='userSurname'
                       placeholder='Enter user second name ...'/>
            </div>
            <div className='form__section'>
                <p className='form__label'>User age:</p>
                <input onChange={handleUserAge}
                       value={value.userAge}
                       type='text'
                       name='userAge'
                       placeholder='Enter user age ...'/>
            </div>
            <div className='form__section'>
                <p className='form__label'>User location:</p>
                <input onChange={handleUserLocation}
                       value={value.userLocation}
                       type='text'
                       name='userLocation'
                       placeholder='Enter user location ...'/>
            </div>
            <div className='form__section'>
                <p className='form__label'>User occupation:</p>
                <input onChange={handleUserOccupation}
                       value={value.userOccupation}
                       type='text'
                       name='userOccupation'
                       placeholder='Enter user occupation ...'/>
            </div>
            <div className='form__section'>
                <p className='form__label'>User marital status:</p>
                <input onChange={handleUserMaritalStatus}
                       value={value.userMaritalStatus}
                       type='text'
                       name='userMaritalStatus'
                       placeholder='Enter user marital status ...'/>
            </div>
            <div className='form__section'>
                <p className='form__label'>User children:</p>
                <input onChange={handleUserChildren}
                       value={value.userChildren}
                       type='text'
                       name='userChildren'
                       placeholder='Enter user children quantity ...'/>
            </div>
            <div className='form__section'>
                <p className='form__label'>User interests:</p>
                <input onChange={handleUserInterests}
                       onBlur={setUserInterests}
                       value={value.userInterests}
                       type='text'
                       name='userInterests'
                       placeholder='Enter user interests ...'/>
            </div>
            <div className='form__section'>
                <p className='form__label'>User qualities:</p>
                <input onChange={handleUserQualities}
                       onBlur={setUserQualities}
                       value={value.userQualities}
                       type='text'
                       name='userQualities'
                       placeholder='Enter user interests ...'/>
            </div>
            <div className='form__section'>
                <p className='form__label'>User goals:</p>
                <input onChange={handleUserGoals}
                       onBlur={setUserGoals}
                       value={value.userGoals}
                       type='text'
                       name='userGoals'
                       placeholder='Enter user interests ...'/>
            </div>
            <button className='form__button' onClick={handleFormSubmit}>Submit</button>
        </form>
    );
};

export default UserAddForm;