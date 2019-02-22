import React, { Component } from "react";
import './landingPage.css';
import Grid from '@material-ui/core/Grid';
import { Link, withRouter} from "react-router-dom";
import Navbar from '../components/navbar';
class LandingPage extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.history.push('/register')
  }
  render() {
    return (
      <div className='landingPage'>
        <Navbar/>
        <div className='titleCs'>
          <h3>Curieux Home</h3>
          <button className="btn" onClick={this.handleClick}>Register</button>
        </div>

        <div id='#about' className="about">
          <Grid container spacing={24}>
            <Grid item xs={12} sm={6}>
              <h3>What is Curieux?</h3>
              <p>Curieux is the Computer Science Society of Sri Guru Teg Bahadur Khalsa College, University of Delhi.</p>
              <Link to="/aboutme">Tell me something more</Link>
            </Grid>
            <Grid item xs={12} sm={6}>
              <img src='https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'/>
            </Grid>
          </Grid>
        </div>

        <div id='#event' className="event">
        <Grid container spacing={24}>
            <Grid item xs={12} sm={6}>
              <img src={require("../assets/pheonix2.png")} alt="Pheonix"/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <h3>Phoenix</h3>
              <p>Phoenix is the annual techfest of Curieux</p>
              <p>Participate to win exciting prizes</p>
              <button className="btn-white" onClick={this.handleClick}>Register</button>
            </Grid>
          </Grid>
        </div>

        <div id='#contact' className="contact">
          <h3>Connect with us</h3>
          <a href="https://www.facebook.com/curieuxsgtbkhalsa/?ti=as" target="_blank"><i className="fab fa-facebook-square fa-3x" style = {{color: "#096cee"}}></i></a>
          <a href="#"><i className="fab fa-instagram fa-3x" style = {{color: "#fb3958"}}></i></a>
          
        </div>

        <div id='#footer' className="footer">
          <p>Made with <i className="fas fa-heart" style = {{color: "#dd1b3b"}}></i> by <a href="https://github.com/aditya2000" target="_blank">Aditya Dehal</a> and <a href="https://github.com/dbhagesh" target="_blank">Bhagesh Dhankher</a></p>
          <p>&copy; 2019 Curieux. All rights reserved.</p>
        </div>
      </div>
    );
  }
}


export default withRouter(LandingPage);
