import React, {Component} from 'react';
import { Link } from 'react-router-dom';

 class ProductList extends Component {
    render() {
        return (
        <div className="ProductList">
        <h2>Products</h2>
        <ul>
        <li>Love</li>
        <li>Joy</li>
        <li>Peace</li>
        </ul>
        <Link to='/Home'>
        <button><b>Back to home</b></button>
        </Link>
        <Link to='/OtherProducts'>
        <button><b>See More Products</b></button>
        </Link>

        <button><Link to='/'><b>Confirm Order</b></Link></button>
        </div>
        );
    }
}

export default ProductList;