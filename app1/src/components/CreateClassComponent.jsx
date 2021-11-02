import React, { Component } from 'react';
import { toast } from 'react-toastify';
import ClassService from '../services/ClassService';

class CreateClassComponent extends Component {
    constructor(props){
        super(props)
        
        this.state={
                className:'',
                location:'',
                
            }
            this.changeClassNameHandler=this.changeClassNameHandler.bind(this);
            this.changeLocationHandler=this.changeLocationHandler.bind(this);
            
        }

        saveClass=(c)=>{
            c.preventDefault();

            let class1 = {className:this.state.className,
                location:this.state.location,
                };
    
                      
          
            console.log('class1 =>' + JSON.stringify(class1));
            ClassService.createClass(class1).then(res =>{

                
                
                toast.success('New Class Added Successfully',{autoClose:2500});
                    
                
                this.props.history.push('/classes');});
            
            
        }

        changeClassNameHandler = (event) => {
            this.setState({className:event.target.value});

        }
        changeLocationHandler = (event) => {
            this.setState({location:event.target.value});

        }

        
        cancel(){
            this.props.history.push('/classes');
        }

    render() {
        return (
            <div>
                <div className="container" style={{marginTop: "50px"}}>
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center" style={{marginTop: "10px"}}>Class Registration</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <input placeholder="Class Name" name="className" className="form-control"
                                            value={this.state.classtName} onChange={this.changeClassNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <input placeholder="location" name="location" className="form-control"
                                            value={this.state.location} onChange={this.changeLocationHandler}/>
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

export default CreateClassComponent;


