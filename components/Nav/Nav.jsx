import NavLink from "./NavLink"

const Nav = () => {
    return(
        <div className="container-nav-link ">
            <NavLink activeClassName="active-link" href="/">
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
            </NavLink>
        </div>
    )
}

export default Nav