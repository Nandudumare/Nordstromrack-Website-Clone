import data from "../../Data/data.json"

const Data = data.data

const initState = {
    data: [...Data],

}


export const dataReducer = (state = initState, {
    type,
    payload
}) => {
    switch (type) {
        default: {
            return state
        }
    }
}