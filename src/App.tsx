import {ChangeEvent, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {response} from "./Response.ts";
import Character, {CharacterProps} from "./Character.tsx";
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;

function App() {
  const [characterData, setCharacterData]= useState<CharacterProps[]>(response.results)
  const [searchName, setSearchName] = useState<string>("")


function handleChange(event:ChangeEvent<HTMLInputElement>) {
      setSearchName(event.target.value)
}


//filter den suchbegriff
const filteredChars=characterData.filter(
    (char) => char.name.toLowerCase().includes(searchName.toLowerCase())
)

  return (
      <>
        <input
                type="text"
                placeholder="Search your Character by name"
                onChange={handleChange}
        />
        {filteredChars.map((characterTemp) => (
            <Character id={characterTemp.id} name={characterTemp.name} status={characterTemp.status} species={characterTemp.species}/>))}
      </>
  )
}

export default App