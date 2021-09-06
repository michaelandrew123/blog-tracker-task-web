import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Header = ({title, totalTasks}) => {
    return (
        <>
            <header>
                <div className="nav-list"> 
                    <h2>
                        {title} { ' ' }
                        <small>({ totalTasks })</small>
                    </h2>

                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/blog/073">Blog</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </header>
        </>
    )
}


// Header.defaultProps = {
//     title: 'Task Tracker',
// }

Header.propTypes = {
    title: PropTypes.string.isRequired
}



export default Header;