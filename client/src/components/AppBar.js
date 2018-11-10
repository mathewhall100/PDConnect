import React, {Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';


class AppBar extends Component {
    render () {
        return(
            <nav>
                <div className="nav-fostrap">
                    <ul>
                        <li><a href="/">PD Connect</a></li>
                        <li><a href="/">Connect</a></li>
                        <li><a href="/">Our Promises</a></li>
                        <li><a href="/">Endorsements</a></li>
                        <li><a href="/">Featured Treatments</a></li>
                        <li className='li-right'><a href="">Sign In</a></li>
                        
                    </ul>
                </div>
                <div className="nav-bg-fostrap">
                    <div className="navbar-fostrap"> <span></span> <span></span> <span></span> </div>
                    <a href="" className="title-mobile">PD Connect</a>
                </div>
            </nav>
        )
    }
}

export default  AppBar
