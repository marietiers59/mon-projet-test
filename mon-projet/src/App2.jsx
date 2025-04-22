import './App.css'
import {useState} from 'react'

function App() {
  /*on peut écrire du code JS ici*/
 
// //  Mauvaise pratique :
//  let prenom = "Marie"
//  let nom = "TIERS"

// //  Bonne pratique :
  const [prenom, setPrenom] = useState("Marie") // "Marie" : valeur par défaut
  const [nom, setNom] = useState("TIERS") // "TIERS" : valeur par défaut
  const [age, setAge] = useState(33) // 33 : valeur par défaut

  function changePrenomNomAge() {
    setPrenom("David")
    setNom("WILS")
    setAge(38)
  }

  function augmenteAge() {
    setAge(age + 1)
  }
  function diminueAge() {
    setAge(age - 1)
  }
  

  return (
    <>
{/* on peut écrire du code qui ressemble à du HTML ici, c'est du JavaScript XML (= JSX) */}

      <h1>Bonjour, {prenom} {nom}.</h1>
      <h2>Tu as {age} ans.</h2>
      <button onClick={changePrenomNomAge}>Change le prénom, le nom et l'âge.</button>
      <button onClick={augmenteAge}>Âge ↑</button>
      <button onClick={diminueAge}>Âge ↓</button>
    </>
  )
}

export default App
