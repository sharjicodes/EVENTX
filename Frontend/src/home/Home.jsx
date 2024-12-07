import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import List from '../components/List'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <List/>
      <Footer/>
    </div>
  )
}

export default Home