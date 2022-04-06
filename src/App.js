import logo from './logo.svg'
import './App.scss'
import { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Layout></Layout>}></Route>
      </Routes>
    </Fragment>
  )
}

export default App
