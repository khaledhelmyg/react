import React  from 'react';
import Cart from './Cart';

 const Home =props => {  
     return ( 
       <>
       <h1 id="h1"><i className="fas fa-laptop-house" style={{width:'100px' ,textAlign:"center",
       marginLeft:"10px",borderRadius:'15% 40%'}}></i> Home</h1> 
       <table className="table" id="t">
       <thead className="thead-light">
          <tr >
            <th scope="col" className="bg-primary">Name</th>
            <th scope="col" className="bg-warning">Price</th>
            <th scope="col" className="bg-info">add to Cart</th>
          </tr>
        </thead>
        <tbody>
          {props.products.map( product => (
        <tr>
          <td>{product.name}</td>
          <td>{product.price}</td>
         <td>
         <Cart onClick={props.onClick} product={product} />
        </td>
       </tr>
        ))}
        </tbody>
        </table>
       </>
      );
   }
 
 export default Home;