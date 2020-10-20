import React, { Component } from "react";
import axios from "axios";
class AddProduct extends Component {
  state = {
    name:"",
    price:"", 
    id:""
  };
 async componentDidMount () {
    const id=this.props.match.params.id;
    if(id !=="new"){
      const {data}=await axios.get('http://localhost:3000/products/'+id);
      //clone state
      const state={...this.state};
      //edit
      state.name=data.name;
      state.price=data.price;
      state.id=data.id;
      //set state
      this.setState(state);
    }
  }
  handlesubmit = async e =>{
    e.preventDefault();
    //add
    if(this.props.match.params.id === "new"){
      //create object to add all state and anthe prametars 
      const obj={...this.state, count: 0,isInCart: false};
      //calll backend
      await axios.post('http://localhost:3000/products',obj);
      console.log('submint');
    }else{
       //edit
       //clon state and create obj
       const obj={...this.state ,count:0 , isInCart:false};
       //delet id to not send to the server tow id's one from url and anther from object
       delete obj.id; 
       await axios.put('http://localhost:3000/products/'+ this.state.id,obj);
    }
    //use replce to not return the user back to add product page
    this.props.history.replace("/admin")
}
  handleChange= e =>{
    //clone
    let state={...this.state};
    //edit
    state[e.currentTarget.name]=e.currentTarget.value;
    //setstate
   this.setState(state);
  };
  render() {
    return (
      <>
        <h1>{this.props.match.params.id==="new"? "Add product" :"Edit product"}</h1>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              onChange={this.handleChange}
              value={this.state.name}   
              className="form-control"
              id="name"
              name="name"
              type="text"
       
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input 
            className="form-control" 
            value={this.state.price}
            onChange={this.handleChange}
            id="price"  
            name="price"
            type="number"   
            />
          </div>

          <button type="submit" className="btn btn-primary" onClick={this.handlesubmit}>
          {this.props.match.params.id==="new"? "Add" :"Edit"}
          </button>
        </form>
      </>
    );
  }
}

export default AddProduct;
