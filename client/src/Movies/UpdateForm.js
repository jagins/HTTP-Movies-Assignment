import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function UpdateForm()
{
    const [movieInfo, setMovieInfo] = useState({
        title: '',
        director: '',
        metascore: '',
        actors: []
    });

    const {id} = useParams();

    useEffect(() =>
    {
        axios.get(`http://localhost:5000/api/movies/${id}`)
        .then(response =>
        {
            setMovieInfo({
                    title: response.data.title, 
                    director: response.data.director, 
                    metascore: response.data.metascore, 
                    actors: response.data.stars});
        }) 
        .catch(error => console.log(error))
    },[])

    const handleChange = e =>
    {
        setMovieInfo({...movieInfo, [e.target.name]: e.target.value});
    }

    const updateMovie = () =>
    {
        axios.post()
        .then()
        .catch()

        //history push
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