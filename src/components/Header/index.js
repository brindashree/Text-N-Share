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
        <nav className="navbar navbar-light navbar-expand-lg shadow-sm rounded " style={{backgroundColor:"#FEF9C3",fontFamily: 'Paytone One, sans-serif'}}>
                <div className="container-fluid">
                     <a className="navbar-brand fw-bolder fs-3" style={{fontFamily: 'Paytone One, sans-serif',color:"#5c258d"}} href="#">TextN'Share</a>
                    
                    <div className="navbar">
                        {!auth.authenticated ?
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    
                        <li className="nav-item m-2 fs-5" ><NavLink className="p-2" to='/login' style={{ backgroundColor: "#5c258d", color: "#FEF08A",borderRadius:"1rem" }}>Login</NavLink></li>
                            <li className="nav-item m-2 fs-5"><NavLink className="p-2" to='/signup' style={{ backgroundColor: "#5c258d", color: "#FEF08A",borderRadius:"1rem" }}>Sign Up</NavLink></li>
                        </ul>: null
                        }
                        <div className="mx-5 fs-5  " style={{maxWidth: "500px"}}><p >
            {auth.authenticated ? `${auth.firstName} ${auth.lastName}` : ""}
            </p></div>
                    
                        {auth.authenticated ?<ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item m-2 fs-5"><Link
                                className="p-2"
                                to={'#'} onClick={logOut} style={{ backgroundColor: "#5c258d", color: "#FEF08A",borderRadius:"1rem" }}>Logout</Link></li>
                   </ul> : null }
                        
        
      
     
    
                    </div>
                    </div>
            </nav>
            
         </div>
      
    );
}
 
export default Header;