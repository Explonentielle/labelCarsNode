import React, { useEffect, useState } from 'react'
import Car from './Car';

const Container = () => {
  const [carsList, setCarsList] = useState([]);

  const getCars = async () => {
    const response = await fetch('http://localhost:5500/cars')
      .then(res => res.json());
    setCarsList(response);
  }

  useEffect(() => {
    getCars();
  }, []);

  const deleteCar = async (id, index) => {
    console.log(id)
    try {
      const response = await fetch(`http://localhost:5500/cars/${id}`, {
        method: 'DELETE',
      });
      if (!response) {
        throw new Error('La suppression a échoué');
      }
      console.log('Voiture supprimée avec succès');
      const copy = [...carsList]
      copy.splice(index, 1);
      setCarsList(copy);

    } catch (error) {
      console.error('Erreur lors de la suppression de la voiture:', error);
    }
  };



  return (
    <div className='carsList'>
      {carsList.map((car, index) => (
        <Car
          key={car._id}
          index={index}
          _id={car._id}
          id={car.id}
          name={car.name}
          image={car.image}
          aircondition={car.options.aircondition}
          navigation={car.options.navigation}
          transmission={car.options.transmission}
          person={car.options.person}
          action={deleteCar}
        />
      ))}
    </div>
  )
}

export default Container
