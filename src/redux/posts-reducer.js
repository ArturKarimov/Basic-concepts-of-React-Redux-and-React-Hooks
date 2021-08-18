import {SET_OWN_POST, SET_POSTS} from "./types";
import {setPosts} from "./actions";

const initialState = {
    posts: []
}

export const postsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_POSTS:
            return {
                ...state, posts: action.payload
            }
        case SET_OWN_POST:
            const newPost = {
                userId: '',
                id: Date.now().toString(),
                title: action.payload,
                body: ''
            }
            return {
                ...state, posts: [newPost, ...state.posts]
            }
        default: return state
    }
}


export const getPosts = () => async (dispatch) => {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
        .then(response => response.json())
        dispatch(setPosts(posts))
}
