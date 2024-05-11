import React,{ Component,useState, useEffect }  from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { MDBCard, MDBView, MDBBtn,MDBIcon, MDBCardGroup, MDBCardImage, MDBCardText, MDBCardBody,MDBCol,MDBCardTitle } from "mdbreact";
import {getUserCreatedPolls} from '../Common/CommonsUtil';
import { ACCESS_TOKEN,SUCCESS_MSG } from '../constants';
import {login_message} from '../Common/sysConfigBundle';
import SideNavPage from '../SideBar/SideNavPage';
import LoginHeader from './LoginHeader';
import LoginFooter from './LoginFooter';
import { login } from '../util/ApiUtils';
import Form from '../Register/Form';




class Login extends Component {

  constructor(props){
    super(props);
    this.state = {
        username: '',
        password: '',
        message: '',
        errors: {},
        fields: {},
        formIsValid: true,
        isLoading:false,
    }
    this.login = this.login.bind(this);
  }


  
componentDidMount() {
  console.log(this.props);
  //sessionStorage.clear();
}

 
  
  errorMessage =(name)=> (
    <div className="container-fluid errorMessage">
        <p><MDBIcon icon="exclamation-triangle" />  &nbsp;
            {name}
            <p style={{float:"right"}} onClick={this.functionClose}><MDBIcon icon="times" /></p>
        </p>
    </div>
  );

  successMessage =(name) => (
    <div className="container-fluid successMessage">
        <h6><MDBIcon icon="exclamation-triangle" />  &nbsp;
           {name}
            <p style={{float:"right"}} onClick={this.functionClose}><MDBIcon icon="times" /></p>
        </h6>
    </div>
  );

  functionClose(){
    ReactDOM.render("", document.getElementById('error'));
  };



  
handleValidation(){
  let fields = this.state.fields;
 this.state.formIsValid = true;
  let errors = {};
  //Name
  if(this.state.username == "") {
    this.state.formIsValid = false;
     this.state.errors["username"] = "User Name Cannot be empty";
  }else{
    this.state.errors["username"] = ""; 
 }
  if(this.state.password == ""){
    this.state.formIsValid = false;
    this.state.errors["password"] = "Password Cannot be empty";
  }else{
     this.state.errors["password"] = ""; 
  }
}


login(event) {
    this.setState({isLoading:true});
    event.preventDefault();
    this.handleValidation();
    if(this.state.formIsValid == true){
    if(this.state.username != "" && this.state.password != ""){
      const credentials = {username: this.state.username, password: this.state.password};
   
      console.log(" UserName : " + this.state.username + " Password : " + this.state.password);

      const loginRequest = Object.assign({}, credentials);
      login(loginRequest)
      .then(response => {
          sessionStorage.setItem(ACCESS_TOKEN, response.accessToken);
          sessionStorage.setItem("username", this.state.username);
          sessionStorage.setItem("role",response.roles);
          this.setState({isLoading:false});
          ReactDOM.render(this.successMessage(login_message.VLD_MSG), document.getElementById('error'));
          this.props.history.push("/allUser");
      }).catch(error => {
          if(error.status === 401) {
            this.setState({isLoading:false});
            ReactDOM.render(this.errorMessage(login_message.VLD_MSG), document.getElementById('error'));
          } else {
            this.setState({isLoading:false});
            ReactDOM.render(this.errorMessage(login_message.ERR_MSG + ' : ' + error), document.getElementById('error'));                                   
          }
      });
    }else{
      this.setState({isLoading:false});
      ReactDOM.render(this.errorMessage(login_message.VLD_MSG), document.getElementById('error'));
      console.log("empty");
    }
   }else{
    this.setState({isLoading:false});
    ReactDOM.render(this.errorMessage(login_message.VLD_MSG), document.getElementById('error'));
    console.log("empty");
    }
  }

  onChange = (e) =>
  this.setState({ [e.target.name]: e.target.value });



  render() {
    const{isLoading} = this.state;

    return (
      <Container-fluid>
        {isLoading && <div className="loading"></div> }

        <div className="card-body">
        <span><h4>{this.props.text}</h4></span>
        </div>
        

        <div id="error"></div>

          <MDBCardGroup style={{ color: 'red' }}> 
            <MDBCard>
              <MDBCardBody className="default-color-dark">
                <div className="card float-right">
                    <div className="card-body">
                      <form>
                        <h4>Login</h4>
                        <br />

                        <input type="text" name="username" id="username" placeholder="User Name" className="form-control" value={this.state.fields["username"]} onChange={this.onChange} className="form-control" />
                        <div className='err_message'>
                            <span>{this.state.errors["username"]}</span>
                        </div>

                        <br />
                      
                        <input type="password" name="password" id="password" placeholder="Password" className="form-control" value={this.state.fields["password"]} onChange={this.onChange} />
                        <div className='err_message'>
                            <span>{this.state.errors["password"]}</span>
                        </div>

                        <div className="text-center py-3 mt-1">
                          <button className="btn " onClick={this.login}>
                            Login
                            <MDBIcon far icon="paper-plane" className="ml-2" />
                          </button>
                        </div>

                        <p>for registration, Please <a href="registration"> press </a> here</p>

                      </form>
                    </div>
                  </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCardGroup>
          <LoginFooter />
        </Container-fluid>
    );
  }
}

export default Login;