import React, { Component } from "react";
import axios from "axios";
import User from "./User";
import SeekUsers from "./SeekUsers";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
      
    };
  }
  getUsers =() =>{
    axios.get('https://api.github.com/users')
     .then(response =>{
       this.setState({
         users: response.data
       })
     })
  }
  componentDidMount =()=>{
    this.getUsers();
  }
searchAnyUsers = (data)=>{
    if(data !==''){
        axios.get(`https://api.github.com/search/users?q=${data}`)
           .then(response =>{
             this.setState({
               users: response.data.items
             })
           })
    }
}

  render() {
    return (
      <div>
        <SeekUsers getSeekUsers={this.searchAnyUsers}/>
        <div className="row">
          {this.state.users.map(user => (
            <div className="col-md-4" key={user.id}>
              <User user={user}/>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Users;
