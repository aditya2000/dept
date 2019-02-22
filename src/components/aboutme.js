import React, { Component } from "react";
import './aboutme.css';
import Navbar from '../components/navbar';
import Grid from '@material-ui/core/Grid';

export default class Aboutme extends Component {
  render() {
    return (
      <div className="aboutme">
        <Navbar/>
        <div className="titleAbout">
          <h3>About Us</h3>
          <div className="titleDesc">
            <p>Curieux was started with an aim to promote learning of Computer Science and Programming among the students of various educational backgrounds. We actively organise meetups to discuss the about the new technolgies and best practices across different fields of Computer Science including Web Design, Web Development, Mobile App Development, Cyber Security and Ethical Hacking, Robotics and so on.</p>
          </div>
          <br/>
          <div className="titleEvents">
            <h3>Events</h3>
            <div className="whizQuiz">
              <h4>WhizQuiz</h4>
              <Grid container spacing={24}>
                <Grid item xs={12} sm={6}>
                  <img src={require("../assets/whizQuiz.jpg")} alt="Pheonix"/>
                </Grid>
                <Grid item xs={12} sm={6}>
                <p><i>“You can mass-produce software; you can mass-produce software; you can mass-produce the human mind”</i></p>
                <p>Are you a computer wizard? It’s time to Boost up the programmer inside you and stand a chance to win exciting cash prizes.</p>
                </Grid>
              </Grid>
            </div>
            <div className="confondo">
              <h4>Confondo</h4>
              <Grid container spacing={24}>
                <Grid item xs={12} sm={6}>
                  <img src={require("../assets/confondo.jpg")} alt="Pheonix"/>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <p><i>“The solution often turns out more beautiful than the puzzle"<br/> ~ Richard Dawkins</i></p>
                  <p>Are you a computer wizard? It’s time to Boost up the programmer inside you and stand a chance to win exciting cash prizes.</p>
                </Grid>
              </Grid>
            </div>
            <div className="kryptos">
              <h4>Kryptos</h4>
              <Grid container spacing={24}>
                <Grid item xs={12} sm={6}>
                  <img src={require("../assets/kryptos.jpeg")} alt="Pheonix"/>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <p><i>“Problem solving is hunting. It is savage pleasure and we are born to it."<br/> ~ Thomas Harris</i></p>
                  <p>Are you a computer wizard? It’s time to Boost up the programmer inside you and stand a chance to win exciting cash prizes.</p>
                </Grid>
              </Grid>
            </div>
            <div className="lanisters">
              <h4>Lanisters</h4>
              <Grid container spacing={24}>
                <Grid item xs={12} sm={6}>
                  <img src={require("../assets/lanisters.jpeg")} alt="Pheonix"/>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <p><i>“Video games are bad for you? That's what they said about rock-n-roll."<br/> ~ Shigeru Miyamoto</i></p>
                  <p>Are you a gaming wizard? It’s time to Boost up the gamer inside you and stand a chance to win exciting cash prizes.</p>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
