import React, { useState, useEffect } from 'react';

const initialItem = {
    title: '',
    director: '',
    metascore: '',
    stars: []
}

const UpdateMovie = props => {
    return (
        <div>
            <form>
                <input 
                type='text'
                />
            </form>
        </div>
    )
}

export default UpdateMovie;