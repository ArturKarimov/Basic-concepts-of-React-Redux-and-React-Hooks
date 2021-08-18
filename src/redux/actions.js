import {
    FILTER_USERS,
    HIDE_LOADER,
    SET_AUTH_USER_DATA, SET_AUTH_USER_ID, SET_CURRENT_PAGE, SET_FOLLOW_PROFILE, SET_FOLLOWED_USERS,
    SET_OWN_POST,
    SET_POSTS, SET_SORT_USERS,
    SET_STATUS, SET_TOTAL_USERS_COUNT, SET_UNFOLLOW_PROFILE,
    SET_USER_PROFILE,
    SET_USERS,
    SHOW_LOADER
} from "./types";

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        payload: users
    }
}


export const setPosts = (posts) => {
    return {
        type: SET_POSTS,
        payload: posts
    }
}

export const setOwnPost = (text) => {
    return {
        type: SET_OWN_POST,
        payload: text
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => {
    return {
        type: SET_AUTH_USER_DATA,
        payload: {userId, email, login, isAuth}
    }
}

export const setStatusProfile = (status) => {
    return {
        type: SET_STATUS,
        payload: status
    }
}

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        payload: profile
    }
}

export const showLoader = () => {
    return {
        type: SHOW_LOADER
    }
}

export const hideLoader = (data) => {
    return {
        type: HIDE_LOADER,
        payload: data
    }
}

export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}

export const setTotalUsersCount = (totalCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalCount
    }
}

export const setFollowProfile = (userId) => {
    return {
        type: SET_FOLLOW_PROFILE,
        userId
    }
}

export const setUnfollowProfile = (userId) => {
    return {
        type: SET_UNFOLLOW_PROFILE,
        userId
    }
}

export const setFollowedUsers = (user) => {
    return {
        type: SET_FOLLOWED_USERS,
        user
    }
}