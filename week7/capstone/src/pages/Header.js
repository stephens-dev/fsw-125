import React from 'react'
import {Link} from 'react-router-dom'



function Header() {
    return (
        <div className="nav">
            <ul>
            <Link to="/" >
                <li>Home</li>
            </Link>
            <Link to="/Movies" >
                <li>Movies</li>
            </Link>
            <Link to="/TvShows" >
                <li>Tv Shows</li>
            </Link>
            </ul>
        </div>
    )
}

export default Header