import React from "react"
import s from "./Profile.module.css";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ProfileStats from "./ProfileStats/ProfileStats";
import ProfilePosts from "./ProfilePosts/ProfilePosts";

const UserProfile = ({profile, userId}) => {
    return (
        <div className={s.profile}>
            <div className={s.profileTitle}>
                <h2>{profile.fullName}</h2>
            </div>
            <ProfileStatus userId={userId}/>
            <ProfileStats/>
            <ProfilePosts/>
        </div>
    )
}

export default UserProfile