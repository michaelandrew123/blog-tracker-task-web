import {React, useState, useContext} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import FavoriteContext from '../store/favorites-context';

const Header = ({title, totalTasks}) => {
    const [showTodo, setShowTodo] = useState(false);
    const favoritesCtx = useContext(FavoriteContext);

    return (
        <>
            <header>
                <div className="nav-list"> 
                    <h2>
                        {title} { ' ' }
                    </h2>
                    
                    <small>Total Task: ({ totalTasks })</small>

                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/redux">Redux</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/image">Image</Link></li>
                        <li className='todo-navlist' onClick={()=>setShowTodo(!showTodo)}>
                            <a>Todos</a>
                            {
                                showTodo &&
                                
                                <ul className='todo-navlists'>
                                    <li>
                                        <Link to="/todo"> 
                                            Todo 
                                        </Link>
                                       
                                    </li>
                                    <li>
                                        <Link to="/allmeetup"> 
                                            All Meetup
                                        </Link> 
                                    </li>
                                    <li>
                                        <Link to="/new-meetup"> 
                                            Add New Meetup
                                        </Link> 
                                    </li> 
                                    <li>
                                        <Link to="/favorites"> 
                                            Favorites
                                            <span className='badge'>{favoritesCtx.totalFavorites}</span>
                                        </Link> 
                                    </li>
                                    
                                </ul> 

                            } 
                        </li>
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