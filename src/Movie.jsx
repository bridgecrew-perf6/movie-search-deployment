import React from "react";

function Movie({movie}) {
    return ( 
        <div className=" flex flex-col drop-shadow-xl m-4 px-10 text-gray-300 max-w-sm ">
            <div>
                <p className="text-xl p-4 text-center">{movie.Year}</p>
            </div>

            <div>
                <img className="w-full"
                src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} 
                alt={movie.Title} 
                />
            </div>

            <div className="bg-neutral-900/20" flex>
                <span className="text-xl p-4 text-center">{movie.Type}</span>
                <h3 className="text-xl p-3 ">{movie.Title}</h3>
            </div>
        </div>
     );
}

export default Movie;