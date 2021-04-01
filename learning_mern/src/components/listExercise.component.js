import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Exercise = props => {
    return (
        <tr>
            <td>{props.exercise.username}</td>
            <td>{props.exercise.description}</td>
            <td>{props.exercise.duration}</td>
            <td>{props.exercise.date.substring(0,10)}</td>
            <td>
                <Link to= {`/edit/${props.exercise._id}`}>Edit</Link> | <a href= '#' onClick= {() => props.deleteExercise(props.exercise._id)}>Delete</a>
            </td>
        </tr>
    )
}
 

class ListExercise extends Component {
    constructor(props) {
        super(props);
        
        this.state = { 
            exercises: []
        }
    }

    componentDidMount() {
        //  Runs right before displaying on the screen.
        
        axios.get('http://localhost:5000/exercises/')
            .then(res => {
                console.log(res.data);
                this.setState({
                    exercises: res.data
                })
            })
            .catch( err => console.log(`Error: ${err}`));
    }

    deleteExercise = id => {
        axios.delete(`http://localhost:5000/exercises/${id}/`)
            .then( res => console.log(res.data))
            .catch( err => console.log(`Error: ${err}`));
        
            this.setState({
                exercises: this.state.exercises.filter(exercise => exercise._id !== id)
            })
    }

    listExercise = () => {
        return(this.state.exercises.map(exercise => <Exercise exercise= {exercise} deleteExercise= {this.deleteExercise} key= {exercise._id} />)); 
    }
    
    render() { 
        return ( 
            <div>
                <h3>List Exercise</h3> 
                <table className= "table">
                    <thead className= "thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    {this.listExercise()}
                    
                </table>
            </div>
        );
    }
}
 
export default ListExercise;
