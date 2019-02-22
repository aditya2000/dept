import React, { Component } from "react";
import './register.css';
import Navbar from './navbar';

export default class Register extends Component {
  render() {
    return (
      <div className="projects">
        <Navbar/>
        <div className="titleProjects">
          <h3>Register</h3>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeA-JhSQzLmZ4juvkoN2NimMIRYjS-r5T7yjTAImS47CM7-Pw/viewform?embedded=true" width="640" height="1266" frameBorder="0" marginHeight="0" marginWidth="0">Loading...</iframe>
        </div>
      </div>
    );
  }
}
