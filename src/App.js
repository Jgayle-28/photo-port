import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import ParallaxSection from './components/parallax-section/ParallaxSection'

function App() {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <div className='main-wrapper'>
      <ParallaxSection />
    </div>
    // <div className='App'>
    //   <header className='App-header'>
    //     <img src={logo} className='App-logo' alt='logo' />
    //   </header>
    // </div>
  )
}

export default App
