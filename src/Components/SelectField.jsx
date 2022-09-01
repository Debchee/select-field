import React from 'react';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const SelectField = () => {
  const [fruitState, setFruitState]= useState("");
  return (
    <>
    <div class="card p-5 m-5 bg-danger">
        <div class="card-body">
    <div className='container p-5 m-5'>
      <select className='form-select form-select-lg mb-3' value={fruitState} onChange={(e)=>{
          const selectedFruit= e.target.value;
          setFruitState(selectedFruit);
      }}>

        <option value="Select Fruit">Select Fruit</option>
        <option value="Mangoes">Mangoes</option>
        <option value="Banana">Banana</option>
        <option value="Pear">Pear</option>
        <option value="Watermelon">Watermelon</option>
        <option value="Pineapple">Pineapple</option>

      </select>

      <div class="card mt-5 m-5">
        <div class="card-body">
            {fruitState}
        </div>
      </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default SelectField