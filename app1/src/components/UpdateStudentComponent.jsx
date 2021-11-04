import React, { Component } from 'react';
import { toast } from 'react-toastify';
import StudentService from '../services/StudentService';

class UpdateStudentComponent extends Component {
    constructor(props){
        super(props)
        
        this.state={
                id:this.props.match.params.id,
                studentName:'',
                address:'',
                email:'',
                phone:''
            }
            this.changeStudentNameHandler=this.changeStudentNameHandler.bind(this);
            this.changeAddressHandler=this.changeAddressHandler.bind(this);
            this.changeEmailHandler=this.changeEmailHandler.bind(this);
            this.changePhoneHandler=this.changePhoneHandler.bind(this);
        }

        componentDidMount(){
            StudentService.getStudentById(this.state.id).then((res)=>{
                let student = res.data;
                this.setState({studentName : student.studentName,
                address: student.address,
                email: student.email,
                phone: student.phone
            });
        });
    }

        updateStudent=(s)=>{
            s.preventDefault();

            let student = {studentName:this.state.studentName,
                address:this.state.address,
                email:this.state.email,
                phone:this.state.phone};
    
                      
          
            console.log('student =>' + JSON.stringify(student));
            StudentService.updateStudent(student,this.state.id).then(res =>{

                
                toast.success('Updated Successfully',{autoClose:2500});
                    
                    
                
                this.props.history.push('/students');});
            
            
        }

        changeStudentNameHandler = (event) => {
            this.setState({studentName:event.target.value});

        }
        changeAddressHandler = (event) => {
            this.setState({address:event.target.value});

        }

        changeEmailHandler= (event) => {
            this.setState({email:event.target.value});

        }

        changePhoneHandler= (event) => {
            this.setState({phone:event.target.value});

        }
        cancel(){
            this.props.history.push('/students');
        }

    render() {
        const {serveType} = this.state;
        return (
            <div>
                <div className="container" style={{marginTop: "50px"}}>
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center" style={{marginTop: "10px"}}>Update Student</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                    <label>Student Name:</label>
                                        <input placeholder="Student Name" name="studentName" className="form-control"
                                            value={this.state.studentName} onChange={this.changeStudentNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Address:</label>
                                        <input placeholder="Address" name="address" className="form-control"
                                            value={this.state.address} onChange={this.changeAddressHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Email:</label>
                                        <input placeholder="Email" name="studentName" className="form-control"
                                            value={this.state.email} onChange={this.changeEmailHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Contact Number:</label>
                                        <input placeholder="Contact Number" name="studentName" className="form-control"
                                            value={this.state.phone} onChange={this.changePhoneHandler}/>

                                    </div>

                                    <button className="btn btn-success" onClick={this.updateStudent.bind(this)}>Update</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>

                            </div>
                    </div>
                </div>
                </div>
            </div>

        );
    }
}

export default UpdateStudentComponent;