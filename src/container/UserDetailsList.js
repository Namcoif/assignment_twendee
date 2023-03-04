import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '../_sharecomponent/pagination/Pagination';
import userActions from './../redux/actions/userActions';

function UserDetailsList(props) {

    const dispatch = useDispatch();

    const selector = useSelector(state => state);

    const [listUsers, setListUsers] = useState([])
    const [numberPage, setNumberPage] = useState(1)
    const [status, setStatus] = useState('');

    const _changeNumberPage = (numberPage) => {
        setNumberPage(numberPage)
    }

    useEffect(() => {
        dispatch(userActions.getListUsers(numberPage)).then((res) => {
            setListUsers(res)
        })
    }, [numberPage])

    useEffect(() => {
        setStatus(selector.user.statusGet)
    }, [selector.user.statusGet])

    return (
        <div>
            <span>Status: {status}</span>
            <Pagination
                data={listUsers}
                changePage={_changeNumberPage}
            />
        </div>
    );
}

export default UserDetailsList;