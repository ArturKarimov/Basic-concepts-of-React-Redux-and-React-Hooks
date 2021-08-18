import React, {useEffect} from 'react'

import {withRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getStatusProfile, getUserProfile} from "../../redux/profile-reducer";
import Loader from "../Loader/Loader";
import UserProfile from "./UserProfile";
import {getUsers} from "../../redux/users-reducer";


const Profile = (props) => {

    const dispatch = useDispatch()
    const authUserId = useSelector(state => state.auth.userId)
    let userId = props.match.params.userId
    const { profile, loading } = useSelector(state => state.profile)

    if (!userId) {
        userId = authUserId || props.history.push('/login')
    }


    useEffect(() => {
        dispatch(getUsers())
        dispatch(getUserProfile(userId))
        dispatch(getStatusProfile(userId))
    }, [dispatch, userId])



    return (
        loading ? <Loader /> : <UserProfile
            profile={profile}
            userId={userId}
        />)
}

const ProfileWithRouter = withRouter(Profile)

export default ProfileWithRouter