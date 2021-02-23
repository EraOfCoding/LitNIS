import { React, useState } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import Grades from './components/Grades'
import BooksList from './components/BooksList'

// style
import {ThemeProvider} from 'styled-components'
import {lightTheme, darkTheme} from './styles/theme'
import {GlobalStyles} from './styles/global'

function App() {
  const [theme, setTheme] = useState('dark')
  const toogleTheme = () => {
    if(theme === 'light') {
      setTheme('dark')
    }
    else {
      setTheme('light')
    }
  }
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <div>
        <GlobalStyles/>
        <Router>
          <Navbar theme={theme} exact toogleTheme={toogleTheme}/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route exact path="/grades" component={Grades}/>
            {/*grade's children */}
            {/*Qazaq */}
            <Route exact path="/grades/7q" component={BooksList}/>
            <Route exact path="/grades/8q" component={BooksList}/>
            <Route exact path="/grades/9q" component={BooksList}/>
            {/*Russian */}
            <Route exact path="/grades/7r" component={BooksList}/>
            <Route exact path="/grades/8r" component={BooksList}/>
            <Route exact path="/grades/9r" component={BooksList}/>
          </Switch>
          <Footer/>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;