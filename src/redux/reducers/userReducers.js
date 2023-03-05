import actionTypes from "../constant/constant";

const initialState = {
    statusGet: 'request'
}

const userReducers = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_LIST_USER_FAIL:
            return {
                ...state,
                statusGet: 'Get list fail!'
            }
        case actionTypes.GET_LIST_USER_REQUEST:
            return {
                ...state,
                statusGet: 'Sending request!'
            }
        case actionTypes.GET_LIST_USER_SUCCESS:
            return {
                ...state,
                statusGet: 'Get list successfully!'
            }

        default:
            return state
    }
}

export default userReducers;