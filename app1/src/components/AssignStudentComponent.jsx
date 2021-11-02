import React, { Component } from 'react';
import AsyncSelect from 'react-select/async'
import ClassService from '../services/ClassService';

class AssignStudentComponent extends Component {
    constructor(props){
        super(props)
        
        this.state={
            classes: [],
            students:[],
            selectedOption: {},
            
        }

                  
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
                                        <select>
                                        {
                                this.state.classes.map(
                                    class1 =>
                                    
                                        <option value={class1.className}></option>
                                        
                                        
                                )
                            }

                                        
                                            </select>
                                            
                                    </div>
                                    <div className="form-group">
                                        <input placeholder="Class Name" name="className" className="form-control"
                                            value={this.state.className} onChange={this.changeClassNameHandler}/>
                                    </div>
                                    

                                    <button className="btn btn-success" onClick={this.saveClass.bind(this)}>Save</button>
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

export default AssignStudentComponent;