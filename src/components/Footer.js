import React from 'react'
import '../styles/Footer.css'
import githublogo from '../img/github-logo.png'

class Footer extends React.Component {
    render() { 
        return (
            <div className="footer">
                <div className="contact">
                    <h1>Litnis</h1>
                    <img onClick={() => window.open('https://github.com/EraOfCoding?tab=repositories', '_blank')} 
                    src={githublogo}/>
                </div>
                <div id="footer-author">
                    <h5>Made with ❤️ by <a id="footer-a" onClick={() => window.open('https://github.com/EraOfCoding', '_blank')}>Yerassyl</a> </h5>
                </div>
            </div>
        );
    }

}
 
export default Footer;