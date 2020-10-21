import React, {useState} from "react";

const UserAddForm = () => {
    const [value, setValue] = useState({
        userName: '',
        userSurname: '',
        userAge: '',
        userLocation: '',
        userOccupation: '',
        userMaritalStatus: '',
        userChildren: ''
    });

    const handler = (event) => {
        setValue({
            ...value,
            [event.target.name]: event.target.value
        });
    };

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
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const newUser = {
            id: Date.now(),
            firstName: value.userName,
            secondName: value.userSurname,
            age: value.userAge,
            location: value.userLocation,
            maritalStatus: value.userMaritalStatus,
            children: value.userChildren,
            occupation: value.userOccupation,
        };
        console.log(newUser);
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
            <button className='form__button' onClick={handleFormSubmit}>Submit</button>
        </form>
    );
};

export default UserAddForm;