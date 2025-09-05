
const initialState = {
    User_data: []
}

export const todoreducers = (state = initialState, action) => {

    switch (action.type) {

        case "ADD_DATA":
            return {
                ...state,
                User_data: [...state.User_data, action.payload]
            }

        default:
            return state;
    }
}