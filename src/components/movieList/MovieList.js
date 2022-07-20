import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Cards from '../card/Card';

const MovieList = () => {
    const [movieList, setMovieList] = useState([]);
    const { type } = useParams();

    console.log(type);

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        getData();
    }, [type]);

    const getData = () => {
        fetch(
            `https://api.themoviedb.org/3/movie/${
                type ? type : 'popular'
            }?api_key=a3d01835cff578b7f57db983f090adb3&language=en-US`
        )
            .then((res) => res.json())
            .then((data) => setMovieList(data.results));
    };

    return (
        <div className='movie__list'>
            <h2 className='list__title'>
                {(type ? type : 'POPULAR').toUpperCase()}
            </h2>

            <div className='list__cards'>
                {movieList.map((movie, idx) => (
                    <>
                        <div key={idx}>
                            <Cards movie={movie} />
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
};

export default MovieList;
