import NavLink from "./NavLink"

const Nav = () => {
    return(
        <div className="container-nav-link">
            <NavLink activeClassName="active-link" href="/">
                <div className="nav-link">
                    Home
                </div>
            </NavLink>
            <NavLink activeClassName="active-link" href="/v">
                <div className="nav-link">
                    Products
                </div>
            </NavLink>
            <NavLink activeClassName="active-link" href="/a">
                <div className="nav-link">
                    Creative Communication
                </div>
            </NavLink>
            <NavLink activeClassName="active-link" href="/v">
                <div className="nav-link">
                    About
                </div>
            </NavLink>
            <NavLink activeClassName="active-link" href="/v">
                <div className="nav-link">
                    Contact
                </div>
            </NavLink>
        </div>
    )
}

export default Nav