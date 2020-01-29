import React, {useState, useEffect} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

function UpdateForm()
{
    const [movieInfo, setMovieInfo] = useState({
        id: 0,
        title: '',
        director: '',
        metascore: 0,
       stars: []
    });

    const {id} = useParams();

    const history = useHistory();

    useEffect(() =>
    {
        axios.get(`http://localhost:5000/api/movies/${id}`)
        .then(response =>
        {
            setMovieInfo({
                    id: response.data.id,
                    title: response.data.title, 
                    director: response.data.director, 
                    metascore: response.data.metascore, 
                    stars: response.data.stars});
        }) 
        .catch(error => console.log(error))
    },[id])

    const handleChange = e =>
    {
        if(e.target.name === 'metascore')
        {
            setMovieInfo({...movieInfo, metascore: parseInt(e.target.value)});
        }
        else
        {
            setMovieInfo({...movieInfo, [e.target.name]: e.target.value});
        }
    }

    const updateMovie = e =>
    {
        e.preventDefault();
        axios.put(`http://localhost:5000/api/movies/${id}`, movieInfo)
        .then(response =>
        {
            history.push('/')
        })
        .catch(error => console.log(error))
    }

    return(
        <div className='update-form'>
            <h2>Update Movie</h2>

            <form onSubmit={updateMovie}>
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
                    value={movieInfo.stars}/>

                <button>Update</button>
            </form>
        </div>
    );
}

export default UpdateForm;