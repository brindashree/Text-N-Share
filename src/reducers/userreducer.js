import { userConstants } from "./constants"

const initState = {
    users: [],
    conversations: []
}

export default (state = initState, action) => {

    switch(action.type){
        case `${userConstants.GET_REAL_TIME_USERS}_REQUEST`:
            break;
        case `${userConstants.GET_REAL_TIME_USERS}_SUCCESS`:
            state = {
                ...state,
                users: action.payload.users
            }
            break;
        case userConstants.GET_REAL_TIME_MESSAGES:
            state = {
                ...state,
                conversations: action.payload.conversations
            }
            break;
        case `${userConstants.GET_REAL_TIME_MESSAGES}_FAILURE`:
            state = {
                ...state,
                conversations: []
            }
            break;
        
    }


    return state;

}