import { useEffect } from "react";
import { UserAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom";




const Login = () => {
    const navigate=useNavigate();
    const {currentUser,signinWithGoogle}=UserAuth();
    console.log(currentUser)

    const handleLogin=  async ()=>{
        try{
          await signinWithGoogle();
        }catch(error){
            console.log(error)
        }
    }
    

    useEffect(()=>{
        if(currentUser){
         navigate("/chat")
        }
    }, [currentUser]);
  return (
    <div>
        
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold text-white flex whitespace-nowrap justify-center">Chatburst &#x1F44B;</h1>

      <p className="py-6">Welcome to your favourite chatting app, start talking to your loved ones within minutes!.</p>
      <button onClick={handleLogin} className="btn btn-primary">Login with Google</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Login
