import React from 'react'
import { useState, useEffect } from 'react'

const App = () => {
  const [ spells, setSpells ] = useState([]);
  const [ currentSpell, setCurrentSpell ] = useState(null);

  useEffect( () => {
    fetch('https://hp-api.onrender.com/api/spells')
    .then ((res) => res.json())
    .then ((data) => setSpells(data))
    .catch ((err) => console.log("Failed to fetch spells", err));
  }, [])

  const getRandomSpell = () => {
    const randomIndex = Math.floor(Math.random() * spells.length);
    setCurrentSpell(spells[randomIndex]);
  };

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className=" w-[500px] h-[500px] bg-yellow-300">
        <div>
          <h1 className="font-bold ">Welcome to HOGWARTS</h1>
        </div>
        <button 
        onClick={getRandomSpell}
        className="bg-blue-500 text-white font-bold px-3 py-1 cursor-pointer shadow-lg rounded">Spell</button>
        {currentSpell &&  (
          <div className="">
            <h1 className="font-bold">{currentSpell.name}</h1>
            <p>{currentSpell.description}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App