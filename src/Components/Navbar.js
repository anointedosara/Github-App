import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [display, setDisplay] = useState(false)

const handleClick = () => {
  setDisplay(!display)
  }

  return (
    <div className='nav-bar'>
      <div className='nav'>
        <Link to='/'>
          <div className='brand'>
            <i className="fa-brands fa-github"></i>
            <h1>GithubFinder</h1>
          </div>
        </Link>
        <div className='drop' onClick={handleClick}>
          <i className="fa-solid fa-align-right"></i>
        </div>
        <div className={display ? 'show' : 'hide'}>
          <Link to='/'>
            <div>
              <i className="fa-solid fa-house-chimney"></i>
              <p>Home</p>
            </div>
          </Link>
          <Link to='/about'>
            <div>
              <i className="fa-solid fa-info"></i>
              <p>About</p>
            </div>
          </Link>
        </div>
        <div className='routes'>
            <Link to='/'>
              <div>
                  <i className="fa-solid fa-house-chimney"></i>
                  <p>Home</p>
              </div>
            </Link>
            <Link to='/about'>
              <div>
                  <i className="fa-solid fa-info"></i>
                  <p>About</p>
              </div>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
