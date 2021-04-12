import React, { useContext } from 'react'
import { RoomContext } from '../../../context/RoomContext';

const Filter = () => {

  let {handleChange, inputs} = useContext(RoomContext);

  return (
    <div className='input flex center'>
      <div className='flex column'>
        <label htmlFor="RoomType">Romm Type</label>
        <select value={inputs.RoomType} onChange={(e)=>handleChange(e)}  name="RoomType">
          <option value="all">all</option>
          <option value="family">family</option>
          <option value="double">double</option>
          <option value="single">single</option>
        </select>
      </div>
      <div className='flex column'>
        <label htmlFor="Guest">Guest</label>
        <input value={inputs.Guest} onChange={(e)=>handleChange(e)} name='Guest' type="number"/>
      </div>
      <div className='flex column'>
        <label htmlFor="RoomPrice">Room Price: {inputs.RoomPrice} $</label>
        <input value={inputs.RoomPrice} onChange={(e)=>handleChange(e)} type="range" min='100' max='1000' name='RoomPrice' />
      </div>
      <div className='flex column'>
        <label htmlFor="RoomSize">Room Size</label>
        <input value={inputs.RoomSize} onChange={(e)=>handleChange(e)} type="text" min='100' name='RoomSize' />
      </div>
      <div className='flex column'>
        <label htmlFor="BreakFast">BreakFast</label>
        <input value={inputs.BreakFast} onChange={(e)=>handleChange(e)} type="checkbox" name='BreakFast' />
      </div>
      <div className='flex column'>
        <label htmlFor="Pets">Pets</label>
        <input value={inputs.Pets} onChange={(e)=>handleChange(e)} type="checkbox" name='Pets' />
      </div>
    </div>
  )
}

export default Filter
