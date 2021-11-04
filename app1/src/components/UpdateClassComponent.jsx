import React, { Component } from 'react';
import { toast } from 'react-toastify';
import ClassService from '../services/ClassService';

class UpdateClassComponent extends Component {
    constructor(props){
        super(props)
        
        this.state={
                id:this.props.match.params.id,
                className:'',
                location:''
            }
            this.changeClassNameHandler=this.changeClassNameHandler.bind(this);
            this.changeLocationHandler=this.changeLocationHandler.bind(this);

        }

        componentDidMount(){
            ClassService.getClassById(this.state.id).then((res)=>{
                let class1 = res.data;
                this.setState({className : class1.className,
                location: class1.location
            });
        });
    }

        updateClass=(c)=>{
            c.preventDefault();

            let class1 = {className:this.state.className,
                location:this.state.location};
    
                      
          
            console.log('class1 =>' + JSON.stringify(class1));
            ClassService.updateClass(class1,this.state.id).then(res =>{

                
                toast.success('Updated Successfully',{autoClose:2500});
                    
                    
                
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
        const {serveType} = this.state;
        return (
            <div>
                <div className="container" style={{marginTop: "50px"}}>
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center" style={{marginTop: "10px"}}>Update Class</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                    <label>Class Name:</label>
                                        <input placeholder="Class Name" name="className" className="form-control"
                                            value={this.state.className} onChange={this.changeClassNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Location:</label>
                                        <input placeholder="Location" name="location" className="form-control"
                                            value={this.state.location} onChange={this.changeLocationHandler}/>
                                    </div>
                                    

                                    <button className="btn btn-success" onClick={this.updateClass.bind(this)}>Update</button>
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

export default UpdateClassComponent;