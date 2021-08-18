import React, {useEffect, useMemo, useState} from 'react'
import s from './UsersSearch.module.css'
import MySelect from "../../Select/MySelect";
import {getSortUsers} from "../../../redux/users-reducer";
import {useDispatch, useSelector} from "react-redux";

const UsersSearch = () => {

    const dispatch = useDispatch()
    const users = useSelector(state => state.users.users)
    const [searchUsers, setSearchUsers] = useState('')
    const [selectedSort, setSelectedSort] = useState('')



    const sortUsers = (sort) => {
        setSelectedSort(sort)
        console.log(selectedSort)
        if (sort === 'name') {
            dispatch(getSortUsers([...users].sort((a, b) => a[sort].localeCompare(b[sort]))))
        } else if (sort === 'followed') {
            dispatch(getSortUsers([...users].sort((a, b) => Number(b[sort] - Number(a[sort])))))
        }
        return users
    }

    useEffect(() => {
        if (searchUsers) {
            dispatch(getSortUsers((users.filter((user) => user.name.toLowerCase().includes(searchUsers)))))
        }
        return users
    }, [searchUsers])



    return (
        <>
             <h2 className={s.usersTitle}>Friends</h2>
            <div className={s.usersSearch}>
                <div className={s.searchLogo}>
                    <i className="fas fa-search"></i>
                </div>
                <div>
                    <input
                        value={searchUsers}
                        onChange={(event) => setSearchUsers(event.target.value)}
                        placeholder={"Search for my friends"}
                        maxLength={200}
                    />
                </div>
            </div>
            <div>
                <MySelect
                    value={selectedSort}
                    onChange={sortUsers}
                    defaultValue='Sorting'
                    options={[
                        {value: 'name', name: 'By name'},
                        {value: 'followed', name: 'Followed'}
                    ]}
                />
            </div>
        </>
    )
}

export default UsersSearch