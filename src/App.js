import { useState, useEffect } from 'react'
import { Navigation } from './components/navigation'
import { Header } from './components/header'
import { Features } from './components/features'
import { Services } from "./components/services";
import { Footer } from './components/footer';
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'
import {Team} from './components/Team';
import {Demo} from './components/demo';
import { About } from './components/about';
import { Next } from './components/next';
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <Services data={landingPageData.Services} />
      <Demo/>
      <About data={landingPageData.About} />
      <Team data={landingPageData.Team} />
      <Next></Next>
      <Footer></Footer>
    </div>
  )
}

export default App
