import React, {useState, useEffect} from 'react';
import './Task2.css';

export function Task2_1() {
    return (
        <div className="task2_1-container">
            task2_1
            <h1>Футбольный клуб: Arsenal</h1>

            <div className="club-info">
                <h2>Информация о клубе</h2>
                <p><strong>Название:</strong> Arsenal</p>
                <p><strong>Город:</strong> Лондон</p>
                <p><strong>Дата основания:</strong>октябрь 1886</p>
                <p><strong>Герб:</strong></p>
                <img src="/img/2.jpg" alt=""/>
            </div>

            <div className="achievements">
                <h2>Достижения клуба</h2>
                <ul>
                    <li>Клуб 13 раз становился чемпионом Англии</li>
                    <li> 14 раз выигрывал Кубок Англии</li>
                    <li>17 Суперкубков Англии</li>
                    <li>1 Трофей столетия Футбольной лиги</li>
                    <li> 1 Кубок обладателей кубков Европы и 1 Кубок ярмарок</li>
                </ul>
            </div>

            <div className="current-squad">
                <h2>Текущий состав команды</h2>
                <ul>
                    <li>Аарон Рэмсдейл</li>
                    <li> Давид Райя</li>
                    <li>Александр Зинченко</li>
                    <li> Бен Уайт</li>
                    <li> Вильям Салиба</li>
                </ul>
            </div>
        </div>
    );
}

const styles = ['style1', 'style2', 'style3'];

export function Task2_2() {
    const [style, setStyle] = useState('');

    useEffect(() => {
        const randomStyle = styles[Math.floor(Math.random() * styles.length)];
        setStyle(randomStyle);
    }, []);

    return (

        <div className={`task2_2-container ${style}`}>
            task2_2
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
