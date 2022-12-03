import { useState } from 'react'
import Select from './Select'

type option={
  label:string,
  value:string | number
}

const options=[
  {label:'mia',
value:100},
{label:'angela',
value:90},
{label:'alison',
value:'95'},
{label:'ally',
value:70}

]


function App() {
 

  return (
    <div className="App">
      <Select multiple={true} onChange={()=>{}} options={options}></Select>
    
    </div>
  )
}

export default App
