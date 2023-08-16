import React from 'react'
import './Home.css'
import styles from './Home.module.css'
import { NavLink } from 'react-router-dom'
const Home = () => {
  return (
    <>
    <div className="navigation-bar py-4 bg-primary">
          <h4 className="text-center">Welcome to Quiz Application</h4>
        </div>
    <div className='row home'>
        <div className="col-6 bg-dark">
            <div className="btn btn-light btn-lg"><NavLink className="nav-link text-dark" to="create/exam">Admin</NavLink></div>
        </div>
        <div className="col-6 bg-warning">
            <div className="btn btn-dark btn-lg">Student</div>
        </div>
    </div>
    </>
  )
}

export default Home