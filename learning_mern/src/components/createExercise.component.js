import axios from 'axios';
import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class CreateExercise extends Component {
    constructor(props) {
        super(props);
        
        this.state = { 
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: [],
        }
    }

    componentDidMount() {
        //  Runs right before displaying on the screen.
        
        axios.get('http://localhost:5000/users/')
            .then(res => {
                if(res.data.length > 0){
                    this.setState({
                        users: res.data.map(user => user.username),
                        username: res.data[0].username,
                    })
                }
                else{
                    this.setState({
                        users: ['Test User'],
                        username: 'Test User'
                    })
                }
            })
            .catch( err => console.log(`Error: ${err}`));
    }

    onChangeUsername = e => {
        this.setState({username: e.target.value})
    }

    onChangeDescription = e => {
        console.log('Change');
        this.setState({description: e.target.value})
    }

    onChangeDuration = e => {
        this.setState({duration: e.target.value})
    }

    onChangeDate(newDate) {
        this.setState({date: newDate})
    }

    onSubmit = e => {
        e.preventDefault();     //  Prevent the execution of the default HTML form submit behaviour.

        const exercise = {
            username : this.state.username,
            description : this.state.description,
            duration : this.state.duration,
            date : this.state.date,           
        }

        console.log(exercise);
        axios.post('http://localhost:5000/exercises/add', exercise)
            .then(res => console.log(res.data))
            .catch(err => console.log(`Error: ${err}`));

        window.location = '/';      //  Go back to the window location '/' oe the exercise list page.
    }

    
    render() { 
        return ( 
            <div>
                <h3>Create Exercise</h3> 
                <form onSubmit= {this.onSubmit}>
                    <div className= "form-group">
                        <label>Username: </label>
                        <select
                            ref= "useInput"
                            required
                            className= "form-control"
                            value= {this.state.username}
                            onChange= {this.onChangeUsername}
                        >
                            {
                                this.state.users.map( user => {
                                    return (
                                        //      Returns a dropdown list option.
                                        <option
                                            key= {user}
                                            value= {user}
                                        >
                                            {user}
                                        </option>
                                    )
                                })
                            }       
                        </select> 
                    </div>

                    <div className= "form-group">
                        <label>Description: </label>
                        <input 
                            type= "text"
                            className= "form-control"
                            value= {this.state.description}
                            onChange= {this.onChangeDescription}
                        />
                    </div>

                    <div className= "form-group">
                        <label>Duration: </label>
                        <input 
                            type= "text"
                            className= "form-control"
                            value= {this.state.duration}
                            onChange= {this.onChangeDuration}
                        />
                    </div>

                    <div className= "form-group">
                        <label>Date: </label>
                        <div>
                            <DatePicker
                                selected= {this.state.date}
                                onChange= {this.onChangeDate}
                            />
                        </div>
                    </div>

                    <div className= "form-group">
                        <input type= "submit" value= "Create Exercise" className= "btn btn-primary" />
                    </div>

                </form>
            </div>
        );
    }
}
 
export default CreateExercise;
