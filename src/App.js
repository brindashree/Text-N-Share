import {BrowserRouter as Router , Route} from 'react-router-dom'
import './App.css';
import PrivateRoute from './components/PrivateRoute';
import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';
import SignUpPage from './containers/SignUpPage';

function App() {
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
