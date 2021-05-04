import Layout from "../../components/Layout";
import { useState } from 'react';

const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Layout>
            <div className="container-fluid d-flex justify-content-center mt-5">
            <div className="card " style={{Width:"400px", maxWidth:"500px"}}>
                <div className="card-header text-center fw-bold">Login</div>
                <div className="card-body">
                    <form>
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