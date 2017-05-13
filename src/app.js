import React from 'react'
import ReactDOM from 'react-dom'
import './app.styl'
import Search from './components/Search'

const app = document.getElementById('root')
ReactDOM.render(
  <div className='container'>
    <Search />
  </div>,
app)

console.log('It works!!!!!!!!!!!!')
