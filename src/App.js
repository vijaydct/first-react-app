import React from 'react'
// import Messages from './components/Messages/Messages'
// npm install react-router-dom
// npm install bootstrap
// npm install react-icons 
import { BrowserRouter, Link } from 'react-router-dom'
import Tasks from './components/tasks/Tasks'
// import 'bootstrap/dist/css/bootstrap.css'

// import Home from './components/static/Home'
// import About from './components/static/About'
// import Services from './components/static/Services'
// import Contact from './components/static/Contact'
// import List from './components/users/List'
// import UserShow from './components/users/Show'

function App(){
    return(
        <div>
            <BrowserRouter>
                <div>
                    <h1>React App</h1>
                    <Link to="/">Home</Link> - 
                    <Link to="/about">About</Link> - 
                    <Link to="/services">Services</Link> -
                    <Link to="/users">Users</Link> -
                    <Link to="/contact">Contact</Link>

    {/*                 
                    <Route path="/" component={Home} exact={true} />
                    <Route path="/about" component={About} />
                    <Route path="/services" component={Services}/>
                    <Route path="/users" component={List} exact={true}/>
                    <Route path="/users/:id" component={UserShow}/>
                    <Route path="/contact" component={Contact} /> */}
                
                </div>
            </BrowserRouter>
            <Tasks/>
        </div>
    )
}

export default App