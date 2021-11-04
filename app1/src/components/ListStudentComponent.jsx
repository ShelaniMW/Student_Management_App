import React, { Component } from 'react';
import { toast } from 'react-toastify';
import StudentService from '../services/StudentService';

function searchingFor(term){
    return function(x){
        return x.email.toLowerCase().includes(term.toLowerCase()) || !term;
        }
    }

toast.configure()
class ListStudentComponent extends Component {
    constructor(props){
        super(props)
        
        this.state={
                students: [],
                term:''
            }
            this.addStudent=this.addStudent.bind(this);
            this.deleteStudent = this.deleteStudent.bind(this);
            this.editStudent=this.editStudent.bind(this);
            this.searchHandler = this.searchHandler.bind(this);
        }

        componentDidMount(){
            StudentService.getStudents().then((res)=>{
                this.setState({students:res.data});
            });
        }

        addStudent(){
            this.props.history.push(`/add-student`);
        }
        editStudent(id){
            this.props.history.push(`/update-student/${id}`);
        }
        searchHandler(event){
            this.setState({term: event.target.value})
        }


        deleteStudent = (id) => {
            StudentService.deleteStudent(id).then( res => {
                
                StudentService.getStudents().then((res) => {
                    
                    toast.success('Student Record deleted successfully',{autoClose:2500});
                    
                    this.setState({ students: res.data});
                    
                });
            });
        }

    render() {
        const {term,term1,students} = this.state;
        return (
            <div>
                <h2 className="text-center" style={{marginTop: "50px"}}>Student List</h2>
                <div className='row'style={{marginBottom: "10px"}}>
                    <button className='btn btn-primary' onClick={this.addStudent}>Add New Student</button>
                    <form><input style={{marginLeft:"700px"}}type="text" placeholder="Searc Email........." onChange={this.searchHandler} value={term}/></form>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Student Name</th>
                                <th>Address</th>
                                <th>Email</th>
                                <th>Contact Number</th>
                                <th></th>
                            </tr>

                        </thead>
                        <tbody>
                            {
                                this.state.students.filter(searchingFor(this.state.term)).map(
                                    student =>
                                    <tr key={student.id}>
                                        <td>{student.studentName}</td>
                                        <td>{student.address}</td>
                                        <td>{student.email}</td>
                                        <td>{student.phone}</td>
                                        <td><button onClick = {()=> this.editStudent(student.id)} style={{marginRight:"15px"}}  className="btn btn-info">Update</button>
                                        <button  className="btn btn-danger" onClick = {()=> this.deleteStudent(student.id)}>Delete</button>
                                        </td>
                                        </tr>
                                        
                                )
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListStudentComponent;