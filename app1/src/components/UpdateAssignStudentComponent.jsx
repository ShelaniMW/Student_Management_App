import React, { Component } from 'react';
import { toast } from 'react-toastify';
import ClassService from '../services/ClassService';
import StudentService from '../services/StudentService';
import AssignStudentService from '../services/AssignStudentService';


class UpdateAssignStudentComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            id:this.props.match.params.id,
            studentName:'',
            className:'',
            classes: [],
            students:[]
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
        AssignStudentService.getRecordById(this.state.id).then((res)=>{
            let record = res.data;
            this.setState({className: record.className,
                studentName: record.studentName,
            
        });
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
    update=(c)=>{
        c.preventDefault();

        let record = {studentName:this.state.studentName,
                    className:this.state.className,};

                  
      
        console.log('record =>' + JSON.stringify(record));
        AssignStudentService.updateRecord(record,this.state.id).then(res =>{

            
            toast.success('Updated Successfully',{autoClose:2500});
                
                
            
            this.props.history.push('/assign-records');});
        
        
    }
    render() {
        const {serveType} = this.state;
        return (
            <div>
                <div className="container" style={{marginTop: "50px"}}>
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center" style={{marginTop: "10px"}}>Update Student-Class Registration</h3>
                            <div className="card-body">
                                <form>
                                <div className="form-group">
                                    <label>Student Name:</label>
                                        <select class="form-control" value={this.state.studentName} onChange={this.changeStudentNameHandler}> 
                                                
                                                {this.state.students.map(student =>
                                            <option name="StudentName">{student.studentName}</option>)}
                                        </select>
                                    </div>      
                                    <div className="form-group">
                                    <label>Class Name:</label>
                                        <select class="form-control" value={this.state.className} onChange={this.changeClassNameHandler} > 
                                                
                                                {this.state.classes.map(class1 =>
                                            <option name="ClassName">{class1.className}</option>)}
                                        </select>
                                    </div> 
                                    <button className="btn btn-success" onClick={this.update.bind(this)}>Update</button>
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

export default UpdateAssignStudentComponent;