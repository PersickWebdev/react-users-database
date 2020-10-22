import React from 'react';
import { useForm } from 'react-hook-form';

const UserAddFormHook = () => {
    const { register, handleSubmit, errors } = useForm();
    const handleOnSubmit = (data) => {
        console.log(data);
    }

    const optionsArray = [];
    for (let i = 1; i <= 99; i++) {
        optionsArray.push(i);
    }

    return (
        <form onSubmit={handleSubmit(handleOnSubmit)} className='form__container'>
            <h3 className='form__heading'>Adding New User Form</h3>
            <div className='form__section'>
                <label>
                    <p>First name:</p>
                    <input className={errors.firstName ? `form__input form__inputError` : 'form__input'}
                           type="text"
                           name='firstName'
                           placeholder='Enter first name ...'
                           ref={register({
                               required: true,
                               minLength: {
                                   value: 3,
                                   message: 'Second name - is required field and must contain at least 3 symbols'
                               },
                               validate: (value) => {
                                   return /^[A-Z]{1}[a-z]{1,}$/.test(value) || 'Incorrect. Example: Kevin'
                               }
                           })}
                    />
                    {errors.firstName && <p className='form__error'>{errors.firstName.message}</p>}
                </label>
            </div>

            <div className='form__section'>
                <label>
                    <p>Second name:</p>
                    <input className={errors.firstName ? `form__input form__inputError` : 'form__input'}
                           type="text"
                           name='secondName'
                           placeholder='Enter second name ...'
                           ref={register({
                               required: true,
                               minLength: {
                                   value: 3,
                                   message: 'Second name - is required field and must contain at least 3 symbols'
                               },
                               validate: (value) => {
                                   return /^[A-Z]{1}[a-z]{1,}$/.test(value) || 'Incorrect. Example: Kevin'
                               }
                           })}
                    />
                    {errors.secondName && <p className='form__error'>{errors.secondName.message}</p>}
                </label>
            </div>

            <div className='form__section'>
                <label>
                    <p>Age:</p>
                    <select className='form__input' name='age' ref={register}>
                        {optionsArray.map(item => <option key={item} value={item}>{item}</option>)}
                    </select>
                </label>
            </div>

            <button className='form__button'>Submit</button>
        </form>
    );
};

export default UserAddFormHook;