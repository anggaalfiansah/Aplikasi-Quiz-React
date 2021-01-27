import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                    <div className="container">
                        <div className="navbar-brand">APLIKASI QUIZ <span className="fs-6 fw-lighter">V.0.1.0</span></div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav d-flex-right">
                                <li className="nav-item">
                                    <div className="nav-link">Home</div>
                                </li>
                                <li className="nav-item">
                                    <div className="nav-link">Features</div>
                                </li>
                                <li className="nav-item">
                                    <div className="nav-link">Pricing</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        );
    }
}

export default Navbar;