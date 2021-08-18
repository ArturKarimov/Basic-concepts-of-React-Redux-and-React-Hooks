import axios from 'axios'
import {
    setCurrentPage, setFollowedUsers,
    setFollowProfile,
    setTotalUsersCount,
    setUnfollowProfile,
    setUsers
} from "./actions";
import {SET_CURRENT_PAGE, SET_FOLLOW_PROFILE, SET_TOTAL_USERS_COUNT, SET_UNFOLLOW_PROFILE, SET_USERS} from "./types";


const initialState = {
    users: [],
    pageSize: 10,
    currentPage: 1,
    totalUsersCount: 0,
    followedUsers: []
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state, users: action.payload
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.totalCount
            }
        case SET_FOLLOW_PROFILE:
            return {
                ...state, users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return {
                            ...user, followed: true
                        }
                    }
                    return user
                })
            }
        case SET_UNFOLLOW_PROFILE:
            return {
                ...state, users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return {
                            ...user, followed: false
                        }
                    }
                    return user
                })
            }

        default: return state
    }
}



export const getUsers = (currentPage = 1, pageSize = 10, pageNumber = 1) => async (dispatch) => {
    dispatch(setCurrentPage(pageNumber))
    const data = await axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
        {
        withCredentials: true,
        headers: {
            "api-key": "4d34438f-6e18-44dd-88b8-fc4ecad98332"
        }})
        .then(response => response.data)
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
}

export const followUserProfile = (event, userId) => async (dispatch) => {
    event.preventDefault()
    const data = await axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {}, {
        withCredentials: true,
        headers: {
            "api-key": "4d34438f-6e18-44dd-88b8-fc4ecad98332"
        }})
        .then(response => response.data)
    if (data.resultCode === 0) {
        dispatch(setFollowProfile(userId))
    }
}

export const unfollowUserProfile = (event, userId) => async (dispatch) => {
    event.preventDefault()
    const data = await axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
        withCredentials: true,
        headers: {
            "api-key": "4d34438f-6e18-44dd-88b8-fc4ecad98332"
        }})
        .then(response => response.data)
    if (data.resultCode === 0) {
        dispatch(setUnfollowProfile(userId))
    }
}

export const getSortUsers = (users, currentPage, pageSize) => async (dispatch) => {
    const data = await axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
        {
            withCredentials: true,
            headers: {
                "api-key": "4d34438f-6e18-44dd-88b8-fc4ecad98332"
            }})
        .then(response => response.data)
    dispatch(setUsers(users))
    dispatch(setTotalUsersCount(data.totalCount))
}


