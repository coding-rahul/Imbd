
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
    const [detail, updatedetail] = useState([]);
    let { id } = useParams();

    useEffect(() => {
        getdata()
    }, [])

    let getdata = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=f4753a6ab98181b1eb496c0b943531ff&language=en-US`)
            .then(res => res.json())
            .then(iddetails => updatedetail(iddetails));
    }
    // console.log(detail)
    return (
        <>
            <div className="container ">
                <div className="row ">
                    <div className="col-lg-12 mt-4 position-relative ">
                        <img className="img-fluid post " src={`https://image.tmdb.org/t/p/original${detail.backdrop_path}`} alt="details" />

                    </div>
                </div>
                <div className="col-lg-2 overlap position-absolute bottom-0  "><img className="img-fluid h-75 " src={`https://image.tmdb.org/t/p/original${detail.poster_path}`} alt="poster" /></div>
                <div className="col-lg-7 position-absolute bottom-0 detail text-white ml-5">
                    <div className="fs-1 fw-bolder "> {detail.original_title} </div>
                    <div>{detail.vote_average} <i className="fa fa-star"></i> <span className="mx-3">({detail.vote_count}) votes</span> </div>
                    <div> {detail.runtime} mins </div>
                    <div className="mb-5 pb-2">Release date : {detail.release_date} </div>
                    <h5>Synopsis </h5>
                    <p> {detail.overview} </p>
                </div>
                <div className="row mt-5 pt-5 text-center mb-5">
                    <div className="col-lg-4 mt-5 text-white pt-5"><h3>Useful Link</h3></div>
                    <div className="col-lg-4 mt-5 pt-5">
                        <a className=" text-decoration-none badge rounded-pill bg-info text-dark px-5 py-2" href={detail.homepage} target="blank"> Homepage <i className="fa fa-share"></i></a>
                    </div>
                    <div className="col-lg-4 mt-5 pt-5">
                        <a className=" text-decoration-none badge rounded-pill bg-warning text-dark px-5 py-2" href={"https://www.imdb.com"} target="blank" > IMDb <i className="fa fa-share"></i></a>
                    </div>
                </div>

            </div>
        </>
    )
}
export default MovieDetail;