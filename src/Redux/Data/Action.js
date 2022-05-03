import {
    DETAILS,
    SIGNIN_1
} from "./ActionTypes"





export const signInFn = (dispatch, email) => {
    dispatch({
        type: SIGNIN_1,
        payload: {
            email
        }
    })
}

export const detailsFn = (dispatch, first, last, password) => {
    localStorage.setItem("name", JSON.stringify(first))
    dispatch({
        type: DETAILS,
        payload: {
            firstName: first,
            lastName: last,
            password: password
        }
    })
}