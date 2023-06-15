import { Link } from "react-router-dom";

const navbar = () => {
    return ( 
        <nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
  <img src="./img/blocco.png" width="150" height="50"/>
    <a className="navbar-item">      
      <h1 className="title is-2" >NotePad</h1>
    </a>

   
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
     
        
        <Link className="navbar-item " aria-current="page" to="/"><a>Home</a> </Link> 
        
      

      
        <Link className="navbar-item" to="/note"><a >Note</a></Link>
      

    </div>
  </div>
</nav>
     );
}
 
export default navbar;