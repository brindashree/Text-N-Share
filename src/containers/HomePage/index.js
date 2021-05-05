import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRealTimeUsers, updateMessage,getRealtimeConversations } from "../../actions/useractions";
import Layout from "../../components/Layout";
import './styles.css';


 const User = (props) => {
        const { user ,onClick} = props;
     return (
         <div onClick={() => onClick(user)} className="card my-3" style={{backgroundColor: '#FEFCE8'}}>
             <div className="card-body">
                 <div className="row">
                     <div className="col-3">
                         <img style={{ maxWidth: "60px", maxHeight: "60px", overflow: "hidden", borderRadius: "25px" }}
                         className={user.isOnline ? 'online' : 'offline'}    src="http://static1.squarespace.com/static/54b7b93ce4b0a3e130d5d232/54e20ebce4b014cdbc3fd71b/5a992947e2c48320418ae5e0/1519987239570/icon.png?format=1500w" />
                     </div>
                     <div className="col-9  fw-bold fs-5 my-3" >
                         <span >{user.firstName} {user.lastName}</span>
                        
                                        
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
                    <div className="col-3 vh-100" style={{backgroundColor: "#5c258d"}} >
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
                    <div className="col-9 " style={{backgroundColor: "#CFFAFE"}}>
                        
                        <div className="text-center py-3 fw-bold fs-5 m-0" style={{backgroundColor: '#FEFCE8', borderBottomLeftRadius:"1rem",borderBottomRightRadius:"1rem"}}>
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
                                            <p
                                                className="p-2 m-2 fw-bold d-inline-flex"
                                                style={{borderRadius:"1rem",backgroundColor:"#38BDF8"}}
                                            >{con.message}</p>
                            </div>  )
                                   : null
                            }
                            
                        </div>
                        {
                            chatStarted ?
                                <div style={{ display: "flex", position: "fixed", width:"73%", height: "40px", bottom: "0" }} >
                                <textarea
                                    value={message}
                                    onChange={(e)=> setMessage(e.target.value)}
                                    style={{ width: "100%" ,bottom:"0", borderRadius:"3rem" , paddingLeft:"2rem",border: "3px solid #94a3b8"}}  ></textarea>
                                    <button
                                        style={{
                                            width: "70px",
                                           bottom:"0",
                                            backgroundColor: "#2DD4BF",
                                            borderRadius:"3rem"
                                        }}
                                        onClick={submitMessage}>➔ </button>
                        </div> : null
                        }
                        
                    </div>
                </div>
            </div>
          
    
   
        </Layout>
       
      );
}
 
export default HomePage;