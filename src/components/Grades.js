import React from 'react'
import '../styles/Grades.css'
import list from '../data/List'
import { Link, useRouteMatch } from 'react-router-dom';

function Grades() {
    let match = useRouteMatch();
    return (
        <div className="grades">
            <div id="big-text-container">
                <h1 className="grades-h1">Все книги находятся тут. Просто выберите класс.</h1>
            </div>
            <div className="grades-divs-container">
                <div className="links-container">
                    <Link to={`${match.url}/7q`} className="grades-link">7 QAZAQ</Link>
                    <Link to={`${match.url}/8q`} className="grades-link">8 QAZAQ</Link>
                    <Link to={`${match.url}/9q`} className="grades-link">9 QAZAQ</Link>
                </div>
                <div className="links-container">
                    <Link to={`${match.url}/7r`} className="grades-link">7 RUSSIAN</Link>
                    <Link to={`${match.url}/8r`} className="grades-link">8 RUSSIAN</Link>
                    <Link to={`${match.url}/9r`} className="grades-link">9 RUSSIAN</Link>
                </div>
            </div>
        </div>
    );
}

export default Grades;