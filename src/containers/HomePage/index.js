import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRealTimeUsers, updateMessage,getRealtimeConversations } from "../../actions/useractions";
import Layout from "../../components/Layout";
import './styles.css';


 const User = (props) => {
        const { user ,onClick} = props;
     return (
         <div onClick={() => onClick(user)} className="card">
             <div className="card-body">
                 <div className="row">
                     <div className="col-3">
                         <img style={{ maxWidth: "50px", maxHeight: "50px", overflow: "hidden", borderRadius: "25px" }} src="https://i.pinimg.com/originals/be/ac/96/beac96b8e13d2198fd4bb1d5ef56cdcf.jpg" alt="" />
                     </div>
                     <div className="col-9 align-middle" style={{ display: 'flex', flex: 1, justifyContent: 'space-between', margin: '0 10px' }}>
                         <span >{user.firstName} {user.lastName}</span>
                         <span>{user.isOnline ? 'online' : "offline"}</span>
                                        
                     </div>
                           
                 </div>
             </div>
         </div>
     );
    }

const HomePage = (props) => {



    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    const user = useSelector(state => state.user);
    const [chatStarted, setChatStarted] = useState(false);
    const [chatUser, setChatUser] = useState('');
    const [message, setMessage] = useState('');
    const [userUid, setUseruid] = useState('');

    let unsubscribe;

    useEffect(() => {
       unsubscribe= dispatch(getRealTimeUsers(auth.uid))
            .then(unsubscribe => {
            return unsubscribe;
            }).catch(error => {
                console.log(error);
            })
        
    }, []);

    useEffect(() => {
        return () => {
            unsubscribe.then(f => f()).catch(error => console.log(error));
        }
    }, [])

   


    const initChat = (user) => {
        setChatStarted(true);
        setChatUser(`${user.firstName} ${user.lastName}`);
        setUseruid(user.uid);
        console.log(user);
        dispatch(getRealtimeConversations({ uid_1: auth.uid, uid_2: user.uid }));
    }

    const submitMessage = (e) => {
        const msgObj = {
            user_uid_1: auth.uid,
            user_uid_2: userUid,
            message
        }
        if (message !== '') {
            dispatch(updateMessage(msgObj)).then(() => {
                setMessage('')
            });
        }
        console.log(msgObj);
    }
    return (
        <Layout>
            <div className="container-fluid vh-100">
                <div className="row">
                    <div className="col-3 bg-info vh-100" >
                        {
                            user.users.length > 0 ? user.users.map(user => {
                                return (

                                    <User
                                        key={user.uid}
                                        onClick={initChat}
                                        user={user} />
                              
                                

                                );
                        }) : null
                        }
                       
                    </div>
                    <div className="col-9 bg-warning">
                        
                        <div className="text-center py-2 bg-success">
                            {
                                chatStarted ? chatUser:''
                            }
                        </div>
                        <div>
                            {
                                chatStarted ?
                                    user.conversations.map(con =>
                                        <div
                                            style={{ textAlign: con.user_uid_1 == auth.uid ? 'right' : 'left' }}
                                            
                                        >
                                    <p className="bg-info p-2 m-2 d-inline-flex">{ con.message}</p>
                            </div>  )
                                   : null
                            }
                            
                        </div>
                        {
                            chatStarted ?
                                <div style={{ display: "flex", position: "fixed", width: "70%", height: "50px", bottom: "0" }} >
                                <textarea
                                    value={message}
                                    onChange={(e)=> setMessage(e.target.value)}
                                    style={{ width: "90%" }}  ></textarea>
                            <button onClick={submitMessage}>Send</button>
                        </div> : null
                        }
                        
                    </div>
                </div>
            </div>
          
    
   
        </Layout>
       
      );
}
 
export default HomePage;