import React from 'react'
import './Menubar.css'
import DrawerLeft from '../DrawerLeft';

function Menubar({setCategory}) {
    return (
        <div className="header">
          <div class="icon"><DrawerLeft setCategory={setCategory} /></div>
          <img className="logo"src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
              alt="logo"
          />
        </div>
    )
}

export default Menubar;
