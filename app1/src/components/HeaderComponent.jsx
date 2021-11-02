import React, { Component } from 'react';
import StudentService from '../services/StudentService';
import ClassService from '../services/ClassService';


class HeaderComponent extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            classes:[],
            students:[]

        }
     }
    
    navStudentList(){
        this.props.history.push(`/students`);
    }
    navClassList(){
        this.props.history.push(`/classes`);
    }
    navAssignClassList(){
        this.props.history.push(`/assign-student`);
    }
    render() {
        return (
            <div> 
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-secondary ">
                        <div class="container-fluid">
                            <div class="navbar-header">
                                <a className="navbar-brand text-white">Student Management</a>
                                </div>
                                        <ul className="nav navbar-nav">
                                            <button type="button" class="btn btn-outline-light" onClick={this.navStudentList.bind(this)} >Student List</button>
                                            <button type="button" class="btn btn-outline-light" onClick={this.navClassList.bind(this)}>Class List</button>
                                            <button type="button" class="btn btn-outline-light" onClick={this.navAssignClassList.bind(this)}>Student-Class List</button>
                                        </ul>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;