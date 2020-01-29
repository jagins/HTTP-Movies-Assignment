import React, {useState, useEffect} from 'react';
// import {useParams} from 'react-router-dom';
import axios from 'axios';

function UpdateForm()
{
    const [movieInfo, setMovieInfo] = useState({
        title: '',
        director: '',
        metascore: '',
        actors: []
    });

    // const {id} = useParams();

    useEffect(() =>
    {

    }, [])

    const handleChange = () =>
    {

    }

    const updateMovie = () =>
    {

    }
    return(
        <div className='update-form'>
            <h2>Update Movie</h2>

            <form>
                <input
                    type='text'
                    name='title'
                    onChange={handleChange}
                    placeholder='Movie Title'
                    value={movieInfo.title}/>
                <input
                    type='text'
                    name='director'
                    onChange={handleChange}
                    placeholder='Director'
                    value={movieInfo.director}/>
                <input
                    type='number'
                    name='metascore'
                    onChange={handleChange}
                    placeholder='Metascore'
                    value={movieInfo.metascore}/>
                <input
                    type='text'
                    name='actors'
                    onChange={handleChange}
                    placeholder='Actors'
                    value={movieInfo.actors}/>

                <button onClick={updateMovie}>Update</button>
            </form>
        </div>
    );
}

export default UpdateForm;