import React from 'react';
import './App.css';
import {Task1} from './Components/Task1';
import {Task2_1,Task2_2} from './Components/Task2';


function App() {
    return (


        <div className="app-container">
            {/*Дз1*/}
            <Task1></Task1>
            {/*Дз2*/}
            <Task2_1></Task2_1>
            <Task2_2></Task2_2>
        </div>
    )
        ;
}

export default App;
