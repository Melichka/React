import React, { useEffect } from "react"

import "./Style.css"

const Insurance = ({ user, insurance, setInsurance, removeInsurance }) => {
  useEffect(() => {
    const getInsurance = async () => {
      const requestOptions = {
        method: "GET",
      }
      return await fetch(
        "api/auto", requestOptions
      )
        .then((response) => response.json())
        .then(
          (data) => {
            console.log("Data:", data)
            setInsurance(data)
          },
          (error) => {
            console.log(error)
          }
        )
    }
    getInsurance()
  }, [setInsurance])

  
  const deleteItem = async ({ insuranceId }) => {
    const requestOptions = {
      method: "DELETE",
    }
    return await fetch(`api/auto/${insuranceId}`,
     requestOptions).then(
      (response) => {
        if (response.ok) {
          removeInsurance(insuranceId)
        }
      },
      (error) => console.log(error)
    )
  }

  return (
    <>
      <h3>Список страхования</h3>
      {insurance.map(({ id, policy, startDate, finishDate,fio }) => (
        <div className="Insurance" key={id} id={id}>
          <strong>
            {id}: {startDate}-{finishDate}{" "}
          </strong>
          <p>
            {policy}-{fio}
          </p>
          {user.isAuthenticated ? (
            <button onClick={() => deleteItem({ id })}>Удалить</button>
          ) : (
            ""
          )}
        </div>
      ))}
   </>
  )
}
export default Insurance
