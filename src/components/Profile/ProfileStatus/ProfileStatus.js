import React, {useEffect, useState} from 'react'
import s from './ProfileStatus.module.css'
import {useDispatch, useSelector} from "react-redux";
import {updateStatusProfile} from "../../../redux/profile-reducer";


const ProfileStatus = ({userId}) => {


    const [editMode, setEditMode] = useState(false)
    const currentStatus = useSelector(state => state.profile.status)
    const [status, setStatus] = useState(currentStatus)
    const authUserId = useSelector(state => state.auth.userId)

    const dispatch = useDispatch()




    useEffect(() => {
        setStatus(currentStatus)
    }, [currentStatus])


    const activateEditMode = () => {
        if (authUserId === userId) {
            setEditMode(true)
        }
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        dispatch(updateStatusProfile(status))
    }

    const onChangeStatus = (event) => {
        setStatus(event.target.value)
    }

    const handleFocus = (event) => {
        event.target.select()
    }


    return (
        <div className={s.profileStatus}>
            { !editMode && <div>
                <span onDoubleClick={activateEditMode}>{ status || 'Status not set' }</span>
            </div> }
            { editMode &&  <div className={s.profileStatusChange}>
                    <textarea rows={2}
                              maxLength={300}
                              placeholder={"Set status"}
                              value={status}
                              onChange={onChangeStatus}
                              onBlur={deactivateEditMode}
                              autoFocus={true}
                              onFocus={handleFocus}
                    />
            </div> }
        </div>
    )
}

export default ProfileStatus