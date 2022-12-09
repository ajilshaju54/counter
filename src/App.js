import React from 'react'
import Counter from './components/Counter'
import Employee from './components/Employee'

function App() {
 const style ={
  marginLeft: 'auto',

  height:'500px'
 }

  return (
  
    <div style={style}>
      <div><Counter />
      </div>

      <div><Employee />
      </div>
      
      
    </div>

  )
}

export default App;
