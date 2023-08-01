import { Button } from 'antd';
import React from 'react'

const Car = ({ image, name, index, _id, aircondition, transmission, person, navigation, action }) => {

  return (
    <div className='carContainer'>
      <img src={image} alt="" />
      <p>{name}</p>
      <div className='options'>
        {navigation ? (
          <img src="/icons/compass.png" alt="" />
        ) : null}
        {person > 3 ? (
          <img src="/icons/doors.png" alt="" />
        ) : null}
        {transmission === "automatique" ? (
          <img src="/icons/engine.png" alt="" />
        ) : null}
        {aircondition ? (
          <img src="/icons/snow.png" alt="" />
        ) : null}
      </div>
      <div className='buttonContainer'>
      <Button className='button'  style={{ backgroundColor: '#60a5fa', borderColor: '#1890ff', margin: '1rem' }}>
        Modifier
      </Button>

      <Button onClick={() => action(_id, index)}  className='button'  style={{ backgroundColor: '#f87171', borderColor: '#ff4d4f', margin: '1rem' }}>
        Supprimer
      </Button>
      </div>
    </div>
  )
}

export default Car
