import Layout from "../../components/Layout";
import { useState } from 'react';
import {signup} from '../../actions'
import { useDispatch } from "react-redux";
const SignUpPage = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const registerUser = (e) => {
        e.preventDefault();
        const user = {
            firstName,lastName,password,email
        }
        dispatch(signup(user));
}

    return (
       <Layout>
            <div className="container-fluid d-flex justify-content-center mt-5">
            <div className="card " style={{Width:"400px", maxWidth:"500px"}}>
                <div className="card-header text-center fw-bold">Sign Up</div>
                <div className="card-body">
                        <form onSubmit={registerUser}>
                            <div class="mb-3">
                              <label  class="form-label">First Name</label>
                                <input type="text" name="firstname" value={firstName} onChange={(e) => setFirstName(e.target.value)} class="form-control" />
                              
                        </div>
                        <div class="mb-3">
                            <label  class="form-label">Last Name</label>
                            <input type="text" name="lastname" value={lastName} onChange={(e)=>setLastName(e.target.value)} class="form-control" />
                        </div>
                        <div class="mb-3">
                              <label  class="form-label">Email address</label>
                                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} class="form-control" />
                              
                        </div>
                        <div class="mb-3">
                            <label  class="form-label">Password</label>
                            <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} class="form-control" />
                        </div>
                      
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
                </div>
                </div>
        </Layout>
        
    );
}
 
export default SignUpPage;