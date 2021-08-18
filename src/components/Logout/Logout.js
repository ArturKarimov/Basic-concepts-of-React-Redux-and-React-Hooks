import React, {useEffect} from 'react'
import s from './Logout.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getAuthUserData, logout} from "../../redux/auth-reducer";
import {NavLink} from "react-router-dom";

const Logout = () => {

    const isAuth = useSelector(state => state.auth.isAuth)
    const dispatch = useDispatch()
    const logoutAuth = async () => {
        await dispatch(logout())
    }

    useEffect(() => {
        dispatch(getAuthUserData())
    }, [])

    return (
        <div className={s.logoutItem}>
            {isAuth
                ?
                <div>
                    <div className={s.loginTitle}>You are logged into the system</div>
                    <NavLink className={s.navLink + ' ' + s.navLinkLogout} to={'/login'}>
                        <button onClick={logoutAuth} className={s.login + ' ' + s.logout}>Logout</button>
                    </NavLink>
                </div>
                :
                <div>
                    <div className={s.loginTitle}>You are not logged in the system:</div>
                    <NavLink className={s.navLink} to={'/login'}>
                        <button className={s.login}>Login</button>
                    </NavLink>
                </div>
            }
        </div>
    )
}

export default Logout