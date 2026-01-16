import { image } from '../assets/image'; 
import "./About.css"

function About() {
  return (
  <section className='about'>
    <h1 className='propo'>a propos de moi</h1>
    <h2 className='info'>infos personnel</h2>
    <article>
      
      <div>
        <p>Prenon: kuider</p>
        <p>Age: 35 ans</p>
        <p>Métier: dévelopeur web</p>
        <p>Téléphone: 06/18/53/78/93</p>
      </div>
      <div>
        <p>Nom: Boutaiba</p>
        <p>Nationaliter: francais</p>
        <p>Address: paris</p>
        <p> <a href="mailto:kuider93@gmail.com" className='mail'>Email: kuider93@gmail.com</a></p>
      </div>
    </article>
    <h2 className='info'>Mes compétence</h2>
    <article>
      
      <div className='icone'>
      <p>
        <img src={image.html} alt="html" />
        <span>HTML</span>
      </p>
      <p>
        <img src={image.css} alt="css" />
        <span>CSS</span>
      </p>
      <p>
        <img src={image.javascript} alt="javascript" />
        <span>JAVASCRIPT</span>
      </p>
      </div>
      <div>
      <p>
        <img src={image.reacte} alt="react" />
        <span>REACT</span>
      </p>
      <p>
        <img src={image.wordpress} alt="wordpress" />
        <span>WORDPRESS</span>
      </p>
      </div>
    </article>
    <div className="spacer"></div>
  </section>
  )
}

export default About;