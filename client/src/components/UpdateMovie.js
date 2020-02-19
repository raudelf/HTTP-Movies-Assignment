import React, { useState, useEffect } from 'react';
import axios from 'axios';

const initialItem = {
    title: '',
    director: '',
    metascore: '',
    stars: []
}

const UpdateMovie = props => {
    const [update, setUpdate] = useState(initialItem);

    useEffect(() => {
        const selectedMovie = props.movies.find(movie => {
            return `${movie.id}` === props.match.params.id
        });
        console.log(selectedMovie);
        if (selectedMovie) {
            setUpdate(selectedMovie)
        }
    }, [props.movies, props.match.params.id]);

    const handleChanges = e => {
        setUpdate({
            ...update, [e.target.name]: e.target.value
        })
    }

    return (
        <div className='formContainer'>
            <form className='formBox'>
                <input 
                type='text'
                name='title'
                placeholder='Movie Title'
                onChange={handleChanges}
                />
                <input 
                type='text'
                name='director'
                placeholder='Director'
                onChange={handleChanges}
                />
                <input 
                type='text'
                name='metascore'
                placeholder='MetaScore'
                onChange={handleChanges}
                />
                <input 
                type='text'
                name='stars'
                placeholder='Actors'
                onChange={handleChanges}
                />            
            </form>
        </div>
    )
}

export default UpdateMovie;