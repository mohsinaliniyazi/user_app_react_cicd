import React, { useState } from 'react';
import { useEffect } from "react";
import ReactDOM from 'react-dom';
import {signup_message} from '../Common/sysConfigBundle';
import {MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBCardBody,MDBRow, MDBCol, MDBInput, MDBDatePicker , MDBJumbotron, MDBContainer,MDBIcon } from "mdbreact";
import Header from '../LoginPage/LoginHeader.js';
import {SignUPUserValidation} from '../Common/CommonsUtil';
import {doSignUp} from './RegisterCommon';
import '../App.css';
import Select from 'react-select';



function Registration() {

const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')
const [email, setEmail] = useState('')
const [location, setLocation] = useState('')
const [residential, setResidential] = useState('')
const [city, setCity] = useState('')
const [address, setAddress] = useState('')
const [state, setState] = useState('')
const [country, setCountry] = useState('')
const [zip, setZip] = useState('')
const [phone, setPhone] = useState('')
const [mobile, setMobile] = useState('')
const [password, setPassword] = useState('')
const [repeatPassword, setRepeatPassword] = useState('')
const [errors, setErrors] = useState({})

const [role,setRole] = useState([{}])
const [values, setValues] = useState({})


useEffect(() => {
  const header = document.getElementById("myHeader");
  const sticky = header.offsetTop;
  
  const scrollCallBack = window.addEventListener("scroll", () => {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });
  return () => {
    window.removeEventListener("scroll", scrollCallBack);
  };
}, []);


const submit =(event)=>{
  const model = {email,firstName,lastName,password,repeatPassword,location,mobile,country,address,role,zip,phone,residential,city,state }
  const errors = SignUPUserValidation({ model })
  setErrors(errors)
  if (!Object.keys(errors).length) {
    doSignUp({ model })
    ReactDOM.render(successMessage(signup_message.SUCC_MSG), document.getElementById('error'));
  }else{
    ReactDOM.render(errorMessage(signup_message.VLD_MSG), document.getElementById('error'));
  }
}


const more = (event) =>{
  var mode = event.currentTarget.dataset.mode;

  switch(mode) {
    case 'newRegister':
      return  window.location.href="/registration";
    case 'copyValue':
      return  window.location.href="/";
    case 'login':
      return  window.location.href="/";
    default:
      return  window.location.href="/";
  }
}

  
 const errorMessage =(name)=> (
    <div className="container-fluid errorMessage">
        <p><MDBIcon icon="exclamation-triangle" />  &nbsp;
            {name}
            <p style={{float:"right"}} onClick={functionClose}><MDBIcon icon="times" /></p>
        </p>
    </div>
  );

const successMessage =(name) => (
    <div className="container-fluid successMessage">
      <p><MDBIcon icon="exclamation-triangle" />  &nbsp;
          {name}
          <p style={{float:"right"}} onClick={functionClose}><MDBIcon icon="times" /></p>
        </p>
    </div>
);

function functionClose(){
  ReactDOM.render("", document.getElementById('error'));
};


 const roles = [
   { label: "User", value: 'user' },
   { label: "Moderator", value: 'mod' },
   { label: "Admin", value: 'admin' },
 ];


 
  return (
    <Container-fluid>

    
      <Header head="Registration Form For New Users"/>
        <MDBCardBody className="default-color-dark">
       
                <header id="myHeader" className="header default-color-dark">
                 <p className="headerPara"><MDBIcon fab icon="buffer" /> SignUp Form</p>
                    <div style={{marginLeft: 'auto'}}>
                      <MDBDropdown>
                        <MDBDropdownToggle color="default" className="btn btn-default btn-sm" caret>
                          More
                        </MDBDropdownToggle>
                        <MDBDropdownMenu basic>
                          <MDBDropdownItem onClick={more.bind(this)} data-mode="newRegister"> New</MDBDropdownItem>
                          <MDBDropdownItem onClick={more.bind(this)} data-mode="copyValue">Copy</MDBDropdownItem>
                          <MDBDropdownItem onClick={submit}>
                          Save
                          </MDBDropdownItem>
                          <MDBDropdownItem onClick={more.bind(this)} data-mode="login">Login</MDBDropdownItem>
                        </MDBDropdownMenu>
                      </MDBDropdown>
                    </div>
                    <button type="button" class="btn btn-default btn-sm">
                      Notifications <span class="badge badge-light">4</span>
                    </button>

                   
                </header>


                <MDBJumbotron width="100%" className="bodyMain">
                   <form >
                   <div id="error"></div>
                       
                    <div class="accordion md-accordion" id="accordion1" role="tablist" aria-multiselectable="true">
                        <div class="card">
                          <div class="card-header">
                            <a class="panel-heading collapsed" data-toggle="collapse">
                            Personal Inforamtion             
                            </a>
                          </div>
                          
                        <div id="collapseOne" class="collapse show" data-parent="#accordion1">  
                          <div class="card-body">   
                          <br />
                          <div class="form-row">

                          

                              <div class="form-group col-md-4">
                                <label for="firstName"><MDBIcon far icon="user" /> &nbsp; First Name <span className="spanError">*</span></label>
                                <input type="text" class="form-control" id="firstName"  name="firstName"  onChange={e => setFirstName(e.target.value)} value={firstName}  placeholder="First Name" />
                                <span className="spanError"> {errors.firstName && <p>{errors.firstName}</p>}</span>
                              </div>

                              <div class="form-group col-md-4">
                                <label for="lastName"><MDBIcon far icon="user" /> &nbsp; Last Name</label>
                                <input type="text" class="form-control" id="lastName"  name="lastName"  onChange={e => setLastName(e.target.value)} value={lastName}  placeholder="Last Name" />
                                <span className="spanError"> {errors.lastName && <p>{errors.lastName}</p>}</span>
                              </div>

                              <div class="form-group col-md-4">
                                <label for="email"><MDBIcon far icon="envelope" /> &nbsp; Email-Id <span className="spanError">*</span></label>
                                <input type="email" class="form-control" id="email" name="email" onChange={e => setEmail(e.target.value)} value={email}  placeholder="Email-Id" />
                                <span className="spanError"> {errors.email && <p>{errors.email}</p>}</span>
                              </div>
                            </div>

                            <div class="form-row">
                              <div class="form-group col-md-4">
                                <label for="password"><MDBIcon icon="unlock" /> &nbsp; Password <span className="spanError">*</span></label>
                                <input type="password" class="form-control" id="password"  name="password"  onChange={e => setPassword(e.target.value)} value={password}  placeholder="Password" />
                                <span className="spanError"> {errors.password && <p>{errors.password}</p>}</span>
                              </div>

                              <div class="form-group col-md-4">
                                <label for="repeatPassword"><MDBIcon icon="unlock" /> &nbsp; Repeat Password <span className="spanError">*</span></label>
                                <input type="password" class="form-control" id="repeatPassword"  name="repeatPassword"  onChange={e => setRepeatPassword(e.target.value)} value={repeatPassword}  placeholder="Last Name" />
                                <span className="spanError"> {errors.repeatPassword && <p>{errors.repeatPassword}</p>}</span>
                              </div>

                              <div class="form-group col-md-4">
                                  <label for="role">Role <span className="spanError">*</span></label>
                                  {/* <select id="role" class="form-control" onChange={e => setRole([e.target.value])} value={role}>
                                    <option selected>Choose...</option>
                                    <option value="mod">Moderate</option>
                                    <option value="user">User</option>
                                    <option value="admin">Admin</option>
                                    <option></option>
                                  </select>  */}
                                   <Select  class="form-control role" options={roles} onChange={e => setRole([roles])} isMulti></Select> 
                              </div>
                            </div>

                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <br />


                      <div class="accordion md-accordion" id="accordion1" role="tablist" aria-multiselectable="true">
              
                            <div class="card">
                                <div class="card-header">
                                  <a class="panel-heading collapsed" data-toggle="collapse">
                                  Address Information             
                                  </a>
                                </div>
                          
                                <div id="collapseOne" class="collapse show" data-parent="#accordion1">  
                                  <div class="card-body">   
                                  <br/>

                                  <div class="form-row">
                                      <div class="form-group col-md-4">
                                        <label for="location"><MDBIcon icon="map-marker-alt" /> &nbsp; Location #</label>
                                        <input type="text" class="form-control" id="location"  name="location" onChange={e => setLocation(e.target.value)} value={location} placeholder="Location" />
                                        <span className="spanError">  {errors.location && <p>{errors.location}</p>}</span>
                                      </div>
                                      <div class="form-group col-md-4">
                                        <label for="address"><MDBIcon far icon="address-card" /> Address <span className="spanError">*</span></label>
                                        <textarea type="text" class="form-control" id="address" name="address" onChange={e => setAddress(e.target.value)} value={address} placeholder="Address" />
                                        <span className="spanError"> {errors.address}</span>
                                      </div>
                                      <div class="form-group col-md-4">
                                        <label for="residential"><MDBIcon far icon="address-card" /> Residential Address</label>
                                        <textarea type="text" class="form-control" id="residential" name="residential" onChange={e => setResidential(e.target.value)} value={residential} placeholder="Password" />
                                        <span className="spanError"> {errors.residential}</span>
                                      </div>
                                  </div>
                        
                                  <div class="form-row">
                                      <div class="form-group col-md-4">
                                        <label for="country"><MDBIcon icon="globe-asia" /> Country <span className="spanError">*</span></label>
                                        <select id="country" class="form-control" onChange={e => setCountry(e.target.value)} value={country}>
                                          <option selected>Choose...</option>
                                          <option value="ind">INDIA</option>
                                          <option value="usa">USA</option>
                                          <option value="jpn">JAPAN</option>
                                        </select>
                                      </div>
                                      <div class="form-group col-md-4">
                                        <label for="state">State <span className="spanError">*</span></label>
                                        <select id="state" class="form-control" onChange={e => setState(e.target.value)} value={state}>
                                          <option selected>Choose...</option>
                                          <option value="hyd">Hyderabad</option>
                                          <option value="del">Delhi</option>
                                          <option value="lko">Lko</option>
                                          <option value="mum">Mumbai</option>
                                          <option></option>
                                        </select>
                                      </div>
                                      <div class="form-group col-md-4">
                                          <label for="inputState"><MDBIcon icon="city" /> City</label>
                                        <select id="inputState" class="form-control">
                                          <option selected>Choose...</option>
                                          <option></option>
                                        </select>
                                      </div>
                                  </div>

                                    <div class="form-row">
                                        <div class="form-group col-md-2">
                                          <label for="zip"><MDBIcon icon="barcode" /> Zip #</label>
                                          <input type="number" class="form-control" id="zip" name="zip" onChange={e => setZip(e.target.value)} value={zip} placeholder="Zip Code" />
                                          <span className="spanError"> {errors.zip}</span>
                                        </div>
                                        <div class="form-group col-md-2">
                                          
                                        </div>
                                        <div class="form-group col-sm-1">
                                          <label for="inputState"><MDBIcon icon="barcode" /> Code </label>
                                          <select id="inputState" class="form-control">
                                            <option>+91(IND)</option>
                                            <option>+82 </option>
                                            <option></option>
                                          </select>
                                        </div>
                                        <div class="form-group col-md-3">
                                          <label for="phone"><MDBIcon icon="phone" /> Phone No #</label>
                                          <input type="number" class="form-control" id="phone" name="phone" onChange={e => setPhone(e.target.value)} value={phone} placeholder="Phone" />
                                          <span className="spanError"> {errors.phone}</span>
                                        </div>
                                        <div class="form-group col-md-4">
                                          <label for="mobile"><MDBIcon icon="mobile" /> Mobile No #</label>
                                          <input type="number" class="form-control" id="mobile" name="mobile" onChange={e => setMobile(e.target.value)} value={mobile} placeholder="Mobile No" />
                                          <span className="spanError"> {errors.mobile}</span>
                                        </div>
                                    </div>
 
                                  </div>
                               </div>
                            </div>
                        </div>

                    </form>
                </MDBJumbotron>
               
            </MDBCardBody>
      </Container-fluid>
  );
};


export default Registration;