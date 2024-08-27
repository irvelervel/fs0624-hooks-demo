// REACT HOOKS
// I React Hooks sono dei "superpoteri" per i componenti a FUNZIONE
// riescono a portare nei componenti a funzione capacità di STATO e di LIFECYCLE

import { Button } from 'react-bootstrap'
import { useState } from 'react'

// i React Hooks sono completamente "opt-in"
// usateli QUANTO e QUANDO volete: sono tra l'altro GIÀ parte della libreria
// di React, non c'è niente di extra di installare!

// REGOLE DEGLI HOOKS
// 1) I React Hooks si possono utilizzare SOLAMENTE nei componenti React a funzione!
// 2) È necessario utilizzare i React Hooks IN CIMA al componente, PRIMA del
// return ma soprattutto al di fuori di LOOPS, CONDIZIONI, altre funzioni etc.

const StateExample = () => {
  // L'hook "useState" ci permetterà di creare una SINGOLA variabile di stato
  // dentro questo componente a funzione

  // se in un componente a classe aveste strutturato l'oggetto state così:
  //   state = {
  //     counter: 0,
  //     show: false
  //   }

  // immagine di estrapolare la proprietà "counter" dall'oggetto state
  // che avreste avuto in un componente a classe
  // la dichiariamo DA SOLA, tramite useState
  // useState(), se invocato, ritorna UN ARRAY DI DUE ELEMENTI
  // il primo elemento è la variabile di stato vera e propria
  // il secondo elemento è una funzione in grado di cambiare il valore di counter
  // la nomenclatura "classica" prevede che il secondo elemento dell'array
  // venga chiamato "set"+nomePrimoElemento

  const [counter, setCounter] = useState(0)
  const [show, setShow] = useState(false)

  return (
    <div>
      <h1>useState Hook!</h1>
      <h3>
        L'hook "useState" porta nei componenti a funzione delle capacità di
        "stato".
      </h3>
      <Button
        variant="success"
        onClick={() => {
          setCounter(counter + 1)
        }}
      >
        +
      </Button>
      <p>Il valore del counter è: {counter}</p>
      <Button
        className="btn btn-success mb-5" // come variant="success"
        onClick={() => {
          setCounter(counter - 1)
        }}
      >
        -
      </Button>
      <h3>SEZIONE NASCOSTA</h3>
      <Button
        variant="info"
        onClick={() => {
          setShow(!show)
        }}
      >
        {show ? 'NASCONDI' : 'MOSTRA'}
      </Button>
      {show && (
        <div>
          <h4>IO SONO LA SEZIONE NASCOSTA</h4>
        </div>
      )}
    </div>
  )
}

export default StateExample
