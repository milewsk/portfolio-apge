import logo from './logo.svg'
import './App.scss'
import { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Contact from './components/contact/contact'

function App() {
  return (
    <Fragment>
      <Layout></Layout>
    </Fragment>
  )
}

export default App
