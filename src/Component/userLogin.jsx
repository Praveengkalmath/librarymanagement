import { useNavigate } from "react-router-dom";
import '../Style/user.css'

const UserLogin = () => {
    let navigate = useNavigate()
    let login = () => {
        navigate('/users/')
    }
    return (
        <div className="userLogin">
            <div className="formcontainercard">
                <h1>Login as User</h1>
                <div className="form_input">
                    <form action="" onSubmit={login}>
                        <div className="email">
                            <label htmlFor="">Enter Email Address : <input type="email" required placeholder="Email address" className="" /></label><br />

                        </div>
                        <div className="password">
                            <label htmlFor="">Enter Password : <input type="password" required placeholder="Enter password" /></label><br />

                        </div>
                        <button className="btnbtn-primary">Login</button>
                    </form>
                </div>
            </div>
        </div>


    )
}
export default UserLogin;
