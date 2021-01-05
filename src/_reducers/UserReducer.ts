import { userActions } from "../_actions/UserActions";

export const initialState = {
    user: null
}

const reducer = (state: any, action: { type: any, user: any }) => {
    switch(action.type){
        case userActions.SET_USER:
            return {
                ...state,
                user: action.user
            }
        default: 
            return state;
    }
}

export default reducer;