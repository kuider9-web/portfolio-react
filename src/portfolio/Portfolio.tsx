import { image } from '../assets/image'
import './portfolio.css'

function Portfolio() {
  return ( 
  <section className='portfolio'> 
    <h1>Mon Portfolio</h1>
    <div className='port'><img src={image.melodie} alt="mélodie factorie" className='melodie'/>
    <p className='jeu'>projet: clicker game</p>
    <p className='jeu'>tech utiliser: HTML, CSS, JAVASCRIPT</p>
    </div>
  </section>
  )
}

export default Portfolio;