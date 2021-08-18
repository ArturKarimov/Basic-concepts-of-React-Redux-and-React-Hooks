import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import {usersReducer} from "./users-reducer";
import {postsReducer} from "./posts-reducer";
import {authReducer} from "./auth-reducer";
import profileReducer from "./profile-reducer";

const rootReducers = combineReducers({
    users: usersReducer,
    posts: postsReducer,
    auth: authReducer,
    profile: profileReducer
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store