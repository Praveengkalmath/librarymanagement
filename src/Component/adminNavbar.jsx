import { Link } from "react-router-dom";
import '../Style/adminNavbar.css'

const AdminNavbar = () => {
    return (
        <div className="adminnavbar">
            <div className="nav_head">
                <div className="nav_logo">
                    <img height={60} width={80} src="/images/logo2.png" alt="" />
                    
                </div>

                <div className="nav_links">
                    <ul>
                        <li><Link to='/admin/'>Dashboard</Link></li>
                        <li><Link to="/admin/add-book ">Add Books</Link></li>
                        <li><Link to="/admin/add-user" >Add User</Link></li>
                        <li><Link to="/admin/book-list">Book List</Link></li>
                        <li><Link to="/admin/user-list">User List</Link></li>
                        <li><Link to='/'>Logout</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AdminNavbar;

// import { Link } from "react-router-dom";
// import '../Style/adminNavbar.css'

// const AdminNavbar = () => {
//     return (
//         <div className="adminNavbar">
//             <div className="nav_head">
//                 <div className="nav_logo">
//                     <img height='50px' src="/images/admin_logo.jfif" alt="" />
//                 </div>

//                 <div className="nav_links">
//                     <ul>
//                         <li><Link to='/admin/'>Dashboard</Link></li>
//                         <li><Link to=" ">Add Books</Link></li>
//                         <li><Link>Add User</Link></li>
//                         <li><Link to='/admin/book-list'>Book List</Link></li>
//                         <li><Link to='/admin/user-list'>User List</Link></li>
//                         <li><Link to='/'>Logout</Link></li>

//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default AdminNavbar;