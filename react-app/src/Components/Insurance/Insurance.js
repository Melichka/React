import React, { useEffect } from 'react'
import './Style.css'

const Insurance = ({ insurances, setInsurance, removeInsurance }) => {
    useEffect(() => {
        const getInsurance = async () => {
            const requestOptions = {
                method: 'GET'
            }
            return await fetch("https://localhost:7191/api/auto/",

                requestOptions)

                .then(response => response.json())
                .then(
                    (data) => {
                        console.log('Data:', data)
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
            method: 'DELETE'
        }
        return await fetch(`https://localhost:7074/api/auto/${insuranceId}`,
            requestOptions)

            .then((response) => {
                if (response.ok) {
                    removeInsurance(insuranceId);
                }
            },
                (error) => console.log(error)
            )
    }

    return (
        <React.Fragment>
            <h3>Список страхования</h3>
            {insurances.map(({ id, policy, startDate, finishDate, fio }) => (
                <div className="Insurance" key={id} id={id} >
                    <strong > {id}: {startDate}-{finishDate} </strong>
                    <button onClick={(e) => deleteItem({
                        id                    })}>Удалить</button>
                    <p>{policy}-{fio}</p>

                </div>
            ))}
        </React.Fragment>
    )
}
export default Insurance