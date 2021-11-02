import React, { Component } from 'react';
import { toast } from 'react-toastify';
import ClassService from '../services/ClassService';

class ListClassComponent extends Component {
    constructor(props){
        super(props)
        
        this.state={
                classes: []
            }
            this.addClass=this.addClass.bind(this);
            this.deleteClass = this.deleteClass.bind(this);
            this.editClass=this.editClass.bind(this);
        }

        componentDidMount(){
            ClassService.getClasses().then((res)=>{
                this.setState({classes:res.data});
            });
        }
        

        addClass(){
            this.props.history.push(`/add-class`);
        }
        editClass(id){
            this.props.history.push(`/update-class/${id}`);
        }

        deleteClass = (id) => {
            ClassService.deleteClass(id).then( res => {
                
                ClassService.getClasses().then((res) => {
                    
                    toast.success('Class Record deleted Successfully',{autoClose:2500});
                    
                    this.setState({ classes: res.data});
                    
                });
            });
        }

    render() {
        return (
            <div>
                <h2 className="text-center" style={{marginTop: "50px"}}>Class List</h2>
                <div className='row'style={{marginBottom: "10px"}}>
                    <button className='btn btn-primary' onClick={this.addClass}>Add New Class</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Class Name</th>
                                <th>Location</th>
                                <th></th>
                            </tr>

                        </thead>
                        <tbody>
                            {
                                this.state.classes.map(
                                    class1 =>
                                    <tr key={class1.id}>
                                        <td>{class1.className}</td>
                                        <td>{class1.location}</td>
                                        <td><button onClick = {()=> this.editClass(class1.id)} style={{marginRight:"15px"}}  className="btn btn-info">Update</button>
                                        <button  className="btn btn-danger" onClick = {()=> this.deleteClass(class1.id)}>Delete</button>
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

export default ListClassComponent;