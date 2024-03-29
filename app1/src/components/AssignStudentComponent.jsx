import React, { Component } from 'react';

import ClassService from '../services/ClassService';
import StudentService from '../services/StudentService';
import { toast } from 'react-toastify';
import AssignStudentService from '../services/AssignStudentService';

class AssignStudentComponent extends Component {
    constructor(props){
        super(props)
        
        this.state={
            classes: [],
            students:[],
            studentName:'',
            className:''
            
            
        }
        this.changeClassNameHandler=this.changeClassNameHandler.bind(this);
        this.changeStudentNameHandler=this.changeStudentNameHandler.bind(this);
                  
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
        this.setState({className:event.target.value});

    }
    changeStudentNameHandler = (event) => {
        this.setState({studentName:event.target.value});

    }
    cancel(){
        this.props.history.push('/assign-records');
    }
    save=(a)=>{
        a.preventDefault();

        let record = {className:this.state.className,
            studentName:this.state.studentName,
            };

                  
      
        console.log('record =>' + JSON.stringify(record));
        AssignStudentService.createRecord(record).then(res =>{

            
            
            toast.success('New Record Added Successfully',{autoClose:2500});
                
            
            this.props.history.push('/assign-records');});
        
        
    }

    
    render() {
        
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
                                        <select class="form-control" value={this.state.studentName} onChange={this.changeStudentNameHandler}> 
                                            <option selected></option>     
                                                {this.state.students.map(student =>
                                            <option name="StudentName">{student.studentName}</option>)}
                                        </select>
                                    </div>      
                                    <div className="form-group">
                                    <label>Class Name:</label>
                                        <select class="form-control" value={this.state.className} onChange={this.changeClassNameHandler} > 
                                            <option selected></option>     
                                                {this.state.classes.map(class1 =>
                                            <option name="ClassName">{class1.className}</option>)}
                                        </select>
                                    </div> 
                                    <button className="btn btn-success" onClick={this.save.bind(this)} >Save</button>
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

