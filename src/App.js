import './App.css';
import { useState } from 'react';

function App() {
  const [iterator, setInterator] = useState(10);
  const [valueOfPi,setValueOfPi] = useState(3.14)

  //console.log(iterator)
  
  function calculate() {
    // formula is 3+(4/(2*3*4)-4)  /  ((4*5*6)+4)  / ((6*7*8)-4) / ((6*7*8)-4) 
    
    const Intiterator = Math.ceil(iterator)
    let set = 4;
    let piValue = 3 + (4 / (2*3*4))
    for (let i=0; i < Intiterator;i++) {
      if (i%2 ==0) { // is it even
        piValue = piValue - ( 4 / (set*(set+1)*(set+2)))
      } else  {
        piValue = piValue + ( 4 / (set*(set+1)*(set+2)))
      }
      set = set + 2
    }
    setValueOfPi(piValue)
  }
console.log("pi")


  return (
    <div className="App">
      <header className="App-header">
       <h1>Calculate Pi using the Nilakantha's Algorythm</h1>
       <h2>Choose the number of iteration to try to get the right number</h2>
       <input type="number" value={iterator}  onChange={(e)=> {setInterator(e.target.value)}} />
       <button onClick={()=> calculate()} >Calculate</button>
       <hr />
       <h2 style={{ textAlign: 'right' }}>
       Value of Pi is: {valueOfPi}<br />
       Official value: 3.141592653589793
       </h2>
      </header>
    </div>
  );
}

export default App;
