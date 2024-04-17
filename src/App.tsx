import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {response} from "./Response.ts";
import Character, {CharacterProps} from "./Character.tsx";

function App() {
  const [characterData, setCharacterData]= useState<CharacterProps[]>(response.results)




  return (
    <>
      {characterData.map((characterTemp) => (
          <Character id={characterTemp.id} name={characterTemp.name} status={characterTemp.status} species={characterTemp.species}/>))}
    </>
  )
}

export default App
