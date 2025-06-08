
import './App.css'
import { About } from './components/About/About';
import { Events } from './components/Events/Event';
import { Header } from './components/Header/Header';
 import { Hero } from './components/Hero/Hero';
import { Research } from './components/Research/Research';
import {School} from './components/School/School'
export function App() {
  return (
    <>
     <div className='hero-bg'>
      <Header/>
     <Hero/>
     </div>
     <School/>
     <About/>
     <Research/>
     <Events/>
    
    </>
  )
}


