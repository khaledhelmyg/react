import React, { Component } from "react";

import Product from "./Product";

class ShoppingCart extends Component {
  render() {
    const {products,onReset,onDelete,onIncrement}=this.props;
    return (
      <React.Fragment>
        <h1>Shopping Cart</h1>
        <button
          onClick={onReset}
          className="btn btn-secondary m-2">
          Reset
        </button>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onDelete={onDelete}
            onIncrement={onIncrement}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default ShoppingCart;



// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// class ShoppingCart extends Component  {
   
//     render(){    
//     const { product, onIncrement, onDelete } = this.props;
//         return ( 
//             <>
//               <div className="container bg-faded py-1 bg-secondary">
//                 <span className="ml-4">
//                     <Link to={'/'}>{product.nme}</Link>
//                 </span>
//                 <span className="badge badge-pill badge-info m-2 p-2">
//                     {props.products[0].count}
//                 </span>
//                 <button className="btn btn-outline-success m-2" onClick={props.increaseCount} >+</button>
//                 <i className="fas fa-trash m-2 p-2" onClick={props.handleDelete}></i>
//             </div>
//             </>
//          );
//     };
// }
 
// export default ShoppingCart;