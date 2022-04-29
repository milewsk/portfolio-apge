import { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import '../../sass/layout/layout.scss'
import NavigationBar from '../navigation/NavigationBar'

import Contact from '../contact/contact'
import Home from '../home/home'
import About from '../about/about'

const Layout = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="home" element={<Home></Home>}></Route>
        <Route path="about" element={<About></About>}></Route>
        <Route path="portfolio" element={<Contact></Contact>}></Route>
        <Route path="contact" element={<Contact></Contact>}></Route>

        <Route path="" element={<Home></Home>}></Route>
      </Routes>
    </Fragment>
  )
}

export default Layout
