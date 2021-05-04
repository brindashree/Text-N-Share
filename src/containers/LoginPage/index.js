import Layout from "../../components/Layout";
import { useState ,useEffect} from 'react';
import { isLoggedInUser, signin } from "../../actions";
import { useDispatch,useSelector } from 'react-redux';
import { Redirect } from "react-router";

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
            <div className="container-fluid d-flex justify-content-center mt-5">
            <div className="card " style={{Width:"400px", maxWidth:"500px"}}>
                <div className="card-header text-center fw-bold">Login</div>
                <div className="card-body">
                    <form onSubmit={userLogin}>
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
 
export default LoginPage;