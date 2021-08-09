import NavLink from "./NavLink"
import React from 'react'

const Nav = () => {
    const scroolToTarget = (target) => {
        document.getElementById(target).scrollIntoView()
    }
    return(
        <div className="container-nav-link ">
            <div className="nav-link border-style"
                onClick={() => scroolToTarget('home')}
            >
                Home
            </div>
            <div className="nav-link border-style"
                onClick={() => scroolToTarget('products')}
            >
                Products
            </div>
            <div className="nav-link border-style"
                onClick={() => scroolToTarget('creative')}
                >
                Creative Communication
            </div>
            <div className="nav-link border-style"
                onClick={() => scroolToTarget('about')}
                >
                About
            </div>
            <div className="nav-link border-style"
                onClick={() => scroolToTarget('contact')}
                >
                Contact
            </div>
            
            {/* <NavLink activeClassName="active-link" href="/">
                <div className="nav-link border-style">
                    Home
                </div>
            </NavLink>
            <NavLink activeClassName="active-link" href="/v">
                <div className="nav-link border-style">
                    Products
                </div>
            </NavLink>
            <NavLink activeClassName="active-link" href="/a">
                <div className="nav-link border-style">
                    Creative Communication
                </div>
            </NavLink>
            <NavLink activeClassName="active-link" href="/v">
                <div className="nav-link border-style">
                    About
                </div>
            </NavLink>
            <NavLink activeClassName="active-link" href="/v">
                <div className="nav-link border-style">
                    Contact
                </div>
            </NavLink> */}
        </div>
    )
}

export default Nav