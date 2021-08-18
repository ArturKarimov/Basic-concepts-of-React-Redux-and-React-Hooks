import {HIDE_LOADER, SET_STATUS, SET_USER_PROFILE, SHOW_LOADER} from "./types";
import axios from "axios";
import {hideLoader, setStatusProfile, setUserProfile, showLoader} from "./actions";

const initialState = {
    profile: null,
    loading: true,
    status: ''
}



const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.payload
            }
        case SET_STATUS:
            return {
                ...state, status: action.payload
            }
        case SHOW_LOADER:
            return {
                ...state, loading: true
            }
        case HIDE_LOADER:
            return {
                ...state, loading: false, profile: action.payload
            }
        default: return state
    }
}




export const getUserProfile = (userId) => async (dispatch) => {
    dispatch(showLoader())
    const data = await axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId,
        {
            withCredentials: true,
            headers: {
                "api-key": "4d34438f-6e18-44dd-88b8-fc4ecad98332"
            }})
        .then(response => response.data)
    dispatch(setUserProfile(data))
    dispatch(hideLoader(data))
}


export const getStatusProfile = (userId) => async (dispatch) => {
    const currentStatus = await axios.get(`https://social-network.samuraijs.com/api/1.0/profile/status/` + userId, {
        withCredentials: true,
        headers: {
            "api-key": "4d34438f-6e18-44dd-88b8-fc4ecad98332"
        }})
        .then(currentStatus => currentStatus.data)
    dispatch(setStatusProfile(currentStatus))
}



export const updateStatusProfile = (statusProfile) => async (dispatch) => {
    const response = await axios.put('https://social-network.samuraijs.com/api/1.0/profile/status', { status: statusProfile },
        {
            withCredentials: true,
            headers: {
                "api-key": "4d34438f-6e18-44dd-88b8-fc4ecad98332"
            }})
    if (response.resultCode === 0) {
        dispatch(setStatusProfile(statusProfile))
    }
}

export default profileReducer