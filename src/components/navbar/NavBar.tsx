import React from "react"
import "./navbar.scss"

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src="logo.svg" alt="" />
          <span>VCNBDashboard</span>
        </div>
        <div className="icons">
          <img src="/search.svg" alt="" className="icon" />
          <img src="/app.svg" alt="" className="icon" />
          <img src="/expand.svg" alt="" className="icon" />
          <div className="notification">
            <img src="/notifications.svg" alt="" />
            <span>1</span>
          </div>
          <div className="user">
            <img
              src="https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <span>Dev_VCNB</span>
          </div>
          <img src="/settings.svg" alt="" className="icon" />
        </div>
      </div>
    </>
  )
}

export default NavBar
