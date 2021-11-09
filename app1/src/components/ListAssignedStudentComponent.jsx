import React, { Component } from 'react';
import { toast } from 'react-toastify';
import AssignStudentService from '../services/AssignStudentService';

class ListAssignedStudentComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            records: []
        }
        this.addRecord=this.addRecord.bind(this);
    }

    componentDidMount(){
        AssignStudentService.getRecords().then((res)=>{
            this.setState({records:res.data});
        });
    }
    addRecord(){
        this.props.history.push(`/assign-student`);
    }
    editRecord(id){
        this.props.history.push(`/update-record/${id}`);
    }

    deleteRecord = (id) => {
        AssignStudentService.deleteRecord(id).then( res => {
            
            AssignStudentService.getRecords().then((res) => {
                
                toast.success('Record deleted Successfully',{autoClose:2500});
                
                this.setState({ records: res.data});
                
            });
        });
    }
    render() {
        return (
            <div>
                <h2 className="text-center" style={{marginTop: "50px"}}>Assigned Student List</h2>
                <div className='row'style={{marginBottom: "10px"}}>
                    <button className='btn btn-primary' onClick={this.addRecord}>Add New Record</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Student Name</th>
                                <th>Class Name</th>
                                <th></th>
                            </tr>

                        </thead>
                        <tbody>
                            {
                                this.state.records.map(
                                    record =>
                                    <tr key={record.id}>
                                        <td>{record.studentName}</td>
                                        <td>{record.className}</td>
                                        <td><button onClick = {()=> this.editRecord(record.id)} style={{marginRight:"15px"}}  className="btn btn-info">Update</button>
                                        <button  className="btn btn-danger" onClick = {()=> this.deleteRecord(record.id)}>Delete</button>
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

export default ListAssignedStudentComponent;