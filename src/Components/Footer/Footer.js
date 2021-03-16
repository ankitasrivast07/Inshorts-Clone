import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
         <span className="createdBy">
             Inshort clone Handcrafted by me -{" "}
        <a href="https://www.linkedin.com/in/ankita-srivastava-38aa521a4/" target="#">Ankita Srivastava</a>
         </span>  
        
         <div className="icons">
             <a href="https://github.com/ankitasrivast07" target="#">
             <i class="fab fa-github fa-w-14 fa-2x"></i>
              
             </a>
             <a href="https://www.linkedin.com/in/ankita-srivastava-38aa521a4/" target="#">
                 <i className="fab fa-linkedin fa-w-14  fa-2x"></i>
             </a>
             <a href="https://twitter.com/this1ankita" target="#">
                 <i className="fab fa-twitter fa-w-14  fa-2x"></i>
             </a>
         </div> 
        </div>
    )
}

export default Footer;
