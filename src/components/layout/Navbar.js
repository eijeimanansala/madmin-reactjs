import React, { Component } from 'react'

class Navbar extends Component {
    
    componentDidMount() {
        const M = window.M

        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems,{});
          });
    }

    render() {
        return (
            <div>
                <nav className="blue darken-2">
                    <div className="container">
                        <div className="nav-wrapper">
                            <a href="#" className="brand-logo">Madmin</a>
                            <a href="#" data-target="slide-out" className="button-collapse show-on-large right sidenav-trigger"><i className="material-icons">menu</i></a>
                            <ul className="right hide-on-med-and-down">
                                <li className="active"><a href="#">Dashboard</a></li>
                                <li><a href="#">Posts</a></li>
                                <li><a href="#">Categories</a></li>
                                <li><a href="#">Comments</a></li>
                                <li><a href="#">Users</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <ul id="slide-out" className="sidenav">
                    <li><a href="#"><i className="material-icons">dashboard</i>Dashboard</a></li>
                    <li><a href="#">Posts</a></li>
                    <li><a href="#">Categories</a></li>
                    <li><a href="#">Comments</a></li>
                    <li><a href="#">Users</a></li>
                    <li><div className="divider"></div></li>
                    <li><a className="subheader">Account Controls</a></li>
                    <li><a href="#" className="waves-effect">Logout</a></li>
                </ul>
            </div>
        )
    }
}

export default Navbar
