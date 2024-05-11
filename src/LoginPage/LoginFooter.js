import React,{ Component }  from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { MDBCard, MDBView, MDBBtn,MDBIcon, MDBCardGroup, MDBCardImage, MDBCardText, MDBCardBody,MDBCol,MDBCardTitle } from "mdbreact";
import {getUserCreatedPolls} from '../Common/CommonsUtil';
import { ACCESS_TOKEN,SUCCESS_MSG } from '../constants';
import {login_message} from '../Common/sysConfigBundle';
import SideNavPage from '../SideBar/SideNavPage';
import { login } from '../util/ApiUtils';
import './Login.css';
import '../App.css';


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
  sessionStorage.clear();
}
 
  
  errorMessage =(name)=> (
    <div className="container-fluid errorMessage">
        <h6><MDBIcon icon="exclamation-triangle" />  &nbsp;
            {name}
            <p style={{float:"right"}} onClick={this.functionClose}><MDBIcon icon="times" /></p>
        </h6>
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
          this.setState({isLoading:false});
          ReactDOM.render(this.successMessage(login_message.VLD_MSG), document.getElementById('error'));
          this.props.history.push("/");
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



          
      <MDBCardGroup style={{ color: 'grey' }}>
          <MDBCard>
              <MDBCardBody>
               <MDBCol md='4' className="float-left">
                    <MDBCard wide cascade>
                    

                      <MDBCardBody cascade className='text-center'>
                        <MDBCardTitle className='card-title'>
                          <strong>Mohsin</strong>
                        </MDBCardTitle>

                          <p className='font-weight-bold blue-text'>A Software Engineer</p>

                        <MDBCardText>
                          If You dont know me - know me.{' '}
                        </MDBCardText>

                        <MDBCol md='12' className='d-flex justify-content-center'>
                          <a href='!#' className='px-2 fa-lg li-ic'>
                            <MDBIcon fab icon='linkedin-in'></MDBIcon>
                          </a>

                          <a href='!#' className='px-2 fa-lg tw-ic'>
                            <MDBIcon fab icon='twitter'></MDBIcon>
                          </a>

                          <a href='!#' className='px-2 fa-lg fb-ic'>
                            <MDBIcon fab icon='facebook-f'></MDBIcon>
                          </a>
                        </MDBCol>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>


                  <MDBCol md='4' className="float-left">
                    <MDBCard wide cascade>
                      <MDBView cascade>
                        
                      </MDBView>

                      <MDBCardBody cascade className='text-center'>
                        <MDBCardTitle className='card-title'>
                          <strong>Ali</strong>
                        </MDBCardTitle>

                        <p className='font-weight-bold blue-text'>Middle Name</p>

                        <MDBCardText>
                          This is middle Name.{' '}
                        </MDBCardText>

                        <MDBCol md='12' className='d-flex justify-content-center'>
                          <a href='!#' className='px-2 fa-lg li-ic'>
                            <MDBIcon fab icon='linkedin-in'></MDBIcon>
                          </a>

                          <a href='!#' className='px-2 fa-lg tw-ic'>
                            <MDBIcon fab icon='twitter'></MDBIcon>
                          </a>

                          <a href='!#' className='px-2 fa-lg fb-ic'>
                            <MDBIcon fab icon='facebook-f'></MDBIcon>
                          </a>
                        </MDBCol>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>


                  <MDBCol md='4' className="float-left">
                    <MDBCard wide cascade>
                      <MDBView cascade>
                        
                      </MDBView>

                      <MDBCardBody cascade className='text-center'>
                        <MDBCardTitle className='card-title'>
                          <strong>Niyazi</strong>
                        </MDBCardTitle>

                        <p className='font-weight-bold blue-text'>Last Name</p>

                        <MDBCardText>
                          This is my last name.{' '}
                        </MDBCardText>

                        <MDBCol md='12' className='d-flex justify-content-center'>
                          <a href='!#' className='px-2 fa-lg li-ic'>
                            <MDBIcon fab icon='linkedin-in'></MDBIcon>
                          </a>

                          <a href='!#' className='px-2 fa-lg tw-ic'>
                            <MDBIcon fab icon='twitter'></MDBIcon>
                          </a>

                          <a href='!#' className='px-2 fa-lg fb-ic'>
                            <MDBIcon fab icon='facebook-f'></MDBIcon>
                          </a>
                        </MDBCol>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>

              </MDBCardBody>
          </MDBCard>
        </MDBCardGroup>
    </Container-fluid>
    );
  }
}

export default Login;