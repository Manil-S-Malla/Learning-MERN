import React, { Component } from 'react';
import axios from 'axios';

class CreateUser extends Component {
    constructor(props) {
        super(props);
        
        this.state = { 
            username: '',
        }
    }

    onChangeUsername = e => {
        this.setState({username: e.target.value})
    }

    onSubmit = e => {
        e.preventDefault();     //  Prevent the execution of the default HTML form submit behaviour.

        const user = {
            username : this.state.username,       
        }

        console.log(user);
        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data))
            .catch(err => console.log(`Error: ${err}`));
            
        this.setState({
            username: '',
        })
    }

    
    render() { 
        return ( 
            <div>
                <h3>Create User</h3> 
                <form onSubmit= {this.onSubmit}>
                    <div className= "form-group">
                        <label>Username: </label>
                        
                        <input 
                            type= "text"
                            className= "form-control"
                            value= {this.state.username}
                            onChange= {this.onChangeUsername}
                        />
                    </div>

                    <div className= "form-group">
                        <input type= "submit" value= "Create User" className= "btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }
}
 
export default CreateUser;
