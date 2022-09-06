import React from 'react';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const fruits = [
  {
    id:1 ,
    fruit:'Select one'
  },
  {
    id:2,
    fruit:'Mangoe'
  },
  {
    id:3, 
    fruit: ' Apple'
  },
  {
    id:4, 
    fruit:'Melon'
  },
  {
    id:5,
    fruit: 'Berries'
  },
]


const SelectField = () => {

  return (
    <>
    <div className='card p-5 m-5'>
    <select>
        {
          
          fruits.map(({fruit}, id)=>{
              return(
                  <option key={id}>{fruit}</option>

              )
          })
        }
        </select>

      
        
        
      
    </div>
    {/* <div class="card p-5 m-5 bg-danger">
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
    </div> */}
    </>
  )
}

export default SelectField