import React, {useEffect} from 'react'
import s from './ProfilePosts.module.css'
import PostCreate from "./Post/PostCreate";
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../../../redux/posts-reducer";
import Post from "./Post/Post";

const ProfilePosts = () => {

    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.posts)

    useEffect(() => {
        dispatch(getPosts())
    }, [])



    return (
        <div className={s.posts}>
            <h2>My posts</h2>
            <PostCreate />
            { posts.map(post => <Post key={post.id} post={post}/>) }
        </div>
    )
}

export default ProfilePosts