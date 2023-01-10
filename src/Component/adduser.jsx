import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import '../Style/adduser.css'
const AddUser = () => {
    let [name, setName] = useState('')
    let [age, setAge] = useState('')
    let [email, setMail] = useState('')
    let [phonenumber, setPhonenumber] = useState('')
    let navigate = useNavigate()

    let handleSubmit = (e) => {
        e.preventDefault()

        let data = { name, age, email, phonenumber }
        fetch('http://localhost:2002/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        alert('data added to server')
        navigate("/admin/user-list")
    }
    let reset = () => {
        setName("")
        setAge("")
        setMail("")
        setPhonenumber("")
    }

    return (
        <div className="adduser">
            <div className="title">
                <h1>ADD USER</h1>
            </div>

            <div className="form">
                    <form action=""className='formm' onSubmit={handleSubmit}>
                        Name: <input type="text" placeholder="enter name" value={name} onChange={(e) => setName(e.target.value)} /> <br />
                         Age : <input type="text" placeholder="enter the age" value={age} onChange={(e) => setAge(e.target.value)} /> <br />
                        Email: <input type="email" placeholder="enter the mail" value={email} onChange={(e) => setMail(e.target.value)} /> <br />
                        PhNo: <input type="tel" placeholder="enter the phonenumber" value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)} /> <br />

                        <button type='submit'>Add to User</button>
                        <button type='reset' onClick={reset} >Reset</button>
                    </form>
            </div>
        </div>

    );
}

export default AddUser;