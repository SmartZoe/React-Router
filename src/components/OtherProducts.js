import React, {Component} from 'react';
import { Link } from 'react-router-dom';

 class OtherProducts extends Component {
    render() {
        return (
        <div className="Other-Products">
        <ul>
        <li>Self Control</li>
        <li>Happiness</li>
        <li>Temperance</li>
        <li>Long Suffering</li>
        </ul>

        <Link to='/Home'>
        <button><b>Back to home</b></button>
        </Link>
        <Link to='/ProductList'> 
        <button>
        <b>More Products!!!</b>
        </button>
        </Link>
        <button><Link to='/'><b>Confirm Order</b></Link></button>
        </div>
        );
    }
}

export default OtherProducts;