import React from 'react'
import s from './ProfileStats.module.css'
import {useSelector} from "react-redux";

const ProfileStats = () => {


    const users = useSelector(state => state.users)
    const postsCount = useSelector(state => state.posts.posts)

    return (
        <>
        <div className={s.profileStats}>

            <div className={s.profileStatsItem}>
                <a href="#">
                    <div className={s.profileStatsItemPostsNum}>{postsCount.length}</div>
                    <div className={s.profileStatsItemPosts}>Posts</div>
                </a>
            </div>


            <div className={s.profileStatsItem}>
                <a href="#">
                    <div className={s.profileStatsItemFollowersNum}>{users.totalUsersCount}</div>
                    <div className={s.profileStatsItemFollowers}>All Users</div>
                </a>
            </div>


            <div className={s.profileStatsItem}>
                <a href="#">
                    <div className={s.profileStatsItemFollowingNum}>{'-'}</div>
                    <div className={s.profileStatsItemFollowing}>Followers</div>
                </a>
            </div>
        </div>
            { users.users.map(user => {
                user.followed ? console.log('FOLLOWED USERS', user) : console.log('ОШИБКА')
            }) }
            </>
    )
}

export default ProfileStats