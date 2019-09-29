import React from 'react';
import {Link} from 'react-router-dom';
import './Styles.css';

export default class Navbar extends React.Component{
    render(){
        return(
            <div className = "navbar font-weight-bolder font-style">
                <Link to = "/"><img src="https://lh3.googleusercontent.com/nBqWbQV8CoSwOJNrufExCB662i9EszYBcnEGbx6vOPSNfpIIeRPW1jZe7mXX6ExjHHDzZRQnDA=w1080-h608-p-no-v0" alt="DriveIt" width="300" height="100" /></Link>
                <Link to="/booknow">BOOK NOW</Link>
                <Link to="/charges">CHARGES</Link>
                <Link to="/about">ABOUT</Link>
            </div>
        )
    }
}