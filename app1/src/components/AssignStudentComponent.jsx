import React, { Component } from 'react';

import ClassService from '../services/ClassService';
import StudentService from '../services/StudentService';
import { toast } from 'react-toastify';
import AssignService from '../services/AssignService';

class AssignStudentComponent extends Component {
    constructor(props){
        super(props)
        
        this.state={
            classes: [],
            students:[],
            StudentName:'',
            ClassName:''
            
            
        }

                  
    }
    componentDidMount(){
        ClassService.getClasses().then((res)=>{
            this.setState({classes:res.data});
        });

            StudentService.getStudents().then((res)=>{
                this.setState({students:res.data});
        });
    }
    changeClassNameHandler = (event) => {
        this.setState({ClassName:event.target.value});

    }
    changeStudentNameHandler = (event) => {
        this.setState({StudentName:event.target.value});

    }
    cancel(){
        this.props.history.push('/classes');
    }
    save=(a)=>{
        a.preventDefault();

        let assign = {ClassName:this.state.ClassName,
            StudentName:this.state.StudentName,
            };

                  
      
        console.log('assign =>' + JSON.stringify(assign));
        AssignService.createAssign(assign).then(res =>{

            
            
            toast.success('New Record Added Successfully',{autoClose:2500});
                
            
            this.props.history.push('/classes');});
        
        
    }

    
    render() {
        const {serveType} = this.state;
        return (
            <div>
               
                <div className="container" style={{marginTop: "50px"}}>
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center" style={{marginTop: "10px"}}>Student-Class Registration</h3>
                            <div className="card-body">
                                <form>
                                <div className="form-group">
                                    <label>Student Name:</label>
                                        <select class="form-control" value={this.state.StudentName} onChange={this.changeStudentNameHandler}> 
                                            <option selected></option>     
                                                {this.state.students.map(student =>
                                            <option name="StudentName">{student.studentName}</option>)}
                                        </select>
                                    </div>      
                                    <div className="form-group">
                                    <label>Class Name:</label>
                                        <select class="form-control" value={this.state.ClassName} onChange={this.changeClassNameHandler} > 
                                            <option selected></option>     
                                                {this.state.classes.map(class1 =>
                                            <option name="ClassName">{class1.className}</option>)}
                                        </select>
                                    </div> 
                                    <button className="btn btn-success" >Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)}  style={{marginLeft: "10px"}}>Cancel</button>     
                                </form>

                            </div>
                    </div>
                </div>
                </div>
                
            </div>
        );
    }
}

export default AssignStudentComponent;

