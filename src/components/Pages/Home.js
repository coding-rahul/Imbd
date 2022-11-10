import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Movielist from '../Movielist';

const Home = () => {
    const [popularmovie, setpopularmovie] = useState([]);
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=f4753a6ab98181b1eb496c0b943531ff&language=en-US")
            .then(response => response.json())
            .then(data => setpopularmovie(data.results))
    }, [])
    return (
        <>
            <div className='carousal'>
                <Carousel
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                    showThumbs={false}
                    autoPlay={true}
                    className='mb-2'
                >
                    {
                        popularmovie.map((movie) => (
                            <Link to={`/movie/${movie.id}`} key={movie.id} >
                                <div className='img_position'>
                                    <img className='img' alt='carasol' src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                                </div>
                                <div className='overlay'>
                                    <div className='title'>{movie ? movie.original_title : ""}</div>
                                    <div className='h4'>
                                        {movie ? movie.release_date : ""}
                                        <span className='px-5'>{movie ? movie.vote_average : ""}
                                            <i className="fa fa-star"></i> </span>
                                    </div>
                                    <div className='overview'>{movie ? movie.overview : ""}</div>
                                </div>
                            </Link>
                        ))
                    }
                </Carousel>
                <Movielist />
            </div>
        </>
    )
}
export default Home;


//f4753a6ab98181b1eb496c0b943531ff
//{`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`}