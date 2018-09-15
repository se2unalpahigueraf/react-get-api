//rfce
import React from 'react'
import { Link } from '../../node_modules/react-router-dom';

const Header = () => {
  return (
    <header className="col-6 mr-auto ml-auto ">
        <Link to={'/'}>
            <h1 className="text-center"> Blog</h1>
        </Link>
    </header>
  )
}

export default Header
