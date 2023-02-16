import { NavLink } from 'react-router-dom'
export const Navbar = () => {
    return (
        <nav>
            <NavLink to="/">Bebidas</NavLink>
            <NavLink to="/comidas">Comidas</NavLink>
            <NavLink to="/snacks">Snacks</NavLink>
        </nav>
    )
}
