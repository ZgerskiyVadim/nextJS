export const initialState = {
    loader: { data: {} }
};

export function appReducer(state = initialState, action) {
    switch (action.type) {
        case 'SETUP_LOADER_VISIBILITY': {
            const { id = 'unknown', waiting = false } = action.payload || {};
            return {
                ...state,
                loader: {
                    data: {
                        ...state.loader.data,
                        [id]: waiting
                    }
                }
            };
        }
        default:
            return state;
    }
}
