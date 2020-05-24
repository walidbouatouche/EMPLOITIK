import React from 'react'
import { Link } from "react-router-dom"

import { faBars, faCog, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Dropdown from './dropdown'
import Auth from '../_helpers/auth'

// The main menu of the page
// القائمة الرئيسية للصفحة
//The code is clear and simple
// الكود واضح وبسيط
const Navabar = () => {

  const menu = [
    {
      id: 1,
      title: "Home",
      to: "/"

    }
  ]


  const usersmenu = [
    {
      id: 1,
      title: "myprofil",
      to: "/myprofil"

    },
    {
      id: 2,
      title: "myoffre",
      to: "/myoffre"

    },
    {
      id: 2,
      title: "admin",
      to: "/admin"

    }
  ]

  function logout() {
        // remove user from local storage to log user out

    Auth.clearAll();
    window.location.reload()

  }
  function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
      x.className = x.className.concat(" w3-show")
    }
    else {
      x.className = x.className.replace("w3-show", "")
    }
  }

  function DesktopNavabar({ menu }) {
    return (<div>

      {menu.map((menuitem) =>
        (
          <Link to={menuitem.to} key={menuitem.id} className="w3-bar-item w3-button w3-hide-small w3-hover-orange"> {menuitem.title}</Link>
        )
      )}
    </div>)
  }


  function MobilNavabar({ menu }) {
    return (<div>

      {menu.map((menuitem) =>
        (
          <Link key={menuitem.id} to={menuitem.to} className="w3-bar-item w3-button w3-hover-orange "> {menuitem.title}</Link>
        )
      )}


    </div>)
  }

  function Usermenu({ menu }) {
    return (<div>

      {menu.map((menuitem) =>
        (
          <li key={menuitem.id} >


            <Link to={menuitem.to} className="w3-bar-item w3-button w3-hover-orange "> {menuitem.title}</Link>
          </li>)
      )}


    </div>)
  }

  return (
    
<div>

      <div className="w3-top w3-padding w3-white  ">

 
        <div className="w3-bar" id="myNavbar">
          <a
            className="w3-bar-item w3-button w3-orange w3-hide-medium w3-hide-large w3-right"
            onClick={toggleFunction} title="Toggle Navigation Menu"
          >
            <FontAwesomeIcon icon={faBars} />
          </a>
          <a className="w3-bar-item w3-button">
          </a>
          <DesktopNavabar menu={menu} />
<div style={{float:"right", marginRight:'50px'}}>


<Dropdown title={<FontAwesomeIcon icon={faUser} />} >
          <ul className="w3-ul ">
            <Usermenu menu={usersmenu} />
  
            <li onClick={logout}>LogOut</li>
          </ul>
        </Dropdown>
        </div>
        </div>
        <div id="navDemo" className=" w3-bar-block  w3-hide w3-hide-large w3-hide-medium">
          <MobilNavabar menu={menu} />
          <Dropdown title={<FontAwesomeIcon icon={faUser} />} >
            <ul className="w3-ul ">
              <Usermenu menu={usersmenu} />

              <li onClick={logout}>LogOut</li>
            </ul>
          </Dropdown>
        </div>

      </div>

      <br />
      <br />
    </div>
        
        
  )
}


export default Navabar