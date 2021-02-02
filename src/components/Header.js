import React from 'react'
import {Link} from 'react-router-dom'


export default function header() {
  return (
    <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
            <span className="d-block d-lg-none">Shane Schilling</span>
            <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="assets/img/shane-lowres.jpg" alt="" /></span>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
            <Link to='/'>
                <li className="nav-item"><a className="nav-link js-scroll-trigger">About</a></li>
            </Link>

            <Link to="/portfolio">
            <li className="nav-item"><a className="nav-link js-scroll-trigger">Portfolio</a></li>
            </Link>  
            
            <Link to="/experince">
            <li className="nav-item"><a className="nav-link js-scroll-trigger">Experience</a></li>
            </Link>    
                
            <Link to="/conteduction">
            <li className="nav-item"><a className="nav-link js-scroll-trigger">Continuing Education</a></li>
            </Link> 
               
            <Link to="/leadership">
            <li className="nav-item"><a className="nav-link js-scroll-trigger">Professional Values</a></li>
            </Link>  

             <Link to="/affiliations">
            <li className="nav-item"><a className="nav-link js-scroll-trigger">Professional Affiliations</a></li>
            </Link>    

              <a href="./assets/Shane_Schilling_Resume.pdf">
                  <li className="nav-item"><a  className="nav-link js-scroll-trigger" >Download Resume</a></li>
              </a>
            </ul>
        
           
        </div>
    </nav>
   
    </div>
  )
}
