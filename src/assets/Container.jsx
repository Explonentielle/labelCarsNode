import React, { useEffect, useState } from 'react'
import Car from './Car';
import { useNavigate } from 'react-router-dom';


const Container = () => {
  const [carsList, setCarsList] = useState([]);
  const navigate = useNavigate()

  const getCars = async () => {
    const response = await fetch('http://localhost:5500/cars')
      .then(res => res.json());
    setCarsList(response);
  }


  useEffect(() => {
    getCars();
  }, []);


  const deleteCar = async (id, index) => {
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

  const modifCar = (car) => {
    navigate("/add", {state: car})
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
          modif={() => modifCar(car)}
        />
      ))}
    </div>
  )
}

export default Container
