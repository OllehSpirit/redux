import { useSelector, useDispatch } from 'react-redux'

function App() {

  const counter = useSelector(state => state.Counter)
  const isLogged = useSelector(state => state.IsLogged)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>HELLO</h1>
      <h1>counter is {counter}</h1>

      <button onClick={() => dispatch({ type: 'INCREMENT', payload: 5 })}>+</button><br /><br />
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button><br /><br />

      {isLogged ? <h1>OOH, I am logged in</h1> : <button onClick={() => dispatch({ type: 'SIGN_IN' })}>LOG IN</button>}
    </div>
  );
}

export default App;
