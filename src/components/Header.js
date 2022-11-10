import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <>
            <div className='main mb-2'>
                <Link to='/'><img alt='logo' src='/images/IMDB_Logo.png' className='logo_img' /> </Link>
                <Link to='/movies/popular' className='nav_link'> Popular </Link>
                <Link to='/movies/top_rated' className='nav_link'> Toprated </Link>
                <Link to='/movies/upcoming' className='nav_link'>Upcoming </Link>

            </div>
        </>
    )
}
export default Header;