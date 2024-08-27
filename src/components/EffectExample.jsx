// useEffect() è un hook di React che si occupa di "trasportare" nei componenti
// a funzione i metodi di lifecycle componentDidMount e componentDidUpdate

// le regole degli hooks sono sempre quelle:
// REGOLE DEGLI HOOKS
// 1) I React Hooks si possono utilizzare SOLAMENTE nei componenti React a funzione!
// 2) È necessario utilizzare i React Hooks IN CIMA al componente, PRIMA del
// return ma soprattutto al di fuori di LOOPS, CONDIZIONI, altre funzioni etc.

import { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'

const EffectExample = () => {
  // USEEFFECT SENZA ARRAY DI DIPENDENZE

  const [counter, setCounter] = useState(0)
  const [name, setName] = useState('Mario')

  // uno useEffect SENZA array di dipendenze si comporta come un componentDidUpdate
  // la funzione al primo parametro viene re-invocata OGNI VOLTA che cambia lo stato
  // o che cambiano le props
  useEffect(() => {
    console.log('SONO useEffect!')
  })
  // la funzione con il console.log verrà ri-eseguita ad OGNI UPDATE del componente
  // un update avviene OGNI VOLTA che c'è un cambio di stato o un cambio di prop

  // ---------
  useEffect(() => {
    console.log('È CAMBIATO COUNTER')
  }, [counter])

  // COMPONENTDIDMOUNT?
  useEffect(() => {
    console.log('SONO COME COMPONENTDIDMOUNT!')
  }, [])

  return (
    <div>
      <h2>ESEMPIO USEEFFECT</h2>
      <p>{counter}</p>
      <Button onClick={() => setCounter(counter + 1)}>+</Button>
      <p className="mt-5">VALORE NOME: {name}</p>
      <Button onClick={() => setName(name === 'Mario' ? 'Luigi' : 'Mario')}>
        CAMBIA NOME
      </Button>
    </div>
  )
}

export default EffectExample
