import React from 'react'
import ReactDOM from 'react-dom'
import Sorter from './Sorter'


const App = () => {
  return (
    <Sorter/>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)