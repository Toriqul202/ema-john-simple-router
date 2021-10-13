import React from 'react';
import { Link ,useLocation,useHistory} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { googleSignIn}=useAuth()
    const location=useLocation()
    const history =useHistory()
    const redirect_uri=location.state?.from || '/'
    console.log(location.state?.from)
    const handleGoogleLogin=()=>{
        googleSignIn()
        .then(result=>{
            console.log(result.user)
            history.push(redirect_uri)
           
        })
    }
    return (
        <div>
           <div style={{textAlign:'center'}}>
                <h2>Please Login</h2>
                <form onSubmit="">
                    <input type="email"  />
                    <br/>
                    <br/>
                    

                    <input type="password" name="" id="" />
                    <br/>
                    <br/>
                    <input type="submit" value="Submit" />
                </form>
                <p>New to ema Jhon <Link to="/registar"> Craete Account</Link></p>
                <div>
                    -------------Or--------------
                    <br/>
                    <button className="btn-regular" onClick={ handleGoogleLogin}>Google Login</button>
                </div>
            </div> 
            
           
        </div>
    );
};

export default Login;