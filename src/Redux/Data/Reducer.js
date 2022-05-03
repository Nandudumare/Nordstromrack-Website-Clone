import data from "../../Data/data.json"
import {
    DETAILS,
    SIGNIN_1
} from "./ActionTypes"

const Data = data.data

const initState = {
    data: [...Data],
    signInData: {
        email: "",
        firstName: "",
        lastName: "",
        password: "",

    }

}


export const dataReducer = (state = initState, {
    type,
    payload
}) => {
    switch (type) {
        case SIGNIN_1: {
            state.signInData.email = payload.email
            return {
                ...state
            }
        }
        case DETAILS: {
            state.signInData.firstName = payload.firstName
            state.signInData.lastName = payload.lastName
            state.signInData.password = payload.password
            return {
                ...state,
            }
        }
        default: {
            return state
        }
    }
}