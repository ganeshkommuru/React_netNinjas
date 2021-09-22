import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <nav className = 'navbar'>
            <h1>dojo-bar</h1>
            <div className="links">
                <Link to = '/'>links</Link>
                <Link to = '/create'>New Blog</Link>
            </div>

        </nav>
    );
}
 
export default Navbar;