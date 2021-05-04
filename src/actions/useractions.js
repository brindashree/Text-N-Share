import { userConstants } from "../reducers/constants"
import firebase from 'firebase';

export const getRealTimeUsers = (uid) => {
    return async (dispatch) => {
        dispatch({
            type: `${userConstants.GET_REAL_TIME_USERS}_REQUEST`
        });
        const db = firebase.firestore();
        db.collection('users').onSnapshot((querySnapshot) => {
            const users = [];
            querySnapshot.forEach(function (doc) {
                if (doc.data().uid != uid) {
                    users.push(doc.data());
                }
                
            });
            console.log(users);
            dispatch({
                type: `${userConstants.GET_REAL_TIME_USERS}_SUCCESS`,
                payload:{users}
            })
        })
    }
}