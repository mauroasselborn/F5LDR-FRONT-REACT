import { NavLink } from 'react-router-dom'
export const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <NavLink to="/" className="btn btn-outline-primary">
                    Bebidas
                </NavLink>
                <NavLink to="/comidas" className="btn btn-outline-primary">
                    Comidas
                </NavLink>
                <NavLink to="/snacks" className="btn btn-outline-primary">
                    Snacks
                </NavLink>
            </div>
        </nav>
    )
}
