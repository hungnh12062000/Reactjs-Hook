import './Nav.scss';

const Nav = () => {
     return (
          <div className="topnav">
               <ul className="list-nav">
                    <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
                    <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
                    <li className="nav-item"><a href="#project" className="nav-link">Project</a></li>
               </ul>
          </div>
     );
}

export default Nav;