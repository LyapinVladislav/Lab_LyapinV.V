import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Route/Main'
import About from './Route/About'
import { useState } from 'react';

function App() {

    const [todoData, setData] = useState([
        {
            date: new Date(2023, 11, 5),
            tasks: ['Группа Аккордеон', 'Курс: JavaScript Advanced', 'Angular Workshop'],
            desc: ['Мастер-класс по аккордеону', 'Продвинутый курс по JavaScript', 'Практический семинар по Angular'],
            time: ['14:00-16:30', '10:00-12:30', '13:00-15:00'],
        },
        {
            date: new Date(2023, 11, 29),
            tasks: ['Группа Фотография', 'Курс: Frontend Development'],
            desc: ['Фотографический кружок', 'Курс по фронтенд-разработке'],
            time: ['15:00-17:30', '12:00-14:30'],
        },
        {
            date: new Date(2023, 11, 13),
            tasks: ['Группа Украшения', 'Курс: UI/UX Design Fundamentals'],
            desc: ['Мастер-класс по изготовлению украшений', 'Основы дизайна UI/UX'],
            time: ['11:00-13:30', '9:30-12:00'],
        },
        {
            date: new Date(2023, 11, 18),
            tasks: ['Группа Рисование', 'Курс: Graphic Design Essentials'],
            desc: ['Практические занятия по рисованию', 'Основы графического дизайна'],
            time: ['16:00-18:30', '14:00-16:30'],
        },
        {
            date: new Date(2023, 10, 15),
            tasks: ['Группа Вокал', 'Курс: Music Production Basics'],
            desc: ['Занятия по вокалу', 'Основы музыкальной продукции'],
            time: ['17:00-19:30', '15:30-18:00'],
        },
        {
            date: new Date(2023, 10, 11),
            tasks: ['Группа Театр', 'Курс: Acting Techniques'],
            desc: ['Театральные занятия', 'Техники актерского мастерства'],
            time: ['18:00-20:30', '16:30-19:00'],
        },
    ])

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main todoData={todoData} />} />
                <Route path='/about/:day/:year/:month' element={<About todoData={todoData} setData={setData} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;