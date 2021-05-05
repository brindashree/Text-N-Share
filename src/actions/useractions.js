import { userConstants } from "../reducers/constants"
import firebase from 'firebase/app';

export const getRealTimeUsers = (uid) => {

    return async (dispatch) => {
        dispatch({
            type: `${userConstants.GET_REAL_TIME_USERS}_REQUEST`
        });

        const db = firebase.firestore();

        const unsubscribe = db.collection('users').onSnapshot((querySnapshot) => {
            const users = [];
            querySnapshot.forEach(function (doc) {
                if (doc.data().uid != uid) {
                    users.push(doc.data());
                }
                
            });
            console.log(users);
            dispatch({
                type: `${userConstants.GET_REAL_TIME_USERS}_SUCCESS`,
                payload: { users }
            })
        });
        return unsubscribe;
    }
}

export const updateMessage = (msgObj) => {
    return async dispatch => {

        const db = firebase.firestore();

        db.collection('conversation').add({
            ...msgObj,
            isView: false,
            createdAt: new Date()
        }).then((data) => {
            console.log(data);
            
        }).catch(error => {
            console.log(error);
        })
     }
}
 
export const getRealtimeConversations = (user) => {
    return async dispatch => {

        const db = firebase.firestore();
        db.collection('conversation')
        .where('user_uid_1', 'in', [user.uid_1, user.uid_2])
        .orderBy('createdAt', 'asc')
        .onSnapshot((querySnapshot) => {

            const conversations = [];

            querySnapshot.forEach(doc => {

                if(
                    (doc.data().user_uid_1 == user.uid_1 && doc.data().user_uid_2 == user.uid_2)
                    || 
                    (doc.data().user_uid_1 == user.uid_2 && doc.data().user_uid_2 == user.uid_1)
                ){
                    conversations.push(doc.data())
                }
              
               
            });

            dispatch({
                type: userConstants.GET_REAL_TIME_MESSAGES,
                payload: { conversations }
            })

            console.log(conversations);
        })
        


    }
}