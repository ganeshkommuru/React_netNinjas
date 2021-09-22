import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>404 Not Found</h1>
            <p>Navigate to home screeen</p>
            <Link to='/'>Home</Link>
        </div>
    );
}
 
export default NotFound;