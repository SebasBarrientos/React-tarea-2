
import './App.css'
import Counter from './components/Counter/Counter'

function App() {
  
  return (
    
      <div>
       <Counter initialState={0} valorDeSuma={2}/>
       <Counter initialState={0} valorDeSuma={3}/>
       <Counter initialState={0} valorDeSuma={4}/>
      </div>
  )
}

export default App
