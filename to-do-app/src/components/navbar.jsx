import React, { Component } from 'react';

class NavBar extends Component {
    
    render() { 
        return (
        <nav className="navbar navbar-dark" style={{borderBottom:'solid white'}}>
        <div className="container-fluid" >
          <a className="navbar-brand" style={{color:'white', fontWeight: 'bold'}}>Todo Checklist App</a>
        </div>
      </nav>);
    }
}
 
export default NavBar;