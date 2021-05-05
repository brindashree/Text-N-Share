import {BrowserRouter as Router , Route} from 'react-router-dom'
import './App.css';
import PrivateRoute from './components/PrivateRoute';
import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';
import SignUpPage from './containers/SignUpPage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isLoggedInUser } from './actions';



function App() {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  
  useEffect(() => {
        if (!auth.authenticated) {
            dispatch(isLoggedInUser())
        }
    }, []);
  return (
    <div className="App">
      <Router>
        <PrivateRoute path='/' exact component={HomePage} />
        <Route path='/login'  component={LoginPage} />
        <Route path='/signup' component={SignUpPage}/>
      </Router>
    </div>
  );
}

export default App;
