import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../../component/Hero/Hero';
import Sections from '../../component/secions/Sections';
import {FaCocktail, FaHiking, FaReadme} from 'react-icons/fa'
import {BiBusSchool} from 'react-icons/bi'
import './home.scss'
import { RoomContext } from '../../../context/RoomContext';


const Home = () => {

  let {rooms, handleId} = useContext(RoomContext);

  let service = [{title: 'Free Cocktails', icon: <FaCocktail/>},{title: 'Endless Hiking', icon: <FaHiking/>},{title: 'Free Shuttle', icon: <BiBusSchool/>},{title: 'Reading', icon: <FaReadme/>}
  ];

  let features = [rooms[3], rooms[7], rooms[11]];

  return (
    <div key='home'>
      <div className='home'>
      <Hero>
        <h1>Luxuriou Rooms</h1>
        <div></div>
        <p>Deluxe Rooms Starting At $299</p>
        <Link to='rooms'>OUR ROOMS</Link>
      </Hero>
      </div>

      <div className='home2'>
      <Sections>
        <h1>Services</h1>
        <div className='line'></div>
        <div className='item'>
          {service.map(item=><div>
            <h1>{item.title}</h1>
            {item.icon}
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis eum repellat exercitationem corporis voluptatibus voluptas tenetur architecto voluptatem vero, eius iusto vel corrupti officiis. Nihil obcaecati modi laborum voluptatibus optio.</p>
          </div>)}
        </div>

      </Sections>
      </div>

      <div className='home3'>
        <h1>Features Rooms</h1>
        <div className='line'></div>
        <Sections>
          {features.map(item=><div key={item.id}>
            <img src={item.images[0]} alt={item.name} />
            <p>$ {item.price} <span>per night</span></p>
            <h2>{item.name}</h2>
            <Link to='details' onClick={()=>handleId(item.id)}>Features</Link>
          </div>)}
        </Sections>
      </div>

    </div>
  )
}

export default Home
