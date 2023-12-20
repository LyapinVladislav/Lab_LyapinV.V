import React from 'react';
import Calendar from '../Comp/Calendar'


const Main = ({ todoData }) => {
    return (
        <>
            <Calendar todoData={todoData} />
        </>
    )
}

export default Main;