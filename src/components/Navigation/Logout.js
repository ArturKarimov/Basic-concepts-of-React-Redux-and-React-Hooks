import React from "react";
import s from "./NavBar.module.css";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logout} from "../../redux/auth-reducer";


const Logout = () => {

    const dispatch = useDispatch()

    const logoutAuth = async () => {
        await dispatch(logout())
    }

    return (
        <NavLink className={s.navLink} to='/logout'>
            <div className={s.logout}>
                <div className={s.navItem}>
                    <div className={s.navImg + ' ' + s.logoutImg}>
                        <i className="fas fa-sign-out-alt"></i>
                    </div>
                    <div className={s.navTitle}>
                        <button onClick={logoutAuth}>Logout</button>
                    </div>
                </div>
            </div>
        </NavLink>
    )
}

export default Logout