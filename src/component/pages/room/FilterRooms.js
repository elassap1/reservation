import React, { useContext } from 'react'
import { RoomContext } from '../../../context/RoomContext'

const FilterRooms = () => {

  let {filter} = useContext(RoomContext);

  return (
    <div className='flex wrap filter'>
      {filter.length>0
        ?filter.map(item=><div className='img' key={item.id}>
          <img src={item.images[0]} alt="" />
        </div>)
        :<div>No Rooms Match</div>}
    </div>
  )
}

export default FilterRooms
