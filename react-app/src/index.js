import React, { useState } from 'react'
import ReactDOM from "react-dom/client"
import Insurance from './Components/Insurance/Insurance'
import InsuranceCreate from './Components/InsuranceCreate/InsuranceCreate'

const App = () => {
  const [insurances, setInsurance] = useState([])
  const addInsurance = (insurance) => setInsurance([...insurances, insurance])
  const removeInsurance = (removeId) => setInsurance(insurances.filter(({ insuranceId }) => insuranceId
!== removeId));

  return (
    <div>
      <InsuranceCreate
        addInsurance={addInsurance}
      />

      <Insurance
        insurances={insurances}
        setInsurance={setInsurance}
        removeInsurance={removeInsurance}
      />
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
)