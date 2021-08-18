import React from 'react'
import s from './User.module.css'
import avatar from './../../../assets/img/avatar.png'
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {followUserProfile, unfollowUserProfile} from "../../../redux/users-reducer";


const User = ({openModal, user}) => {

    const dispatch = useDispatch()

    return (
        <div className={s.userItem}>
            <div className={s.userAvaItem}>
                <div className={s.userAva}>
                    <img src={user.photos.small || avatar} alt="avatar"/>
                </div>
            </div>
            <div className={s.userInfo}>
                <div className={s.userName}>
                    <NavLink to={"/profile/" + user.id}>{user.name}</NavLink>
                </div>

                <div onClick={openModal} className={s.userSendMessage}>
                    <a href="#">Написать сообщение</a>
                </div>

                { user.followed
                ? <div className={s.userUnfollow}>
                        <a href="#" onClick={(event) => dispatch(unfollowUserProfile(event, user.id))}>
                            <i className="fas fa-times"></i>
                        </a>
                    </div>
                : <div className={s.userFollow}>
                        <a href="#" onClick={(event) => dispatch(followUserProfile(event, user.id))}>
                            <i className="fas fa-check"></i>
                        </a>
                    </div>
                }

            </div>
        </div>
    )
}

export default User