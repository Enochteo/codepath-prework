import './App.css'
import { useState } from 'react'
import { useRoutes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import AddCreator from './pages/AddCreator'
import EditCreator from './pages/EditCreator'
import ViewCreators from './pages/ViewCreators'
import ShowCreator from './pages/ShowCreator'

function App() {
    // set up routes
    let element = useRoutes([
      {
        path: '/',
        element:<ViewCreators />
      },
      {
        path: '/edit/:id', 
        element: <EditCreator />
      },
      {
        path: '/new',
        element: <AddCreator />
      }, 
      {
        path: '/creator/:id',
        element: <ShowCreator />
      }
    ]);

  return (
    <>
     <div className='App'>
      <div className='header'>
        <h1>CreatorVerse</h1>
        <nav>
          <ul>
            <li><Link to='/'><button className='headerBtn'>View Creators</button></Link></li>
            <li><Link to="/new"><button className='headerBtn'>Add new Creator</button></Link></li>
          </ul>
        </nav>
      </div>
      {element}
     </div>
    </>
  )
}

export default App
