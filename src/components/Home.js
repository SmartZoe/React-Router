import React, {Component} from 'react';
import { Link } from 'react-router-dom';

 class Home extends Component {
    render() {
        return (
        <div className="Home">
        <h2>Home Page</h2>
        <p><b>Lets go shopping!!! <br/>Everything has a Price!!!</b>
        <h4>DO YOU?</h4>
        </p>
        <Link to='/ProductList'> 
        <button>
        <b>Go to Products!!!</b>
        </button>
        </Link>
        </div>
        );
    }
}

export default Home;