import { UserAuth } from "../context/AuthContext"



const Navbar = () => {

    const {currentUser,logout}=UserAuth();

     const handleLogout = async () => {
    try {
      await logout();
    } catch(error) {
      console.log(error)
    }
  }
  return (
    <div className="navbar fixed bg-primary text-primary-content">
    <div className="containerwrap flex justify-between ">
  <a className="btn btn-ghost normal-case text-xl font-bold">Chatbusrt</a>
    {currentUser ?  <button onClick={handleLogout} className="font-bold">Logout</button> : ""}
</div>
    </div>
  )
}

export default Navbar
