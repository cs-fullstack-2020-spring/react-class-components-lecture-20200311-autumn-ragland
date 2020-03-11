import React, { Component } from 'react';

class Student extends Component {
    constructor(props){
        super(props);
    };
    render() {
        return (
            <div>
                <h4>Student Name : {this.props.studentName}</h4>
            </div>
        );
    }
}

export default Student;