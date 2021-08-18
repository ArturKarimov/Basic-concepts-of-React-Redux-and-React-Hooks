import React, {useContext, useEffect, useState} from 'react'
import s from './AllUsers.module.css'
import Context from "../../Context";
import UsersSearch from "./UsersSearch/UsersSearch";
import {getUsers} from "../../redux/users-reducer";
import {useDispatch, useSelector} from "react-redux";
import User from "./User/User";
import Paginator from "../Pagination/Pagination";

const AllUsers = () => {

    const {openModal} = useContext(Context)
    const dispatch = useDispatch()
    const users = useSelector(state => state.users.users)
    const [followedUser, setFollowedUser] = useState([])

    useEffect(() => {
        dispatch(getUsers())
    }, [])

    console.log('USERS', users)


    return (
        <div className={s.users}>
            <UsersSearch />
            <Paginator />
            { users.map(user => <User user={user} key={user.id} openModal={openModal}/>) }
        </div>
    )
}

export default AllUsers