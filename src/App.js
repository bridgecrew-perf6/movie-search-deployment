import React from 'react';
import { useEffect, useState } from 'react';
import Movie from './Movie';


const API_URL =  'https://omdbapi.com?apikey=6b0567e2'

function App() {

    const [title, setTitle] = useState('');

    const [movies, setMovies] = useState([]);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search)
    }

    useEffect(() => {
        searchMovies("Batman")
    }, [])


    return ( 
        <div className="w-full min-h-screen flex flex-col justify-items-center items-center bg-neutral-800">

            <h1 className='text-orange-400 font-bold text-5xl m-4 py-9'>Search Movies</h1>

            <div className="flex shadow-inner m-4 w-3/5 shadow-neutral-900/50 rounded">
                <input 
                className='bg-inherit outline-none input-group relative flex items-center justify-items-center w-full  h-full mb-4 transition ease-in-out m-0 text-gray-300 focus:outline-none p-1 px-4'
                type="text" 
                placeholder='Search for movies'
                value={title}
                onChange={(e) =>setTitle(e.target.value)}
                />
                <button className="btn h-full inline-block px-6 py-2.5 bg-orange-400 text-white font-medium text-xs leading-tight uppercase  shadow-md hover:bg-orange-700 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out flex items-center border-2 border-solid border-orange-400 rounded transition ease-in-out m-0 focus:text-gray-700 focus:border-orange-400 focus:outline-none" 
                type="button" onClick={() => searchMovies(title)}>
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                  </svg>
                </button>
            </div>

            {
              movies?.length > 0 
              ? (
                  <div className="w-full flex flex-wrap justify-items-center items-center">
                      {
                          movies.map((movie, index) => {
                              return(
                                  <Movie movie={movie} key={index}></Movie>
                              )
                          })
                      }
                  </div>
              ) 
              : (
                  <div className="min-h-full bg-inherit m-4">
                      <h1 className='mt-40 text-white text-xl'>No movies found</h1>
                  </div>
              )
            }
        </div>
     );
}

export default App;
