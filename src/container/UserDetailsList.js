import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '../_sharecomponent/pagination/Pagination';
import userActions from './../redux/actions/userActions';

function UserDetailsList(props) {

    const dispatch = useDispatch();

    const selector = useSelector(state => state);

    const [listUsers, setListUsers] = useState([])
    const [pageNumber, setPageNumber] = useState(1)
    const [status, setStatus] = useState('');

    const _changePageNumber = (pageNumber) => {
        setPageNumber(pageNumber)
    }

    useEffect(() => {
        dispatch(userActions.getListUsers(pageNumber)).then((res) => {
            setListUsers(res)
        })
    }, [pageNumber])

    useEffect(() => {
        setStatus(selector.user.statusGet)
    }, [selector.user.statusGet])

    return (
        <div>
            <span>Status: {status}</span>
            <Pagination
                data={listUsers}
                changePage={_changePageNumber}
            />
        </div>
    );
}

export default UserDetailsList;