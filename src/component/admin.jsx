import React from 'react';
import { Component } from 'react';

class Admin extends Component {
    state={};
    render(){
      const {products,onDelete,/*OnEdit*/}=this.props;
    return ( 
        <>
        <h1 id="h1"><i className="fas fa-laptop-house" style={{width:'100px' ,textAlign:"center",
        marginLeft:"10px",borderRadius:'15% 40%'}}></i> Admin</h1> 
        <button className="badge badge-primary m-2 p-3" onClick={()=>this.props.history.push("/add/new")}>
           Add 
        </button>
        <table className="table" id="t">
        <thead className="thead-light">
           <tr >
             <th scope="col" className="bg-primary">Name</th>
             <th scope="col" className="bg-warning">Price</th>
             <th scope="col" className="bg-info">Edit </th>
             <th scope="col" className="bg-info">Delete</th>
           </tr>
         </thead>
         <tbody>
           {products.map( product => (
         <tr key={product.id}>
           <td>{product.name}</td>
           <td>{product.price}</td>
           <td>
            <i 
            onClick={()=>this.props.history.push(`/add/${product.id}`)}
            className="far fa-edit m-2"
            ></i>
          
           </td>
          <td>
            <i 
            onClick={()=> onDelete(product)}
            className="fas fa-trash m-2"></i>
         </td>
        </tr>
         ))}
         </tbody>
         </table>
        </>
    
     );
           }
}
 
export default Admin;