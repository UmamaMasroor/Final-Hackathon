import React from 'react';
import Header from "./Components/Header";
import Login from "./Pages/Login"

const App = () => {
  return (
    <>
    <Header/>
    <Login/>
      {/* <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home/>} />
      </Routes> */}
    </>

  )
}

export default App