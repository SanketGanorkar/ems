import Login from "../src/components/Auth/Login"
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
// import { getLocalStorage } from "./utils/localStorage";
import { useState } from "react";
function App() {
  // useEffect(() => {
  //   getLocalStorage();
  // },)

  const [user, setUser] = useState(null)
  const handleLogin = (email, password) => {
    if(email == 'admin@me.com' && password == '123'){
      console.log('This is admin')
    }
    else if (email == 'user@me.com' && password == '123'){
      console.log('This is user')
    }
    else{
      console.log('Invalid Credentials')
    }
    console.log(email, password)
  }

  handleLogin()
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard /> */}
    </>
  );
}

export default App;
