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

  const getRandomSpell() {
    const randomIndex = Math.floor(Math.random() * spells.length);
    setCurrentSpell(spells[randomIndex]);
  };

  return (
    <div></div>
  )
}

export default App