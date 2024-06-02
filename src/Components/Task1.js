import React from "react";
import './Task1.css'

export function Task1() {
    return (
        <div className="task1-container">
            task1
            <h1>Великий человек: Илон Маск</h1>
            <div className="info-section">
                <h2>ФИО</h2>
                <p>И́лон Рив Маск </p>
            </div>
            <div className="info-section">
                <h2>Дата рождения</h2>
                <p>28 июня 1971 г</p>
            </div>
            <div className="info-section">
                <h2>Портрет</h2>
                <img src="/img/1.jpg" alt=""/>
            </div>
            <div className="info-section">
                <h2>Краткая биография</h2>
                <p>
                И́лон Рив Маск — американский предприниматель, инженер и миллиардер. Основатель, генеральный директор и главный инженер компании SpaceX; инвестор, генеральный директор и архитектор продукта компании Tesla; основатель The Boring Company; соучредитель Neuralink и OpenAI; владелец Twitter (X).
                </p>
            </div>
        </div>
    );
}