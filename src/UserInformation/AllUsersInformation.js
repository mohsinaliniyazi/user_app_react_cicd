import React,{ Component }  from 'react';
import '../LoginPage/Login.css';
import Select from 'react-select';
import {MDBCardGroup, MDBCard, MDBModalHeader, MDBModalFooter, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBCardBody,MDBRow, MDBCol, MDBInput, MDBDatePicker , MDBJumbotron, MDBContainer,MDBIcon } from "mdbreact";
import { useEffect, useState } from "react";
import { getAllUserAdmin } from '../util/ApiUtils';
import '../App.css';
import AllList from './AllList';


class AllUsersInformation extends Component {
  constructor(props) {
    super(props) 
    this.state = { 
      users: [],
      message: null,
      isLoading:true,
      tableRows: [],
      username:'',
  };
    this.reloadUserList = this.reloadUserList.bind(this);
  }


  
componentDidMount() {
  this.reloadUserList();
  this.state.username = sessionStorage.getItem("username");
}

reloadUserList() {
  getAllUserAdmin()
    .then((res) => {
        const users = res;
        console.log("all--------data---------"+res);
        this.setState({users: res})
    })
      .then(async() => {
      this.setState({ isLoading:false })
   });
   this.setState({isLoading:false })
}
 

logoutButton(){
  sessionStorage.clear();
  window.location.href = '/';
}

onLogout=function (data) {
console.log('okk');
}

addNewRow = (e) => {
 console.log("okk");
}



  render() {

    const{isLoading} = this.state;

    var users = this.state.users.map(function(user,index) {
      return (
        <tr key={ index }>
          <th scope="row">{index + 1}</th>
          <td data-title="id">{user.id}</td>
          <td data-title="First Name">{user.firstName}</td>
          <td data-title="Last Name">{user.lastName}</td>
          <td data-title="Email-Id">{user.email}</td>
          <td data-title="Created Date">{user.createdAt}</td>
          {/* <td data-title="Address">{user.address[0].address}</td> */}
          {/* <td data-title="Location">{user.address[0].location}</td> */}
          {/* <td data-title="Mobile">{user.address[0].mobile}</td> */}
         
        </tr>
      );
    });


    const Countries = [
      { label: "Albania", value: 355 },
      { label: "Argentina", value: 54 },
      { label: "Austria", value: 43 },
      { label: "Cocos Islands", value: 61 },
      { label: "Kuwait", value: 965 },
      { label: "Sweden", value: 46 },
      { label: "Venezuela", value: 58 }
    ];

   
  

    return (
      <Container-fluid>
        {isLoading && <div className="loading"></div> }

        <div className="card-body">
           
        </div>


        <header id="myHeader" className="header default-color-dark">
            <p className="headerPara"><MDBIcon fab icon="buffer" />{this.props.header}</p>
              <div style={{marginLeft: 'auto'}}>
                <MDBDropdown>
                  <MDBDropdownToggle color="default" className="btn btn-default btn-sm" style={{color:'white'}} caret>
                    More
                  </MDBDropdownToggle>
                  <MDBDropdownMenu basic>
                    <MDBDropdownItem onClick={this.logoutButton}> Logout</MDBDropdownItem>
                    <MDBDropdownItem >Copy</MDBDropdownItem>
                    <MDBDropdownItem >
                    Save
                    </MDBDropdownItem>
                    <MDBDropdownItem >Login</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>

              
              </div>

              <div style={{marginLeft: 'right'}}>
                <MDBDropdown>
                  <MDBDropdownToggle color="default" className="btn btn-default btn-sm" style={{color:'white'}}>
                  Notifications 
                  </MDBDropdownToggle>
                </MDBDropdown>
              </div>
          </header>


        
        
          <MDBCardGroup style={{ color: 'black' }}> 
            <MDBCard>
              <MDBCardBody>
             
              <MDBCard>
                <div className="table-responsive-xl">
                <table className="table table-sm">
                 <thead className="thead-dark">
                 <tr>
                    <th>#</th>
                     <th>Id</th>
                     <th>First Name</th>
                     <th>Last Name</th>
                     <th>Email-ID</th>
                     <th>Created Date</th>
                     <th>Address</th>
                     <th>Location</th>
                     <th>Mobile</th>
                </tr>
                 </thead>
                 <tbody>
                    {/* <AllList add={this.addNewRow} taskList={this.state.users} /> */}
                    {users}
                </tbody>
               
             </table ></div>
             </MDBCard>
            </MDBCardBody>
            </MDBCard>
          </MDBCardGroup>

         
        </Container-fluid>
    );
  }
}


export default AllUsersInformation;