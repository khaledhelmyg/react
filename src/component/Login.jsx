import React, { Component } from 'react';
import  Joi  from'joi-browser';
class Login extends Component {
    state = { 
        username: '',
        password: '',
        errors:{}
     };
  
    // userName=React.createRef();
    
    schema ={
        username:Joi.string().required(),
        password:Joi.string().required(),

    }
    handlesubmit = e =>{
        e.preventDefault();
        const errors=this.validate();
        if(errors)return;
        // call backend
        console.log('submint');
    }
    
    validate =()=>{
        const errors={};
        //clon state
        const state={ ...this.state};
        delete state.errors;
        const res=Joi.validate(state,this.schema,{abortEarly: false});
        if(res.error===null){
            this.setState({errors:{}})
            return null;
        
        }
        for(const error of res.error.details){
        errors[error.path]=error.message;
        }
        this.setState({errors});
            // if(this.state.username.trim()==="")
        //     errors.username="UserName is requires";
        
        // if(this.state.password.trim()==="")
        //     errors.password="Password is requires";
        // //set sate 
        // this.setState({errors});
        // return Object.keys(errors).length===0 ?null : errors ;
    };
    handleChange= e =>{
        //clone
        let state={...this.state};
        //edit
        state[e.currentTarget.name]=e.currentTarget.value;
        //setstate
       this.setState(state);
        //  //clone
        //  let username =[...this.state.username];
        //  //edit
        //  username=e.currentTarget.value;
        //  //setstate
        //  this.setState( {username} );
         // const username =this.userName.current.value;/
         // console.log("submited",username);
    }
    render() { 
        return ( 
        <>
        <h1>login</h1> 

        <form
         onSubmit={this.handlesubmit}>
        <div className="form-group">
            <label htmlFor="username">Email address</label>
            <input 
            /*ref={this.userName}*/ 
            name="username"
            value={this.state.username}
            onChange={this.handleChange}  
            autoFocus
            id="username" 
            type="text" 
            className="form-control"
            />
        </div>
        <div className="alart alart-danger">{this.state.errors.username}</div>
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
            name="password"
            value={this.state.password}
            onChange={this.handleChange}  
            id="password" 
            type="text" 
            className="form-control" 
            />
        </div>
        <div className="alart alart-danger" >{this.state.errors.password}</div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
       </>
        );
    }
}
export default Login;
