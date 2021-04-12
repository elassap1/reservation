import React, { useState } from 'react';
import './Navbar.scss';
import { FcAbout } from 'react-icons/fc';
import { AiOutlineBars } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {

  let [toggle, setToggle] = useState(false);

  return (
    <div className={`navbar ${toggle&&'toggle'}`}>
      <div><Link to='/'>Beach <span>Atlass</span></Link></div>
      <Link to='/'>Home</Link>
      <Link to='rooms'>Rooms</Link>
      <Link to="about" title='about us'><FcAbout style={phone} /></Link>
      <AiOutlineBars className='icon' onClick={()=>setToggle(!toggle)} />
    </div>
  )
}

export default Navbar

let phone = {color:'#74a674', fontSize:'25', cursor:'pointer'};
