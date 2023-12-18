import React from 'react';
import CharacterList from '../Comp/CharacterList';
import '../Styles/main.css';

const Main = () => {
    return (
        <div className='main'>
            <h1 className='title'>Star Wars Characters</h1>
            <CharacterList />
        </div>
    )
}

export default Main;
