import React, { Component } from "react";
import './gallery.css';
import Navbar from '../components/navbar';
import Grid from '@material-ui/core/Grid';

export default class Gallery extends Component {
  render() {
    const images = ['dept1', 'dept2', 'dept3', 'dept4', 'dept5']
    return (
      <div className="gallery">
        <Navbar/>
        <div className="galleryAbout">
          <h3>Gallery</h3>
          <Grid container spacing={24}>
            {
              images.map((image) => {
                return(
                  <Grid item xs={12} sm={4} key={Math.random()}>
                    <img src={require("../assets/" + image + ".jpeg")}/>
                  </Grid>
                )
              })
            }
          </Grid>
        </div>
      </div>
    );
  }
}
