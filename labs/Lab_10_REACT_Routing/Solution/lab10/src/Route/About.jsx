import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import getUrl from '../urls';
import '../Styles/about.css';
import { Link } from 'react-router-dom';

const About = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}/`).then((resp) => {
            const charact = resp.data;
            setCharacter(charact);
        });
    }, [id]);

    return (
        <div className="content">
            <h1>Полная информация о персонаже: {character.name}</h1>
            <div className='image'>
                <img src={getUrl(id)} alt={`Персонаж ${id}`} />
                <ul className='description'>
                    <li>Имя: {character.name}</li>
                    <li>Рост: {character.height}</li>
                    <li>Вес: {character.mass}</li>
                    <li>Цвет волос: {character.hair_color}</li>
                    <li>Цвет кожи: {character.skin_color}</li>
                    <li>Цвет глаз: {character.eye_color}</li>
                    <li>Год рождения: {character.birth_year}</li>
                    <li>Пол: {character.gender}</li>
                </ul>
            </div>
            <Link to='/'>
                <button className='backToMenu'>Назад</button>
            </Link>
        </div>
    );
};

export default About;