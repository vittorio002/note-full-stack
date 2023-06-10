import { Link } from "react-router-dom";

const navbar = () => {
    return ( 
        <nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
  <img src="./img/Notepad.png" width="112" height="28"/>
    <a className="navbar-item">      
      <h1 className="title is-2" >NotePad</h1>
    </a>

   
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
     
        
        <Link className="navbar-item " aria-current="page" to="/"><a>Home</a> </Link> 
        
      

      
        <Link className="navbar-item" to="/note"><a >Note</a></Link>
      

      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">
          More
        </a>

        <div className="navbar-dropdown">
          <a className="navbar-item">
            About
          </a>
          <a className="navbar-item">
            Jobs
          </a>
          <a className="navbar-item">
            Contact
          </a>
          <hr className="navbar-divider"/>
          <a className="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
     );
}
 
export default navbar;