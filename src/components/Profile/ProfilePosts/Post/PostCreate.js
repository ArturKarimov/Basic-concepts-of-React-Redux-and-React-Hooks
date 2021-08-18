import React, {useState} from 'react'
import s from './ProfileCreate.module.css'
import {useDispatch} from "react-redux";
import {setOwnPost} from "../../../../redux/actions";

const PostCreate = () => {

    const [value, setValue] = useState('')

    const dispatch = useDispatch()

    const onChange = (event) => {
        setValue(event.target.value)
    }

    const onCreate = (title) => {
        dispatch(setOwnPost(title))
    }

    const removeInputValue = (value) => {
        setValue('')
    }


    const handlerSubmit = (event) => {
            event.preventDefault()
            if (value.trim()) {
                onCreate(value)
                removeInputValue(value)
        }

    }



    return (
        <div className={s.postsCreate}>
            <div className={s.postAva}>
                <img
                    src='https://sun9-11.userapi.com/impf/c848520/v848520368/3d957/IDOulhdA8fg.jpg?size=1080x810&quality=96&sign=1d0d3aaacd4d0807ae5fb5e25535cd86&type=album'
                    alt=""/>
            </div>
            <form onSubmit={handlerSubmit} className={s.formPost}>
                <textarea
                          cols={60}
                          maxLength={1000}
                          placeholder={"What's new with you?"}
                          value={value}
                          onChange={onChange}
                />
                <div className={s.postButton}>
                    <button type='submit'>Send</button>
                </div>
            </form>
            <h2>All entries</h2>
        </div>
    )
}

export default PostCreate