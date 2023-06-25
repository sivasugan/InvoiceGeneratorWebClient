import React, { useEffect } from 'react'
import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';



const Login = (props) => {
    const [emailId, setEailId] = useState("")
    const [password, setPassword] = useState("")
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const navigate = useNavigate()

    const checkCredentials = (props) => {
        if (emailId === 'sivasugan@gmail.com' && password === 'password') {
            setIsAuthenticated(true)
            navigate('/dashboard')
            console.log("Authenticated")
        } else {
            console.log("not Authenticated")
        }
    }


    return (
        <>

            <div className="Auth-form-container">
                <form className="Auth-form" onSubmit={checkCredentials}>
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Log In</h3>
                        <div className="form-group mt-3">
                            <label>Email address</label>
                            <input
                                type="email"
                                className="form-control mt-1"
                                placeholder="Enter email"
                                value={emailId}
                                onChange={(e) => setEailId(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                        <br></br>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login
