import React, { useEffect, useState } from 'react'
import Header from '../assets/Header'
import { useLocation, useNavigate } from 'react-router-dom';

const AddCars = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { state } = location


  const [data, setData] = useState({
    id: '',
    name: '',
    image: '',
    price: null,
    reservations: null,
    options: {
      aircondition: false,
      navigation: false,
      transmission:null,
      person: null,
    },
  });
  

  const addCar = async (values) => {
    try {
      const response = await fetch(`http://localhost:5500/cars`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values), 
      });
      if (!response) {
        throw new Error('L ajout a échoué');
      }
      console.log('Voiture ajouté avec succès');
    } catch (error) {
      console.error('Erreur lors de l ajout de la voiture:', error);
    }
  };


  const modifCar = async (values) => {
    try {
      const response = await fetch(`http://localhost:5500/cars`, {
        method: 'put',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values), 
      });
      if (!response) {
        throw new Error('L ajout a échoué');
      }
      console.log('Voiture ajouté avec succès');
    } catch (error) {
      console.error('Erreur lors de l ajout de la voiture:', error);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const values = { ...data };
    formData.forEach((value, name) => {
      if (name === "aircondition" || name === "navigation" || name === "transmission" || name === "person") {
        values.options[name] = e.target[name].type === "checkbox" ? e.target[name].checked : value;
      } else {
        values[name] = value;
      }
    });
    if (state) {
      modifCar(values)
    }
    else {
      addCar(values)
    }
    navigate("/")
  };



  useEffect(() => {
    if(state) {
      setData(state)
    }
  }, [])
  

  return (
    <div>
      <Header />
      <form onSubmit={handleFormSubmit} className='form'>
        <div className='columnContainer'>

          <div className='firstColumn'>
            <label>ID: </label>
            <input type="text" name="id" defaultValue={data.id}  />


            <label name="name ">Nom:</label>
            <input type="text" name="name" defaultValue={data.name} />


            <label>Image:</label>

            <input type="text" name="image" defaultValue={data.image}    />


            <label>Prix:</label>
            <input type="number" name="price" defaultValue={data.price} />


            <label>Réservations:</label>
            <input type="number" name="reservations" defaultValue={data.reservations}    />
          </div>


          <div className='scndColumn' >
            <label> Nombre de personnes:</label>
            <select className='select' name="person" defaultValue={state ? state.options.person : data.options.person}  >
              <option value={0}>Nombres de portes</option>
              <option value={3}>3 portes</option>
              <option value={5}>5 portes</option>
            </select>

            <label>Transmission: </label>
            <select className='select' name="transmission" defaultValue={state ? state.options.transmission : data.options.transmission} >
              <option value="manuel">Manuel</option>
              <option value="automatique">Automatique</option>
            </select>

            <div className='checkBoxContainer'>
              <label>Climatisation:</label>
              <input type="checkbox" name="aircondition" defaultChecked={data.options.aircondition}   />

              <label> Navigation:</label>
              <input type="checkbox" name="navigation" defaultChecked={data.options.navigation} />
            </div>
          </div>
        </div>

        <input value={"Valider"} className="submit" type="submit"/>
      </form>
    </div>
  )
}

export default AddCars