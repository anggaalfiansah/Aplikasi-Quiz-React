/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

class Navbar extends Component {

    loopUntilDead(from,time) {
        for (let i = 0; i < time; i++) {
            console.log(from + "" + time);
        }
    }

    // componentDidMount() {
    //     console.log("Mounting Phase")
    //     // let getDataHttp = new Promise((resolve, reject) => {
    //     //     setTimeout(() => { resolve(`get data http selesai`) }, 5000)
    //     // });
    //     // getDataHttp.then(hasilGetData => { console.log(hasilGetData) })
    //     // .catch(error => console.log(`ini kalau ${error}`))

    //     // setTimeout(()=>{console.log(`ini 15 detik`)},15000);
    //     // setTimeout(()=>{console.log(`ini 3 detik`)},3000);

    //     this.loopUntilDead("a", 1000)
    //     this.loopUntilDead("b", 1000)
    // }

    // componentDidUpdate() {
    //     console.log("Update Phase")
    //     alert("Update Phase")
    // }

    // componentWillUnmount() {
    //     console.log("Unmounting Phase")
    // }
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                    <div className="container">
                        <div className="navbar-brand">APLIKASI QUIZ <span className="fs-6 fw-lighter">V.0.1.0</span></div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a role="button" className="nav-link" aria-current="page" >Home</a>
                                </li>
                                <li className="nav-item">
                                    <a role="button" className="nav-link">Create Quiz</a>
                                </li>
                                <li className="nav-item">
                                    <a role="button" className="nav-link">Attemp Quiz</a>
                                </li>
                                <li className="nav-item">
                                    <a role="button" className="nav-link">About</a>
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