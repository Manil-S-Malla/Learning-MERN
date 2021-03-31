import React, { Component } from 'react';

class CreateExercise extends Component {
    state = { 
        username: '',
        description: '',
        duration: 0,
        date: new Date(),
        users: [],
    }

    onChangeUsername(e) {
        this.setState({username: e.target.value})
    }

    onChangeDescription(e) {
        this.setState({description: e.target.value})
    }

    onChangeDuration(e) {
        this.setState({duration: e.target.value})
    }

    onChangeDate(newDate) {
        this.setState({date: newDate})
    }

    onSubmit(e) {
        e.preventDefault();     //  Prevent the execution of the default HTML form submit behaviour.

        //const exercise
    }

    
    render() { 
        return ( <p>Create Exercise</p> );
    }
}
 
export default CreateExercise;
