import {
    DETAILS,
    LOG_IN,
    SIGNIN_1,
    SIGN_OUT,
    DESCRIPTION_DATA,
    SORTED_DATA
} from "./ActionTypes"





export const signInFn = (dispatch, email) => {
    localStorage.setItem("email", JSON.stringify(email))
    dispatch({
        type: SIGNIN_1,
        payload: {
            email
        }
    })
}

export const detailsFn = (dispatch, first, last, password) => {
    localStorage.setItem("name", JSON.stringify(first))
    localStorage.setItem("password", JSON.stringify(password))

    dispatch({
        type: DETAILS,
        payload: {
            firstName: first,
            lastName: last,
            password: password,
            state: true
        }
    })
}

export const signout = (dispatch) => {
    // const empty = ""
    // localStorage.setItem("name", JSON.stringify(empty))
    // localStorage.removeItem("name")
    dispatch({
        type: SIGN_OUT,
        payload: {
            state: false
        }
    })
}


export const login = (dispatch) => {
    dispatch({
        type: LOG_IN,
        payload: {
            state: true
        }
    })



}


export const description_data = (dispatch,payload)=>{
    dispatch({
        type:DESCRIPTION_DATA,
        payload
    })
}




export const sorted_data = (dispatch,payload)=>{
    dispatch({
        type:SORTED_DATA,
        payload
    })
}