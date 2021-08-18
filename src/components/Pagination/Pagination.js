import React from "react";
import s from './Pagination.module.css'
import Pagination from "react-js-pagination";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../../redux/users-reducer";

const Paginator = () => {

    const {currentPage, totalUsersCount, pageSize} = useSelector(state => state.users)
    const dispatch = useDispatch()


    const onChangeCurrentPage = (pageNumber) => {
        dispatch(getUsers(pageNumber, pageSize, pageNumber))
    }

        return (
            <div className={s.pagination}>
                <Pagination
                    activePage={currentPage}
                    itemsCountPerPage={pageSize}
                    totalItemsCount={totalUsersCount}
                    pageRangeDisplayed={7}
                    itemClass={'page-item' + ' ' + s.pageItem}
                    linkClass={'page-link' + ' ' + s.pageLink}
                    activeClass={s.active}
                    onChange={onChangeCurrentPage}
                />
            </div>
        )
}

export default Paginator;
