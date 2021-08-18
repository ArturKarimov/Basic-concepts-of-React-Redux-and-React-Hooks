import {SET_AUTH_USER_DATA} from "./types";
import axios from "axios";
import {setAuthUserData} from "./actions";


const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state, ...action.payload
            }
        default: return state
    }
}

export const getAuthUserData = () => async (dispatch) => {
    const data = await axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
        withCredentials: true,
        headers: {
            "api-key": "4d34438f-6e18-44dd-88b8-fc4ecad98332"
        }
    })
        .then(response => response.data)

    if (data.resultCode === 0) {
        const { id, email, login } = data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    const data = await axios.post('https://social-network.samuraijs.com/api/1.0/auth/login',
        {email, password, rememberMe},
        {
        withCredentials: true,
        headers: {
            "api-key": "4d34438f-6e18-44dd-88b8-fc4ecad98332"
        }})
    if (data.data.resultCode === 0) {
        dispatch(getAuthUserData())
    }
}


export const logout = () => async (dispatch) => {
    const data = await axios.delete('https://social-network.samuraijs.com/api/1.0/auth/login',
        {
            withCredentials: true,
            headers: {
                "api-key": "4d34438f-6e18-44dd-88b8-fc4ecad98332"
            }})
    if (data.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

