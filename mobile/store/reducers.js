import { combineReducers } from "redux";

const initialState = {
    loading: false,
    moreLoading: false,
    error: null,
    usersList: [],
    user:{},
    isListEnd: false,
}

const UsersReducers = (state = initialState, action) => {
     switch (action.type) {
        case 'LIST_API_REQUEST':
            if (action.payload.page === 1) {
                return { ...state, loading: true }
            } else {
                return { ...state, moreLoading: true }
            }

        case 'LIST_API_SUCCESS':
             return {
                ...state,
                usersList: [...state.usersList,...action.usersList],
                error: '',
                loading: false,
                moreLoading: false
            }

        case 'API_FAILURE':
            return {
                ...state,
                error: action.error,
                loading: false,
                moreLoading: false
            }

        case 'API_LIST_END':
            return {
                ...state,
                isListEnd: true,
                loading: false,
                moreLoading: false
            }

        case 'USER_API_REQUEST':             
            return { ...state, loading: true }
        case 'USER_API_SUCCESS':
            return {
                ...state,
                user: {...action.user},
                error: '',
                loading: false,
            }

        default: return state;
    }
}

export const rootReducer = combineReducers({
    users: UsersReducers
})
