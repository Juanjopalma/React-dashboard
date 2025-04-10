import React from 'react'
import { Link } from 'react-router-dom';
import logo from '@/assets/images/logo.png';
import { MdMenuOpen, MdOutlineLightMode, MdOutlineMailOutline } from 'react-icons/md';
import SearchBox from '../SearchBox/SearchBox';
import Button from '@mui/material/Button';
import { IoCartOutline } from 'react-icons/io5';
import { FaRegBell } from 'react-icons/fa';
import user from '@/assets/images/user.webp';


const Header = () => {
  return (
    <header className='d-flex align-items-center'>
        <div className="container-fluid w-100">
           <div className="row d-flex align-items-center w-100">
            {/* Logo Wrapper */}
            <div className="col-sm-2 part1">
                <Link to="/" className='d-flex align-items-center logo'>
                  <img src={logo} />
                  <span className='ms-2'>HOTASH</span>
                </Link>
            </div>

            {/* SearchBox */}
            <div className="col-sm-3 d-flex align-items-center part2 ps-4">
              <Button className='rounded-circle me-3'><MdMenuOpen /></Button>
              <SearchBox />
            </div>
            

            <div className="col-sm-7 d-flex align-items-center justify-content-end part3">
              <Button className='rounded-circle me-3'><MdOutlineLightMode /></Button>
              <Button className='rounded-circle me-3'><IoCartOutline /></Button>
              <Button className='rounded-circle me-3'><MdOutlineMailOutline /></Button>
              <Button className='rounded-circle me-3'><FaRegBell /></Button>

            <div className="myAccWrapper">
              <Button className="myAcc d-flex align-items-center">
                <div className="userImg">
                  <span className='rounded-circle'>
                    <img src={user} alt="" />
                  </span>
                </div>

                <div className="userInfo">
                  <h4>Riunku Verma</h4>
                  <p className='mb-0'>@rinkuv37</p>
                </div>
              </Button>
            </div>

            </div>
           </div>
        </div>
        
    </header>
  )
}

export default Header