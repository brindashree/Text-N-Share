import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRealTimeUsers } from "../../actions/useractions";
import Layout from "../../components/Layout";
import './styles.css'

const HomePage = (props) => {

    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    const user = useSelector(state => state.user);

    useEffect(() => {
        dispatch(getRealTimeUsers(auth.uid));
    }, []);

    return (
        <Layout>
            <div className="container-fluid vh-100">
                <div className="row">
                    <div className="col-3 bg-info vh-100" >
                        {user.users.length > 0 ? user.users.map(user => {
                            return (
                                <div key={user.uid} className="card">
                                  <div className="card-body">
                                    <div className="row">
                                        <div className="col-3">
                                              <img style={{    maxWidth: "50px",maxHeight: "50px",overflow: "hidden",borderRadius:"25px"}}src="https://i.pinimg.com/originals/be/ac/96/beac96b8e13d2198fd4bb1d5ef56cdcf.jpg" alt="" />
                                        </div>
                                    <div className="col-9 align-middle" style={{display:'flex',flex:1,justifyContent:'space-between',margin: '0 10px'}}>
                                                <span >{user.firstName} { user.lastName}</span>
                                                <span>{user.isOnline ? 'online':"offline" }</span>
                                        
                                    </div>
                           
                               </div>
                            </div>
                        </div>
                            )
                        }) : null
                        }
                       
                    </div>
                    <div className="col-9 bg-warning">
                        <div className="text-center py-2 bg-success">
                            name
                        </div>
                        <div><p className="bg-info p-2 m-2 d-inline-flex">hello user</p></div>
                        <div  style={{display:"flex",position:"fixed",width:"70%",height:"50px" ,bottom:"0"}} >
                            <textarea style={{width:"90%"}}  ></textarea>
                            <button >Send</button>
                        </div>
                    </div>
                </div>
            </div>
          
    
   
        </Layout>
       
      );
}
 
export default HomePage;