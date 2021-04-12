import React, { useState } from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import data from './data/data'
import Home from './pages/home/Home'
import Rooms from './pages/room/Rooms'
import './Index.scss';
import Error from './pages/Error/Error';
import {RoomContext} from '../context/RoomContext';
import Details from './pages/details/Details';
import About from './pages/about/About';

const Index = () => {

  let [details, setDetails] = useState({});

  let rooms = data.map(item=>{
    let id = item.sys.id;
    let images = item.fields.images.map(img=>img.fields.file.url)
    return {...item.fields, images, id};
  })

  const handleId = (di) => {
    let item = rooms.filter(item=>item.id===di&&item)
    localStorage.setItem('details',JSON.stringify(item[0]));
    setDetails(JSON.parse(localStorage.getItem('details')));
  }

  return (
    <div className='container'>
      <RoomContext.Provider value={{rooms, handleId, details}}>
        <Router>
              <Navbar />
          <Switch>

            <Route exact path='/'>
              <Home /></Route >

            {/* <Route path='/details'>
              <Details /></Route> */}

            <Route path='/rooms'>
              <Rooms /></Route>

            <Route path='/details'>
              <Details /></Route>
  
            <Route path='/about'>
              <About /></Route>

            <Route component={Error} />

          </Switch>

        </Router>
      </RoomContext.Provider>
    </div>
  )
}

export default Index
