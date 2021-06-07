import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/" exact activeClassName="active-link">Home</NavLink></li>
                <li><NavLink to="/blog-overzicht" activeClassName="active-link">Blogposts</NavLink></li>
                <li><NavLink to="/login" activeClassName="active-link">Login</NavLink></li>
            </ul>
        </nav>
    )
}
export default Header