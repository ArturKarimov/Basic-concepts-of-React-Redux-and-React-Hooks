import React, {useState} from 'react'
import s from './Post.module.css'

const Post = ({date, post}) => {





    return (
        <div className={s.entryItem}>

            <div className={s.entryItemHeader}>
                <div className={s.entryItemAva}>
                    <img
                        src='https://sun9-11.userapi.com/impf/c848520/v848520368/3d957/IDOulhdA8fg.jpg?size=1080x810&quality=96&sign=1d0d3aaacd4d0807ae5fb5e25535cd86&type=album'
                        alt=""/>
                </div>
                <div className={s.entryItemName}>
                    Artur Karimov
                </div>
                <div className={s.entryItemDate}>
                    { date }
                </div>
            </div>

            <div className={s.entry}>
                <div className={s.entryText}>
                    { post.title }
                </div>
            </div>
            <div className={s.entryActions}>
                <button className={s.entryLike}>
                    <i className="far fa-heart"></i>
                </button>
                <button className={s.comments}>
                    <i className="far fa-comment"></i>
                </button>
            </div>

        </div>
    )
}

export default Post