import Layout from "../../components/Layout";
import { useState} from 'react';
import {  signin } from "../../actions";
import { useDispatch,useSelector } from 'react-redux';
import { Redirect } from "react-router";
import './styles.css';

const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);

    

    const userLogin = (e) => {
        e.preventDefault();
        if (email == '') {
            alert('Email is required');
            return;
        }
        if (password == '') {
            alert('Password is required');
            return;
        }
        dispatch(signin({ email, password }));
    }


    if (auth.authenticated) {
        return <Redirect to={'/'}/>
}



    return (
        <Layout>
            <div className="container-fluid vh-100" id="layout">
                 <div className="card position-absolute top-50 start-50 translate-middle" style={{minWidth:"400px", maxWidth:"500px" ,height:"350px",borderRadius:"1.3rem"}}>
                    <div className="card-header text-center fw-bold fs-3 " style={{ fontFamily: 'Nunito , sans-serif', color: "#5c258d" }}>
                        Login
                    </div>
                         <div className="card-body">
                              <form onSubmit={userLogin} style={{fontFamily: 'Nunito , sans-serif'}}>
                                    <div className="mb-3 fs-5">
                                      <label  className="form-label">Email address</label>
                                       <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control shadow-sm bg-body rounded" />
                              
                                    </div>
                                    <div className="mb-3 fs-5">
                                     <label  className="form-label">Password</label>
                                        <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control shadow-sm bg-body rounded" />
                                    </div>
                      
                                     <button type="submit" className="btn fw-bold fs-6" style={{backgroundColor:"#5c258d",color:"#FEF9C3"}}>Login</button>
                             </form>
                        </div>
                </div>
                <div className="text-white">
                <h6 className="pt-3">Note : Credentials for testing </h6>
            <h6>email: userone@gmail.com</h6>
                    <h6>password: 123456</h6>
                
            <h6>email: usertwo@gmail.com</h6>
                    <h6>password: 123456</h6>
                </div>

            </div>

            
        </Layout>
       
      );
}
 
export default LoginPage;