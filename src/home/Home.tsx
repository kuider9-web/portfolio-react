import "./Home.css";
import { image } from '../assets/image';

function Home() {
  return (
    <section className="home">
      <div className="avatar">
        <img src={ image.avatar } alt="avatar" />
      </div>
      <div className="content">
        <h1 className="texte">
           je suis Kuider BOUTAIBA.
        </h1>
        <h2>Développer web</h2>
        <p className="moi">Grâce à plus de 10 ans d’expérience dans la vente,<br/> 
          je transforme les besoins de vos clients en un site web sur mesure, performant et convaincant.
        </p>
      </div>
      <div className="spacer"></div>
    </section>
  );
}

export default Home;