import React from 'react'
import ReactDOM from 'react-dom'

function App(){
  return(
    <h1>Welcome</h1>
  )
}


const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(
  <React.StrictMode>
  <App />
  </React.StrictMode>
)