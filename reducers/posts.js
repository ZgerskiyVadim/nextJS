export const initialState = {
    posts: {data: [], loading: false, error: null}
};

export function postsReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_POSTS_DATA': {
            return {
                ...state,
                posts: {
                    data: action.payload,
                    loading: action.loading,
                    error: action.error
                }
            };
        }

        default: return state;
    }
}