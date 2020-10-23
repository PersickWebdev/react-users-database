import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from "react-redux";
import { postNewUser } from "../../redux/actionCreators";

// Form validation is simplified to speed up the dev process. Needs to be fully implemented!
const UserAddFormHook = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, errors } = useForm();

    const processString = (string) => {
        return string.split(',').map(item => item[0] === ' ' ? item.split('').slice(1).join('') : item);
    }

    const handleOnSubmit = (data) => {
        const newUser = {
            id: Date.now(),
            firstName: data.firstName,
            secondName: data.secondName,
            age: Number(data.age),
            location: data.location,
            maritalStatus: data.maritalStatus,
            children: data.children,
            occupation: data.occupation,
            interests: processString(data.interests),
            qualities: processString(data.qualities),
            goals: processString(data.goals),
        }
        dispatch(postNewUser(newUser));
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
                    <select className='form__input'
                            name='age'
                            ref={register}>
                        {optionsArray.map(item => <option key={item} value={item}>{item}</option>)}
                    </select>
                </label>
            </div>

            <div className='form__section'>
                <label>
                    <p>Location:</p>
                    <input className={errors.location ? `form__input form__inputError` : 'form__input'}
                           type="text"
                           name='location'
                           placeholder='Enter location ...'
                           ref={register({
                               required: true,
                               validate: (value) => {
                                   return [
                                       /^[A-Z]{1}[a-z]{1,}$/,
                                       /^[A-Z]{1,}$/,
                                       /^[A-Z]{1}[a-z]{1,}-[A-Z]{1}[a-z]{1,}$/
                                       ].some(pattern => pattern.test(value)) || 'Incorrect. Example: Odessa, New-York, USA'
                               }
                           })}
                    />
                    {errors.location && <p className='form__error'>{errors.location.message}</p>}
                </label>
            </div>

            <div className='form__section'>
                <label>
                    <p>Marital Status:</p>
                    <input type='radio'
                           name='maritalStatus'
                           value='single'
                           id='maritalStatus01'
                           ref={register({
                               required: true
                           })}
                    />
                    <label className='form__radioLabel' htmlFor='maritalStatus01'>Single</label>

                    <input type='radio'
                           name='maritalStatus'
                           value='married'
                           id='maritalStatus02'
                           ref={register({
                               required: true,
                           })}
                    />
                    <label className='form__radioLabel' htmlFor='maritalStatus02'>Married</label>
                    {errors.maritalStatus && <p className='form__error'>This field is required</p>}
                </label>
            </div>

            <div className='form__section'>
                <label>
                    <p>Children:</p>
                    <input className={errors.children ? `form__input form__inputError` : 'form__input'}
                           type="text"
                           name='children'
                           placeholder='Enter children quantity or none ...'
                           ref={register({
                               required: true,
                               validate: (value) => {
                                   return /^\d|[n]{1}[o]{1}[n]{1}[e]{1}$/.test(value) || 'Incorrect. Example: 2, none'
                               }
                           })}
                    />
                    {errors.children && <p className='form__error'>{errors.children.message}</p>}
                </label>
            </div>

            <div className='form__section'>
                <label>
                    <p>Occupation:</p>
                    <input className={errors.occupation ? `form__input form__inputError` : 'form__input'}
                           type="text"
                           name='occupation'
                           placeholder='Enter occupation ...'
                           ref={register({
                               required: true,
                               validate: (value) => {
                                   return /^[A-Z]{1}[a-z]{1,}$/.test(value) || 'Incorrect. Example: Dentist'
                               }
                           })}
                    />
                    {errors.occupation && <p className='form__error'>{errors.occupation.message}</p>}
                </label>
            </div>

            <div className='form__section'>
                <label>
                    <p>Interests:</p>
                    <input className={errors.interests ? `form__input form__inputError` : 'form__input'}
                           type="text"
                           name='interests'
                           placeholder='Enter interests ...'
                           ref={register({
                               required: true,
                           })}
                    />
                    {errors.interests && <p className='form__error'>Enter at least two interests</p>}
                </label>
            </div>

            <div className='form__section'>
                <label>
                    <p>Qualities:</p>
                    <input className={errors.qualities ? `form__input form__inputError` : 'form__input'}
                           type="text"
                           name='qualities'
                           placeholder='Enter qualities ...'
                           ref={register({
                               required: true,
                           })}
                    />
                    {errors.interests && <p className='form__error'>Enter at least two qualities</p>}
                </label>
            </div>

            <div className='form__section'>
                <label>
                    <p>Goals:</p>
                    <input className={errors.goals ? `form__input form__inputError` : 'form__input'}
                           type="text"
                           name='goals'
                           placeholder='Enter goals ...'
                           ref={register({
                               required: true,
                           })}
                    />
                    {errors.interests && <p className='form__error'>Enter at least one goal</p>}
                </label>
            </div>
            <div className='form__actions'>
                <button className='form__button'>Submit</button>
            </div>
        </form>
    );
};

export default UserAddFormHook;