import React, { Component } from 'react';
import Student from './Student';

class Classroom extends Component {
    constructor(props){
        super(props);
    };
    render() {
        let studentArray = ["Chris", "Mary", "Charles", "Jeff", "Brandon", "Andrew", "Takeallah"]
        return (
            <div>
                <h4>List of All Students!</h4>
                {studentArray.map( s => <Student studentName = {s}/>)}
            </div>
        );
    }
}

export default Classroom;