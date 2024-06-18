import './App.css';
import StudentForm from '../StudentForm/StudentForm.jsx';
import StudentList from '../StudentList/StudentList.jsx';
import Nav from '../Nav/Nav.jsx'
import About from '../About/about.jsx';


import { HashRouter as Router, Route } from 'react-router-dom';


function App() {
    return (
        <Router>
            <div className="App">
                <header>
                    <h1>GitHub Student List</h1>
                    {/* Nice spot for a nav, eh? */}
                    <Nav />
                </header>
                
                    <Route path='/' exact>
                        <StudentForm />
                    </Route>
                    <Route path='/students'>
                        <StudentList  />
                    </Route>
                    <Route path='/about'>
                        <About  />
                    </Route>
                    
                
            </div>
        </Router>
    );
}


export default App;
