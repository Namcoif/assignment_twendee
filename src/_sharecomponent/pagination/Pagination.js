import React, { useEffect, useState } from 'react';

function Pagination(props) {
    const { data, changePage } = props

    const [currentPage, setCurrentPage] = useState(1);

    const [listUsers, setListUsers] = useState([]);

    const _prePage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }
    const _nextPage = () => {
        if (currentPage < 10) {
            setCurrentPage(currentPage + 1)
        }
    }

    const _sortListUsers = (list, field, order) => {
        let users = [...list]

        switch (field) {
            case "fullName":
                if (order === "asc") {
                    users.sort(function (a, b) {
                        if (a.name.first < b.name.first) {
                            return -1;
                        }
                        if (a.name.first > b.name.first) {
                            return 1;
                        }
                        return 0;
                    })
                }
                if (order === "desc") {
                    users.sort(function (a, b) {
                        if (a.name.first > b.name.first) {
                            return -1;
                        }
                        if (a.name.first < b.name.first) {
                            return 1;
                        }
                        return 0;
                    });
                }
                break;
            case "username":
                if (order === "asc") {
                    users.sort(function (a, b) {
                        if (a.login.username < b.login.username) {
                            return -1;
                        }
                        if (a.login.username > b.login.username) {
                            return 1;
                        }
                        return 0;
                    })
                }
                if (order === "desc") {
                    users.sort(function (a, b) {
                        if (a.login.username > b.login.username) {
                            return -1;
                        }
                        if (a.login.username < b.login.username) {
                            return 1;
                        }
                        return 0;
                    });
                }
                break;
            default:
                break;
        }
        setListUsers(users)
    }

    useEffect(() => {
        setListUsers(data)
    }, [data])
    useEffect(() => {
        changePage(currentPage)
    }, [currentPage])
    return (
        <div
            style={
                {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',

                }
            }
        >
            <table
                style={
                    {
                        borderCollapse: 'collapse',
                        padding: '5px',
                        background: '#11aacc',
                        marginTop: '5px',
                    }
                }
            >
                <thead>
                    <tr>
                        <th>Full Name
                            <td>
                                <button onClick={() => _sortListUsers(listUsers, "fullName", "asc")}>Ascending </button>
                                <button onClick={() => _sortListUsers(listUsers, "fullName", "desc")}>Descending </button>
                            </td>
                        </th>
                        <th>Username
                            <td>
                                <button onClick={() => _sortListUsers(listUsers, "username", "asc")}>Ascending </button>
                                <button onClick={() => _sortListUsers(listUsers, "username", "desc")}>Descending </button>
                            </td>
                        </th>
                        <th>Thumbnail Icon</th>
                    </tr>
                </thead >
                <tbody
                    style={
                        {
                            textAlign: 'left'
                        }
                    }
                >
                    {
                        listUsers.map((item) => {
                            return (<tr>
                                <td
                                    style={
                                        {
                                            paddingLeft: '5px'
                                        }
                                    }
                                >{item.name.title + '. ' + item.name.first + ' ' + item.name.last}</td>
                                <td
                                    style={
                                        {
                                            paddingLeft: '5px'
                                        }
                                    }
                                >{item.login.username}</td>
                                <td
                                    style={
                                        {
                                            paddingLeft: '5px'
                                        }
                                    }
                                >
                                    <img src={item.picture.thumbnail} />
                                </td>
                            </tr>)
                        })
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={3}>
                            <button onClick={_prePage}>Pre</button>
                            <span> {currentPage} </span>
                            <button onClick={_nextPage}>Next</button>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}

export default Pagination;