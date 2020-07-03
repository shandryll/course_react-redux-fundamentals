import React, {useState} from "react";

import './Mega.css'

export default (props) => {
  function generateNumberOff(min, max, array) {
    const number = []
    const randomNumber = parseInt(Math.random() * ((max + 1) - min) + min)
    return array.includes(randomNumber) ? generateNumberOff(min, max, array) : randomNumber
  };

  function generateNumbers(quantity) {
    const numbers = Array(quantity)
      .fill(0)
      .reduce((nums) => {
        const newNumber = generateNumberOff(1, 60, nums)
        return [...nums, newNumber];
      }, [])
      .sort((num1, num2) => num1 - num2)
    return numbers
  };

  const [quantity, setQuantity] = useState(props.quantity || 6)
  const initialNumbers = Array(quantity).fill('-');
  const [numbers, setNumbers] = useState(initialNumbers);

  return (
    <div className="Mega">
      <h2>Mega Sena</h2>
      <h3>{numbers.join(' | ')}</h3>
      <div>
        <label htmlFor="NumberQuantity">Number Quantity:</label>
        <input type="number" value={quantity} onChange={event=> setQuantity(+event.target.value)} min='6' max='12'/>
      </div>
      <button onClick={_ => setNumbers(generateNumbers(quantity))}>Generate Numbers</button>
    </div>
  )
};