import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CharacterList = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios.get('https://swapi.dev/api/people').then((resp) => {
            const allPersons = resp.data;
            setCharacters(allPersons.results);
        });
    }, []);

    return (
        <div className='mainPage'>
            {characters.length > 0 && characters.map((char, id) => (
                <div key={id + 1}>
                    <Link to={`/about/${parseInt(id) + 1}`}>
                        <button className='character' onClick={() => { console.log(id) }}>
                            <div className='name'>
                                {char.name}
                            </div>
                            <div style={{ fontStyle: 'italic' }}>
                                Click to get more info
                            </div>
                        </button>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default CharacterList;