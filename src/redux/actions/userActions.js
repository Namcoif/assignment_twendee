import axios from "axios"
import actionTypes from "../constant/constant"

const getListUsers = (numberPage = 1) => async (dispatch) => {
    dispatch({
        type: actionTypes.GET_LIST_USER_REQUEST
    })
    try {
        const response = await axios.get(`https://randomuser.me/api/?page=${numberPage}&results=10`)
        console.log(response);
        dispatch({
            type: actionTypes.GET_LIST_USER_SUCCESS,
        })
        return response.data.results
    } catch (error) {
        dispatch({
            type: actionTypes.GET_LIST_USER_FAIL
        })
    }
}

const userActions = {
    getListUsers
}
export default userActions;