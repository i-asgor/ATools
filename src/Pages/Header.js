import React from 'react';
import Button from 'react-bootstrap/Button';

function Header() {
  return (
    <div className="container">
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand text-dark" href="#" rel=''>ATools</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item me-2">
                        <Button style={{backgroundColor: '#023047'}} className='px-5 py-1 border-0 rounded-2'>Start Free Trial</Button>
                    </li>
                    <li className="nav-item">
                        <Button style={{backgroundColor:'#FFA500'}} className='px-5 py-1 border-0 rounded-2'>Login</Button>{' '}
                    </li>
                </ul>
                </div>
            </div>
            </nav>
    </div>
  );
}

export default Header;