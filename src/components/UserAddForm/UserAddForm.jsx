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

    const handleOnChange = (event) => {
        setValue({
            ...value,
            [event.target.name]: event.target.value
        });
    };

    const handleOnBlur = (event) => {
        const array = event.target.value.split(',').map(item => item[0] === ' ' ? item.split('').slice(1).join('') : item);
        setValue({
            ...value,
            [event.target.name]: array
        });
    };

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
                <input onChange={handleOnChange}
                       value={value.userName}
                       type='text'
                       name='userName'
                       placeholder='Enter user name ...'/>
            </div>
            <div className='form__section'>
                <p className='form__label'>User second name:</p>
                <input onChange={handleOnChange}
                       value={value.userSurname}
                       type='text'
                       name='userSurname'
                       placeholder='Enter user second name ...'/>
            </div>
            <div className='form__section'>
                <p className='form__label'>User age:</p>
                <input onChange={handleOnChange}
                       value={value.userAge}
                       type='text'
                       name='userAge'
                       placeholder='Enter user age ...'/>
            </div>
            <div className='form__section'>
                <p className='form__label'>User location:</p>
                <input onChange={handleOnChange}
                       value={value.userLocation}
                       type='text'
                       name='userLocation'
                       placeholder='Enter user location ...'/>
            </div>
            <div className='form__section'>
                <p className='form__label'>User occupation:</p>
                <input onChange={handleOnChange}
                       value={value.userOccupation}
                       type='text'
                       name='userOccupation'
                       placeholder='Enter user occupation ...'/>
            </div>
            <div className='form__section'>
                <p className='form__label'>User marital status:</p>
                <input onChange={handleOnChange}
                       value={value.userMaritalStatus}
                       type='text'
                       name='userMaritalStatus'
                       placeholder='Enter user marital status ...'/>
            </div>
            <div className='form__section'>
                <p className='form__label'>User children:</p>
                <input onChange={handleOnChange}
                       value={value.userChildren}
                       type='text'
                       name='userChildren'
                       placeholder='Enter user children quantity ...'/>
            </div>
            <div className='form__section'>
                <p className='form__label'>User interests:</p>
                <input onChange={handleOnChange}
                       onBlur={handleOnBlur}
                       value={value.userInterests}
                       type='text'
                       name='userInterests'
                       placeholder='Enter user interests ...'/>
            </div>
            <div className='form__section'>
                <p className='form__label'>User qualities:</p>
                <input onChange={handleOnChange}
                       onBlur={handleOnBlur}
                       value={value.userQualities}
                       type='text'
                       name='userQualities'
                       placeholder='Enter user interests ...'/>
            </div>
            <div className='form__section'>
                <p className='form__label'>User goals:</p>
                <input onChange={handleOnChange}
                       onBlur={handleOnBlur}
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