import data from "../../Data/data.json"
import {
    DETAILS,
    SIGNIN_1,
    SIGN_OUT,
    LOG_IN,
    DESCRIPTION_DATA,
    SORTED_DATA,

} from "./ActionTypes"

const Data = data.data

const initState = {
    data: [...Data],
    signInData: {
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        signInState: false
    },
    descriptionData : {},
    sortedData:[]

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
            state.signInData.signInState = payload.state
            return {
                ...state,
            }
        }
        case SIGN_OUT: {
            
            state.signInData.signInState = payload.state
            return {
                ...state,
            }
        }
        case LOG_IN: {
            
            state.signInData.signInState = payload.state
            return {
                ...state,
            }
        }
        case DESCRIPTION_DATA:{
            return {
                ...state,
                descriptionData:payload
            }
        }
        case SORTED_DATA:{
            return {
                ...state,
                sortedData:[...payload]
            }
        }

        default: {
            return state
        }
    }
}