import React, {Component} from 'react';
import { Link } from "react-router-dom";
import './navbar.css';

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.burgerToggle = this.burgerToggle.bind(this);
    }

    burgerToggle() {
		let linksEl = document.querySelector('.narrowLinks');
		if (linksEl.style.display === 'block') {
			linksEl.style.display = 'none';
		} else {
			linksEl.style.display = 'block';
		}
	}
    render() {
        return(
            <div className='navbar'>
                <nav>
                    <div className="navWide">
                        <div className="wideDiv">
                            <h2>CURIEUX</h2>
                            <Link to="/">Home</Link>
                            <Link to="/aboutme">About Us</Link>
                            <Link to="/gallery">Gallery</Link>
                            <Link to="/register">Register</Link>
                        </div>
                    </div>
                    <div className="navNarrow">
                        <i className="fa fa-bars fa-2x" onClick={this.burgerToggle}></i>
                        <h2>Curieux</h2>
                        <div className="narrowLinks">
                            <Link to="/" onClick={this.burgerToggle}>Home</Link>
                            <Link to="/aboutme" onClick={this.burgerToggle}>About Us</Link>
                            <Link to="/gallery" onClick={this.burgerToggle}>Gallery</Link>
                            <Link to="/register" onClick={this.burgerToggle}>Register</Link>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}


export default Navbar;