import { Link } from "react-router-dom";

const Card = ({ movie }) => {

    return (
        <>
            <div className="col-lg-2 mb-3 ">
                <Link to={`/movie/${movie.id}`} className="text-decoration-none">
                    <div className="card ">
                        <img className="img-fluid" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="img" />

                    </div>
                </Link>
            </div>
        </>
    )
}
export default Card;
// when i use coloumn so every time coloumn are wrapped in row and row wrapped in container