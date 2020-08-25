import React from 'react';
import './homePage.css';
import NavBar from './navBar';

class HomePage extends React.Component {
    render () {
        return (
        <div>
                <NavBar></NavBar>
<div id="slider">
    <div id="headerSlider" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                        <li data-target="#headerSlider" data-slide-to="0" className="active"></li>
                        <li data-target="#headerSlider" data-slide-to="1"></li>
                        <li data-target="#headerSlider" data-slide-to="2"></li>
                </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block img-fluid" src="img/tropical.jpg" width="100%" height="600" alt="First slide"></img>
                            <div className="carousel-caption">
                                <h5>{"Guess My Number!"}</h5>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block img-fluid" src="img/ivy.jpg" width="100%" height="600" alt="Second slide"></img>
                            <div className="carousel-caption">
                                <h5>{"Catch!"}</h5>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block img-fluid" src="img/flowers.jpg" width="100%" height="600" alt="Third slide"></img>
                            <div className="carousel-caption">
                                <h5>{"Checkers"}</h5>
                            </div>
                        </div>
                    </div>
                            <a className="carousel-control-prev" href="#headerSlider" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">{"Previous"}</span>
                            </a>
                            <a className="carousel-control-next" href="#headerSlider" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">{"Next"}</span>
                            </a>
                </div>
            </div>
            <section id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-mod-6">
                            <h2>{"About this website"}</h2>
                            <div className="about-content">{"Filler text."}</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        );
    }
}

export default HomePage;