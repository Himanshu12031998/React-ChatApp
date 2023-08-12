// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase";

// const Login = () => {
//   const [err, setErr] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const email = e.target[0].value;
//     const password = e.target[1].value;

//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       navigate("/")
//     } catch (err) {
//       setErr(true);
//     }
//   };
//   return (
//     <div className="formContainer">
//       <div className="formWrapper">
//         <span className="logo">Lama Chat</span>
//         <span className="title">Login</span>
//         <form onSubmit={handleSubmit}>
//           <input type="email" placeholder="email" />
//           <input type="password" placeholder="password" />
//           <button>Sign in</button>
//           {err && <span>Something went wrong</span>}
//         </form>
//         <p>You don't have an account? <Link to="/register">Register</Link></p>
//       </div>
//     </div>
//   );
// };
// export default Login;

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import '../style/style.css'

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="main-container">
      <div className="container">
            <div className="sidebar-page">
            <div class="overlay-panel">
                <h1> HimaChatApp</h1>
			<h2>Welcome Back!</h2> <br />
				<p> Hello guys this is ChatApp To keep connected with us please login with your personal info</p> <br />
                <p>If you dont have an account ?</p> <br />
                <Link to="/register">	<button className="butto btn">Sign Up</button></Link> <br />
        {err && <span>Something went wrong</span>}
			</div>
            </div>
            <div className="main">
                <form action="" onSubmit={handleSubmit} className="form">
                <h1>Sign in</h1>
               
                    <input type="email" placeholder="Email" required  className="input"/>
                    <input type="password" placeholder="Password" required className="input" />
                   
                    <button className="butto"> Signin</button>
                </form>
           
              
            </div>
      </div>
    </div>
  );
};


export default Login;

