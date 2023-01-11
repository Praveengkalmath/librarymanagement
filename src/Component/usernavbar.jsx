import { Link } from "react-router-dom";
const UserNavbar = () => {
    return (
        <div className="usernavbar">
             <div className="nav_head">
                <div className="nav_logo">
                    <img height={60} width={80} src="/images/logo2.png" alt="" />
                    
                </div>
                <div className="nav_links">
                    <ul>
                        <li><Link to='/users/'>Dashboard</Link></li>
                        <li><Link to="/users/book-list">Book List</Link></li>
                        <li><Link to='/'>Logout</Link></li>
                    </ul>
                </div>
            </div>
        </div>
      );
}
 
export default UserNavbar;