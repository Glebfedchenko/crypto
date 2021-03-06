import { FETCH_DATA, FETCH_FAILED } from '../actions/index'

const initialState = {
    isFetching: false,
    error: null
}

export default function coinReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                data: action.payload,
                isFetching: true
            }
        case FETCH_FAILED: {
            return {
                ...state,
                isFetching: false,
                error: console.log(error)
            }
        }
        default: return state
    }
}