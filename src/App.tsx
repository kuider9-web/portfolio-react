import { Link, Outlet } from "react-router";

import { image } from "./assets/image"
import "./App.css";


function App() {
  return (
    <>
      <nav className="nav">
        <Link to="/">
          <img src={ image.accueil } alt="acceuil" />        
          <span>HOME</span>
        </Link>
        <Link to="/about">
          <img src={ image.invité } alt="about" />        
          <span>ABOUT</span>
        </Link>
        <Link to="/portfolio">
          <img src={ image.malette } alt="portfolio" />        
          <span>PORTFOLIO</span>
        </Link>
        <Link to="/contact">
          <img src={ image.lettre } alt="contact" />        
          <span>CONTACT</span>
        </Link>
        <Link to="/article">
          <img src={ image.article } alt="article" />
          <span>ARTICLE</span>
        </Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
