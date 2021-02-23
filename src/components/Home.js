import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Home.css'

class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <div className="get-started">
                    <div id="content">
                        <h1>LitNIS - вебсайт, где можно читать</h1>
                        <p id="big-p">Все книги на лето находятся тут. Прочтите их и подготовтесь к уроку</p>
                        <div className="options">
                            <div>
                                <h3>Удобность</h3>
                                <p>Все книги на лето собраны на этом вебсайте</p> 
                            </div>
                            <div>
                                <h3>Доступность</h3>
                                <p>Вы можете читать книги где угодно и когда угодно</p>
                            </div>
                            <div>
                                <h3>Обратная связь</h3>
                                <p>Если вас не устраивает что то, то вы можете обратится к автору</p>
                            </div>  
                        </div>
                        <Link to='/grades'>
                            <button>Читать</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;