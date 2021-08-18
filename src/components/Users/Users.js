import React, {useContext, useEffect} from 'react'
import s from './Users.module.css'
import Context from "../../Context";
import {useDispatch, useSelector} from "react-redux";
import User from "../AllUsers/User/User";
import {getUsers} from "../../redux/users-reducer";

const Users = () => {

    const {openModal} = useContext(Context)
    const dispatch = useDispatch()
    const users = useSelector(state => state.users.users)

    useEffect(() => {
        dispatch(getUsers())
    }, [])

    return (
        <div className={s.users}>
            <h2>Friends</h2>
            <div className={s.usersSearch}>
                <div className={s.searchLogo}>
                    <i className="fas fa-search"></i>
                </div>
                <textarea rows={1}
                          cols={40}
                          maxLength={200}
                          placeholder={"Search for my friends"}
                />
            </div>
            <div className={s.usersAll}>

                { users.map(user => {
                    if (user.followed) {
                        return <User user={user}/>
                    }
                }) }
            </div>
        </div>
    )
}

export default Users




{/*<div className={s.userItem}>*/}
{/*    <div className={s.userAvaItem}>*/}
{/*        <div className={s.userAva}>*/}
{/*            <img*/}
{/*                src='https://sun9-63.userapi.com/impg/xEpLd7LRr_pW3j_j_GT9DlLaEveFnypk0qxCaw/mExZcnUOw94.jpg?size=1280x959&quality=96&sign=6c7ed89b2fd52d4ddb970d18338b6322&type=album'*/}
{/*                alt="avatar"/>*/}
{/*        </div>*/}
{/*    </div>*/}

{/*    <div className={s.userInfo}>*/}
{/*        <div className={s.userName}>*/}
{/*            <a href="#">Luna Karimova</a>*/}
{/*        </div>*/}
{/*        <div onClick={openModal} className={s.userSendMessage}>*/}
{/*            <a href="#">Написать сообщение</a>*/}
{/*        </div>*/}
{/*        <div className={s.userUnfollow}>*/}
{/*            <a href="#">*/}
{/*                <i className="fas fa-times"></i>*/}
{/*            </a>*/}
{/*        </div>*/}
{/*    </div>*/}
{/*</div>*/}