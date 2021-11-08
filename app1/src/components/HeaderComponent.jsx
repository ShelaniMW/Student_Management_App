import React, { Component } from 'react';
import StudentService from '../services/StudentService';
import ClassService from '../services/ClassService';
import { Route , withRouter} from 'react-router-dom';
import { Link } from 'react-router-dom';


class HeaderComponent extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            classes:[],
            students:[]

        }
     }

    
    render() {
        const {serveType} = this.state;
        return (
            <div> 
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-secondary ">
                        <div class="container-fluid">
                            <div class="navbar-header">
                                <a className="navbar-brand text-white">Student Management</a>
                                </div>
                                        <ul className="nav navbar-nav">
                                            <button type="button" class="btn btn-outline-light" ><Link className="link" style={{ textDecoration: 'none' }} to="/students">Student List</Link></button>
                                            <button type="button" class="btn btn-outline-light" ><Link className="link" style={{ textDecoration: 'none' }} to="/classes">Class List</Link></button>
                                            <button type="button" class="btn btn-outline-light" ><Link className="link" style={{ textDecoration: 'none' }} to="/assign-records">Assigned-Student List</Link></button>
                                        </ul>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;