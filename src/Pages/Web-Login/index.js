import React from "react";
import {Link} from "react-router-dom";
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
                         <input
                             id="email"
                             name="email"
                             type="email"
                             className="border w-full px-3 py-2.5 rounded-md bg-gray-100"
                             required
                             placeholder="Email"
                         />
                     </div>
                     <div className="mt-3">
                         <input
                             id="password"
                             name="password"
                             type="password"
                             className="border w-full px-3 py-2.5 rounded-md bg-gray-100"
                             required
                             placeholder="Password"
                         />
                     </div>
                     <div className="mt-8">
                        <Link to="/task">
                            <button className="w-full py-2.5 bg-black text-white rounded-full">
                                Login
                            </button>
                        </Link>
                     </div>
                 </form>
             </div>
         </div>
     </>
 )
}

export default WebLogin;

