import React from "react"

const InsuranceCreate = ({ user, addInsurance }) => {
  const handleSubmit = (e) => {
    e.preventDefault()

    const id = e.target.elements.idField.value
    const startDate = e.target.elements.startdateField.value
    const finishDate = e.target.elements.finishtdateField.value
    const policy = e.target.elements.policyField.value
    const price = e.target.elements.priceField.value
    const drivingExpirience = e.target.elements.drivingexpirienceField.value
    const fio = e.target.elements.fioField.value
    const ownerPassport = e.target.elements.ownerpassportField.value
    const ownerSertificate = e.target.elements.ownersertificateField.value
    const autoId = e.target.elements.autoidField.value
    const typeId = e.target.elements.typeidField.value
    console.log(e.target.elements)

    const insurance = {
      id: id,
      startDate: startDate,
      finishDate: finishDate,
      policy: policy,
      price: price,
      drivingExpirience: drivingExpirience,
      fio: fio,
      ownerPassport: ownerPassport,
      ownerSertificate: ownerSertificate,
      autoId: autoId,
      typeId: typeId,
    }

    const createInsurance = async () => {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(insurance),
      }
      const response = await fetch(
        "api/auto",

        requestOptions
      )

      return await response.json().then(
        (data) => {
          console.log(data);
          if (response.ok) {
            addInsurance(data);
            e.target.elements = [];
          }
        },
        (error) => console.log(error)
      )
    }
    createInsurance()
  }
  return (
    <>
      {user.isAuthenticated ? (
        <>
          <h3>Создание нового страхования</h3>
          <form onSubmit={handleSubmit}>
            <label>Id: </label>
            <input type="number" name="idField" />
            <br></br>
            <label>Дата начала: </label>
            <input type="date" name="startdateField" />
            <br></br>
            <label>Дата конца: </label>
            <input type="date" name="finishdateField" />
            <br></br>
            <label>Номер страхового полиса: </label>
            <input type="text" name="policyField" />
            <br></br>
            <label>Стоимость: </label>
            <input type="text" name="priceField" />
            <br></br>
            <label>Водительский стаж: </label>
            <input type="text" name="drivingexpirienceField" />
            <br></br>
            <label>ФИО: </label>
            <input type="text" name="fioField" />
            <br></br>
            <label>Пасспорт владельца: </label>
            <input type="text" name="ownerpassportField" />
            <br></br>
            <label>Удостоверение владельца: </label>
            <input type="text" name="ownersertificateField" />
            <br></br>
            <label>Id auto: </label>
            <input type="text" name="autoidField" />
            <br></br>
            <label>Id Insurance Type: </label>
            <input type="text" name="typeidField" />
            <br></br>

            <button type="submit">Создать</button>
          </form>
        </>
      ) : (
        ""
      )}
    </>
  )
}
export default InsuranceCreate
