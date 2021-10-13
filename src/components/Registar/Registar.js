import React from 'react';
import { Link } from 'react-router-dom';

const Registar = () => {
    return (
        <div>
            <div>
                <h2>Please Registar</h2>
               <form onSubmit="">
               <input type="email" name="" id="" />
                <br/>
                <br/>
                <input type="password" name="" id="" />
                <br/>
                <br/>
                <input type="submit" value="SUbmit" />
               </form>
               <div>
                   <p>Allreday Account<Link to="/login">Login</Link></p>
                   --------------or---------
                   <br/>
                   <button>Google Sign In</button>
               </div>
                </div>
        </div>
    );
};

export default Registar;