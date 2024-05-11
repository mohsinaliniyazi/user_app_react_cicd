import React,{Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import {MDBIcon } from "mdbreact";
import Toolbar from '@material-ui/core/Toolbar';
import './Login.css';
import '../App.css';



class LoginHeader extends Component {

render(){
    return (
        <div>
           
            <Toolbar>
             <p className="headerPara"><MDBIcon icon="laptop" />{this.props.head}</p>
            </Toolbar>
          
        </div>
    );
  }
}


export default LoginHeader;