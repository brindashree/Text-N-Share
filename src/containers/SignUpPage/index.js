import Layout from "../../components/Layout";
import { useState } from 'react';
import {signup} from '../../actions'
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';

const SignUpPage = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    const registerUser = (e) => {
        e.preventDefault();
        const user = {
            firstName,lastName,password,email
        }
        dispatch(signup(user));
}
  if (auth.authenticated) {
        return <Redirect to={'/'}/>
}
    return (
       <Layout>
             <div className="container-fluid vh-100" id="layout">
            <div className="card position-absolute top-50 start-50 translate-middle" style={{minWidth:"400px", maxWidth:"500px" ,height:"500px",borderRadius:"1.3rem"}}>
                    <div className="card-header text-center fw-bold fs-3 " style={{ fontFamily: 'Nunito , sans-serif',color:"#5c258d" }}>Sign Up</div>
                <div className="card-body">
                        <form onSubmit={registerUser} style={{fontFamily: 'Nunito , sans-serif'}}>
                            <div className="mb-3 fs-5">
                              <label  className="form-label">First Name</label>
                                <input type="text" name="firstname" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="form-control shadow-sm bg-body rounded" />
                              
                        </div>
                        <div className="mb-3 fs-5">
                            <label  className="form-label">Last Name</label>
                            <input type="text" name="lastname" value={lastName} onChange={(e)=>setLastName(e.target.value)} className="form-control shadow-sm bg-body rounded" />
                        </div>
                        <div className="mb-3 fs-5">
                              <label  className="form-label">Email address</label>
                                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control shadow-sm bg-body rounded" />
                              
                        </div>
                        <div className="mb-3 fs-5">
                            <label  className="form-label">Password</label>
                            <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control shadow-sm bg-body rounded" />
                        </div>
                      
                        <button type="submit" className="btn fw-bold fs-6" style={{backgroundColor:"#5c258d",color:"#FEF9C3"}}>Sign Up</button>
                    </form>
                </div>
                </div>
                </div>
        </Layout>
        
    );
}
 
export default SignUpPage;