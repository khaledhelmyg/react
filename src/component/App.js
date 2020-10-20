import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import axios from "axios";
import {toast, ToastContainer} from'react-toastify';
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import ShoppingCart from "./ShoppingCart";
import NavBar from "./NavBar";
import ProductDetails from "./productDetails";
import "./App.css";
import NotFound from "./notFound";
import Login from "./Login";
import Admin from "./admin";
import AddProduct from "./add";

class App extends Component {
  state = {
    products: [],
  };
  async componentDidMount() {
    //call backend
    const { data } = await axios.get("https://my-json-server.typicode.com/khaledhelmyg/react/products/");
    /*"http://localhost:3000/products"*/
    //set state
    this.setState({ products: data });
    // const promise=fetch('https://jsonplaceholder.typicode.com/posts')
    // const res=promise.then(res=>res.json());
    // res.then(data=> console.log(data));
  }
  handleReset = () => {
    //Clone
    let products = [...this.state.products];
    //Edit
    products = products.map((p) => {
      p.count = 0;
      return p;
    });
    //Set state
    this.setState({ products });
  };
  IncrementHandler = (product) => {
    //Clone
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...products[index] };
    //Edit
    products[index].count++;
    //Set State
    this.setState({ products });
  };

  handleDelete =async product => {
    const oldData=[...this.state.products];
    //filte products 
    const products=this.state.products.filter(p=>p.id !==product.id);
     //Set State
     this.setState({ products });
     try{
      //call backend
    await axios.delete("https://my-json-server.typicode.com/khaledhelmyg/react/products/"+product.id);
       /*'http://localhost:3000/products/'*/
     }catch(ex){
       toast("cant delete");
       this.setState({products:oldData})
     }
    ///or
    // ///Clone
    // const products = [...this.state.products];
    // const index = products.indexOf(product);
    // //Edit
    // products.splice(index, 1);
    // //Set State
    // this.setState({ products });
  };
  handleInCartChange = (product) => {
    //clone
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...products[index] };
    //edit
    products[index].isInCart = !products[index].isInCart;
    //set satate
    this.setState({ products });
  };
  handleEdite=()=>{
    console.log("edite");
  }
  render() {
    return (
      <div className="divall">
        <ToastContainer/>
        <NavBar
          productsCount={this.state.products.filter((p) => p.isInCart).length}
        />
        <Switch>
          <Route
            path={"/home"}
            render={(props) => (
              <Home
                {...props}
                products={this.state.products}
                onClick={this.handleInCartChange}
              />
            )}
          />
          <Route
            path={"/admin"}
            render={(props) => (
              <Admin
                {...props}
                products={this.state.products}
                onDelete={this.handleDelete}
                onEdit={this.handleEdite}
              />
            )}
          />
          <Route path={"/add/:id"} component={AddProduct} />
          <Route path={"/about"} component={About} />
          <Route path={"/contact"} component={Contact} />
          <Route path={"/notfound"} component={NotFound} />
          <Route
            path="/products/:id/:name?"
            render={(props) => (
              <ProductDetails products={this.state.products} {...props} />
            )}
          />
          <Route path={"/login"} component={Login} />
          <Route
            path={"/cart"}
            render={(props) => (
              <ShoppingCart
                products={this.state.products.filter((c) => c.isInCart)}
                onIncrement={this.IncrementHandler}
                onDelete={this.handleInCartChange}
                onReset={this.handleReset}
                {...props}
              />
            )}
          />
          {/*if user tip "/home" without '/' we will redirect the user to the home page */}
          <Redirect from="/" to="/home" />
          {/*if page not found we will redirect the user to the notfound page */}
          <Redirect to={"/notfound"} />
        </Switch>
      </div>
    );
  }
}

export default App;
