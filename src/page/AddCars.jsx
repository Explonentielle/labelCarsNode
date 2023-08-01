import React, { useState } from 'react'
import Header from '../assets/Header'

const AddCars = () => {

  const [data, setData] = useState({
    id: '',
    name: '',
    image: '',
    price: 0,
    reservations: 0,
    options: {
      aircondition: null,
      navigation: null,
      transmission: 'manuel',
      person: 0,
    },
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    console.log({ name, value, type, checked })
    setData((state) => ({
      ...state,
      ...(name === "aircondition" || name === "navigation" || name === "transmission" || name === "person"
      ? { options: { ...state.options, [name]: value } }
      : { [name]: value }
    )
      }
    ));
  };

  const handleSubmit = (e) => {
    console.log(data)
    e.preventDefault();
  };

  return (
    <div>
      <Header />
      <form  className='form'>
        <div className='columnContainer'>

          <div className='firstColumn'>
            <label>ID: </label>
            <input type="text" name="id" value={data.id} onChange={handleChange} />


            <label name="name ">Nom:</label>
            <input type="text" name="name" value={data.name} onChange={handleChange} />


            <label>Image:</label>

            <input type="text" name="image" value={data.image} onChange={handleChange} />


            <label>Prix:</label>
            <input type="number" name="price" value={data.price} onChange={handleChange} />


            <label>Réservations:</label>
            <input type="number" name="reservations" value={data.reservations} onChange={handleChange} />
          </div>


          <div className='scndColumn' >
            <label> Nombre de personnes:</label>
            <select className='select' name="person" value={data.options.person} onChange={handleChange}>
              <option value={""}>Nombres de portes</option>
              <option value={3}>3 portes</option>
              <option value={5}>5 portes</option>
            </select>

            <label>Transmission: </label>
            <select className='select' name="transmission" value={data.options.transmission} onChange={handleChange}>
              <option value="manuel">Manuel</option>
              <option value="automatique">Automatique</option>
            </select>

            <div className='checkBoxContainer'>
              <label>Climatisation:</label>
              <input type="checkbox" name="aircondition" checked={data.options.aircondition} onChange={handleChange} />

              <label> Navigation:</label>
              <input type="checkbox" name="navigation" checked={data.options.navigation} onChange={handleChange} />
            </div>

          </div>

        </div>

        <input onClick={handleSubmit} value={"Valider"} className="submit" type="submit"/>
      </form>
    </div>
  )
}

export default AddCars