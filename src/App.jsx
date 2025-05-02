import Login from "../src/components/Auth/Login"
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { useContext, useState } from "react";
import { AuthContext } from "./context/AuthProvider";
function App() {
  const [user, setUser] = useState(null)
  
  
  const authData = useContext(AuthContext)
  console.log(authData)



  const handleLogin = (email, password) => {
    if (email == 'admin@me.com' && password == '123') {
      console.log('This is admin')
      setUser('admin')
      console.log(user)
    }
    else if (email == 'user@me.com' && password == '123') {
      console.log('This is user')
      setUser('employee')
      console.log(user)
    }
    else {
      console.log('Invalid Credentials')
    }
    console.log(email, password)
  }

  
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  );
}

export default App;
