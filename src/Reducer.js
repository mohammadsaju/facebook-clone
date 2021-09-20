export const initialState = {
    user: null
};

export const actionTypes = {
    SET__USER: 'SET__USER'
};

export const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case actionTypes.SET__USER:
            return {
                ...state,
                user: action.user
            }
        default:
            return state;
    }
}
export default reducer;