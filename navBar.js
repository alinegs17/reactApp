import React from 'react';
import "./navBar.css";
import FirstGame from 'firstgame.js';
import SecondGame from 'secondgame.js';

class NavBar extends React.Component {
    render () {
        return (
            <section id="nav-bar">
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="#"></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <a className="nav-link" href="index.html">{"Home"}</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">{"About"}</a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{"Game"}</a>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" target="_self" onClick={this.onClick1()}>{"Game #1"}</a>
                        <a className="dropdown-item" target="_self" onClick={this.onClick2()}>{"Game #2"}</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" target="_self" onClick={this.onClick3()}>{"Game #3"}</a>
                      </div>
                    </li>
                  </ul>
                  <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">{"Search"}</button>
                  </form>
                </div>
              </nav>
            </section>
        );
      }
    onClick1 () {
        return <FirstGame></FirstGame>;
    }
    onClick2 () {
        return <SecondGame></SecondGame>;
    }
    onClick3 () {
        return <ThirdGame></ThirdGame>;
    }

}

export default NavBar;