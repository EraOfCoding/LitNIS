import { render } from '@testing-library/react'
import React from 'react'
import {useRouteMatch} from 'react-router-dom'
import '../styles/BooksList.css'

//data
import list from '../data/List'

function BooksList() {
    let match = useRouteMatch().url;
    var i;
    let data_q = [];
    let data_r = [];
    const cards_q = [];
    const cards_r = [];
    console.log(match);
    if(match === '/grades/7q') {
        data_q = list.q7q;
        data_r = list.q7r;
    }
    else if(match === '/grades/7r') {
        data_r = list.r7r;
    }
    else if(match === '/grades/8q') {
        data_q = list.q8q;
        data_r = list.q8r;
    }
    else if(match === '/grades/8r') {
        data_r = list.r8r;
    }
    else if(match === '/grades/9q') {
        data_q = list.q9q;
        data_r = list.q9r;
    }
    else if(match === '/grades/9r') {
        data_r = list.r9r;
    }
    if(data_q.length > 0) {
        for(i = 0; i < data_q.length; i++) {
            const url = data_q[i].url // never change const to something else. 
            cards_q.push(<div className="bookslist-link-container" key={i}><a className="bookslist-link" onClick={() => window.open(url, '_blank')} >{data_q[i].name}</a></div>);
        }
    }
    for(i = 0; i < data_r.length; i++) {
        const url = data_r[i].url // never change const to something else.
        cards_r.push(<div className="bookslist-link-container" key={i}><a className="bookslist-link" onClick={() => window.open(url, '_blank')} >{data_r[i].name}</a></div>);
    }
    return(
        <div>
            <h1 className="bookslist-h1">Книги</h1>
            <div className= {cards_q.length > 0 === true ? "books_list_q" : "books_list_r"}>
                <div className="bookslist-container">
                    <div>
                        {cards_q}
                    </div>
                </div>
                <div className="bookslist-container">
                    <div>
                        {cards_r}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BooksList