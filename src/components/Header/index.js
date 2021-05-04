import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { logout } from '../../actions';
import './styles.css';



const Header = (props) => {
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const logOut = () => {
        dispatch(logout(auth.uid));
    }
    return (
        <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                     <a class="navbar-brand" href="#">TextN'Share</a>
                     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                     </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        {!auth.authenticated ?
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    
                        <li class="nav-item m-2"><NavLink to='/login'>Login</NavLink></li>
                            <li class="nav-item m-2"><NavLink to='/signup'>Sign Up</NavLink></li>
                        </ul>: null
                        }
                        <div className="bg-success " style={{maxWidth: "400px"}}><h6>
            {auth.authenticated ? `hi ${auth.firstName} ${auth.lastName}` : ""}
            </h6></div>
                    
                        {auth.authenticated ?<ul class="navbar-nav me-auto mb-2 mb-lg-0">
                         <li class="nav-item m-2"><Link to={'#'} onClick={logOut}>Logout</Link></li>
                   </ul> : null }
                        
        
      
     
    
                    </div>
                    </div>
            </nav>
            
         </div>
      
    );
}
 
export default Header;