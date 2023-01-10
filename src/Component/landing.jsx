import { Link } from "react-router-dom";
import '../Style/landing.css'

const LandingPage = () => {
    return (
        <div className="landingpage">
            <h1>LIBRARY MANAGEMENT SYSTEM</h1>
            <div className="selectLogin">
                <div className="login">
                <div className="land_admin">
                    <img height={350} src="images/admin.png" alt=""/><br/>
                  <button><Link to='/admin-login' className="btn1">Admin login</Link></button>  
                    </div>
                <div className="land_user">
                    <img height={350} src="images/user.png" alt=""/><br />
               <button><Link to='/user-login' className="btn2">User login</Link></button> 
                </div>
                </div>
            </div>
        </div>
      );
}
 
export default LandingPage;