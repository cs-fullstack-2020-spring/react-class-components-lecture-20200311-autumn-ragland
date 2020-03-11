import React, { Component } from 'react';

class Student extends Component {
    render() {
        return (
            <div>
                <h4>Student Name : {this.props.studentName}</h4>
            </div>
        );
    }
}

export default Student;