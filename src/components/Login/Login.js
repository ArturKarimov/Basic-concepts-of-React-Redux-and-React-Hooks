import React from "react"
import {useForm} from "react-hook-form";
import s from './Login.module.css'
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {getStatusProfile, getUserProfile} from "../../redux/profile-reducer";

const Login = () => {

    const isAuth = useSelector(state => state.auth.isAuth)
    const dispatch = useDispatch()

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({mode: 'onChange'})

    const onSubmit = ({ email, password, rememberMe }) => {

        dispatch(login(email, password, rememberMe))
    }
    if (isAuth) {
        return <Redirect to="/profile"/>
    }


    return (
        <div className={s.login}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Sign in</h2>
                <input className={s.loginInput}
                       placeholder='socialnetwork@yandex.ru'
                    {...register('email',
                        {required: 'This is a required field!',
                            pattern: {
                            value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                message: 'Invalid email address'
                            }})}
                />
                <div>
                    { errors.email && <span>{errors.email.message}</span> }
                </div>
                <input className={s.loginInput}
                       placeholder='Your password'
                       type="password"
                    {...register('password',
                        {required: 'This is a required field!',
                     })}
                />
                <div>
                    { errors.password && <span>{errors.password.message}</span> }
                </div>
                <div className={s.loginRememberMe}>
                    <input
                        type="checkbox"
                        {...register('rememberMe') }

                    />
                    <span>Remember me</span>
                </div>
                <div className={s.loginBtn}>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login