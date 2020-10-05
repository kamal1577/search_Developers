
import React, { Component } from 'react';

class SeekUsers extends Component{
    state={
        search:''
    }
    handleChange =(e)=>{
        this.setState({
           search: e.target.value 
        })
    }
    handleSubmit =(e)=>{
        e.preventDefault();
        this.props.getSeekUsers(this.state.search)
    }
    
    render(){
        const {search}= this.state
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="form-group my-2">
                    <input 
                       type="text"
                       placeholder="Search Users..."
                       className="form-control my-2"
                       value={search}
                       onChange={this.handleChange}
                    />
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>


        )
    }
}
export default SeekUsers;