import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "./Pages/Card";
const Movielist = () => {
    const [moviedata, updatemoviedata] = useState([]);
    let { type } = useParams();

    useEffect(() => {
        getdata()
    }, [type])

    const getdata = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=f4753a6ab98181b1eb496c0b943531ff&language=en-US`)
            .then(res => res.json())
            .then(Apidata => updatemoviedata(Apidata.results))
    }

    return (
        <>
            <div className="container-fluid ">
                <div className="row ">
                    <div className="col-2 mt-4 text-center" >
                        <h4 className="text-white">{(type ? type : "popular").toUpperCase()}</h4>
                    </div>
                </div>
            </div>
            <div className="container mt-4 " >
                <div className="row">
                    {
                        moviedata.map((movie) => (
                            <Card movie={movie} key={movie.id} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}
export default Movielist;