import {
    GET_GROUPS_PENDING,
    GET_GROUPS_SUCCESS,
    GET_GROUPS_FAIL
} from '../actions';

export const initialState = {
    posts: {data: [], loading: false, error: null}
};

export function Posts(state = initialState, action) {
    switch (action.type) {
        case GET_GROUPS_PENDING:
            return {
                ...state,
                posts: {
                    ...state.posts,
                    loading: true,
                    error: null
                }
            };

        case GET_GROUPS_SUCCESS:
            return {
                ...state,
                posts: {
                    data: action.payload,
                    loading: false,
                    error: null
                }
            };

        case GET_GROUPS_FAIL:
            return {
                ...state,
                posts: {
                    ...state.posts,
                    loading: false,
                    error: action.payload || 'Get posts failed'
                }
            };

        default: return state;
    }
}