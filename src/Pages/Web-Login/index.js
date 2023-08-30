import React from "react";
import {Link} from "react-router-dom";
import Button from "../../Components/Buttons/button";
import InputField from "../../Components/Inputs/input";
const WebLogin = () => {
 return(
     <>
         <div className="h-screen flex flex-col items-center justify-center">
             <div className="text-center text-2xl font-bold text-gray-900">
                 <h2>Log In</h2>
             </div>
             <div  className="mt-10 w-80">
                 <form>
                     <div>
                         <InputField id="email" name="email" type="email" style="Simple" placeholder="Email"/>
                     </div>
                     <div className="mt-3">
                         <InputField id="password" name="password" type="password" style="Simple" placeholder="Password"/>
                     </div>
                     <div className="mt-8">
                        <Link to="/task">
                            <Button style="primary" >Login</Button>
                        </Link>
                     </div>
                 </form>
             </div>
         </div>
     </>
 )
}

export default WebLogin;

