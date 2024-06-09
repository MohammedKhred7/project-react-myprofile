
import Hero from './components/2-hero/Hero';
import Header from './components/1-header/Header'
import Main from './components/3-main/Main';
import Contact from './components/4-contact/Contact';
import Footer from './components/5-footer/Footer';
import { useEffect, useState } from 'react'

const App = () => {
useEffect(() => {
  window.addEventListener("scroll",() => {
   if (window.scrollY > 300) {
    setShow(true)
   }
   else{
    setShow(false)
   }
   })
}, [])

const [show, setShow] = useState(false)


  return (
   <div id='up' className='container'>
      <Header />
      <Hero />
      <div className='line' />
      <Main />
      <div className='line' />
      <Contact />
      <div className='line' />
      <Footer />
        <a href="#up" style={{opacity:show? 1 : 0 , transition:".3s "}}>
        <button className='scroll icon-arrow-up-outline' ></button>
        </a>
  </div>
  )
};

export default App;
