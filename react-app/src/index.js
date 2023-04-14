import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import {Typography } from "antd";
import Insurance from "./Components/Insurance/Insurance"
import InsuranceCreate from "./Components/InsuranceCreate/InsuranceCreate"
import Layout from "./Components/Layout/Layout"
import LogIn from "./Components/LogIn/LogIn"
import LogOff from "./Components/LogOff/LogOff"
import Register from "./Components/Register/Register"

const { Title }= Typography;
const App = () => {
  const [insurances, setInsurance] = useState([]);
  const addInsurance = (insurance) => setInsurance([...insurances, insurance])
  const removeInsurance = (removeId) =>
    setInsurance(
      insurances.filter(({ insuranceId }) => insuranceId !== removeId)
    )

  const [user, setUser] = useState({ isAuthenticated: false, userName: "" })
  
  useEffect(() => {
    const getUser = async () => {
      return await fetch("/api/account/isauthenticated")
        .then((response) => {
          response.status === 401 &&
            setUser({ isAuthenticated: false, userName: "" })
            console.log(response)
          return response.json()
        })
        .then(
          (data) => {
            if (
              typeof data !== "undefined" &&
              typeof data.userName !== "undefined"
            ) {
              setUser({ isAuthenticated: true, userName: data.userName })
            }
          },
          (error) => {
            console.log(error)
          }
        )
    }
    getUser()
  }, [setUser])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout user={user} />}>
          <Route index element={<Title  style ={{fontSize:22}}>Главная страница</Title>} />
          <Route
            path="/auto"
            element={
              <>
                <InsuranceCreate user={user} addInsurance={addInsurance} />
                <Insurance
                  user={user}
                  insurance={insurances}
                  setInsurance={setInsurance}
                  removeInsurance={removeInsurance}
                />
              </>
            }
          />
          <Route
            path="/login"
            element={<LogIn user={user} setUser={setUser} />}
          />
          <Route path="/logoff" element={<LogOff setUser={setUser} />} />
          <Route path="/register" element={<Register setUser={setUser} />} />
          <Route path="*" element={<h3>404</h3>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
)
