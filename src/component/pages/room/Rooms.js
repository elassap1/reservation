import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { RoomContext } from '../../../context/RoomContext';
import Hero from '../../component/Hero/Hero';
import Filter from './Filter';
import FilterRooms from './FilterRooms';

import './rooms.scss'

const Product = () => {

  let {rooms} = useContext(RoomContext);
  let [filter, setFilter] = useState({});

  let [inputs, setInputs] = useState({
    'BreakFast': false,
    'Guest': "1",
    'RoomPrice': "1000",
    'RoomSize': "1000",
    'Pets': false,
    'RoomType': "all"
  });

  let handleChange = (e) => {
    let name = e.target.name;
    let value = name==='BreakFast'||name==='Pets'?e.target.checked:e.target.value;
    setInputs({...inputs, [name]:value})
  }

  useEffect(()=>{
    let {BreakFast,Guest,RoomPrice,RoomSize,Pets,RoomType} = inputs;
    let room = rooms.filter(item=>{
      let {breakfast,capacity,price,pets,size,type} = item;
console.log(breakfast===BreakFast,breakfast,BreakFast)
      if(breakfast===BreakFast&&capacity>=Guest&&price<=RoomPrice
            &&size<=RoomSize&&pets===Pets&&(RoomType==='all'||type===RoomType))
            return item;
    });
    setFilter(room);
  },[inputs])

  console.log(filter);
  console.log(rooms);

  return (
    <div className='container'>
      <div className='rooms'>
      <Hero>
        <h1>OUR ROOMS</h1>
        <div></div>
        <Link to='/'>Back To Home</Link>
      </Hero>

      </div>
      <Hero>
        <h1>Search Romms</h1>
        <div></div>
      </Hero>
      <RoomContext.Provider value={{handleChange, inputs, filter}}>
        <Filter />
        <FilterRooms />
      </RoomContext.Provider>

    </div>
  )
}

export default Product
