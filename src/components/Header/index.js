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
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                     <a className="navbar-brand" href="#">TextN'Share</a>
                    
                    <div className="navbar">
                        {!auth.authenticated ?
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    
                        <li className="nav-item m-2"><NavLink to='/login'>Login</NavLink></li>
                            <li className="nav-item m-2"><NavLink to='/signup'>Sign Up</NavLink></li>
                        </ul>: null
                        }
                        <div className="bg-success " style={{maxWidth: "400px"}}><h6>
            {auth.authenticated ? `hi ${auth.firstName} ${auth.lastName}` : ""}
            </h6></div>
                    
                        {auth.authenticated ?<ul className="navbar-nav me-auto mb-2 mb-lg-0">
                         <li className="nav-item m-2"><Link to={'#'} onClick={logOut}>Logout</Link></li>
                   </ul> : null }
                        
        
      
     
    
                    </div>
                    </div>
            </nav>
            
         </div>
      
    );
}
 
export default Header;