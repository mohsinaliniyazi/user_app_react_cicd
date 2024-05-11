import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import {PrivateRoute,PrivateRouteTwo} from './Router/PrivateRoute';
import Login from './LoginPage/Login';
import Registration from './Register/Registration';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import LoginFooter from './LoginPage/LoginFooter';
import AllUsersInformation from './UserInformation/AllUsersInformation';
import PersistentDrawerLeft from './component/PersistentDrawerLeft';
import Form from './Register/Form';
import ShowBookList from './Spinner/ShowBookList';
import TaskForm from './Task/taskForm';

function App() {
  return (
     <Router>
       
        <div>
          <div className="content">
            <Switch>
              <Route exact path="/"  render={(props) => <Login {...props} text="Login" />} />
              <Route path="/registration" render={(props) => <Registration {...props} text="Registeration" />}/>
              <PrivateRoute path="/all" component={AllUsersInformation} text="All" />
              <Route path="per" component={PersistentDrawerLeft}/>
              <PrivateRouteTwo path="/allUser" component={AllUsersInformation} text="All" />
            </Switch>
            <Route path="/reg" component={Form}/>
            <Route path="/spinner" component={ShowBookList}/>
            <Route path="/task" component={TaskForm} />
           
          </div>
        </div>
      
    </Router>
  );
}

export default App;
