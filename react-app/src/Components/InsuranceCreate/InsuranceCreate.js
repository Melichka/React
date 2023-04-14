import React from "react";
import { Button,  Form, Input, DatePicker } from "antd";
import dayjs from 'dayjs';
import "../../index.css";

const dateFormat = 'YYYY/MM/DD';
const InsuranceCreate = ({ user, addInsurance }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const id = e.target.elements.idField.value;
    const startDate = e.target.elements.startDateField.value;
    const finishDate = e.target.elements.finishDateField.value;
    const policy = e.target.elements.policyField.value;
    const price = e.target.elements.priceField.value;
    const drivingExpirience = e.target.elements.drivingexpirienceField.value;
    const fio = e.target.elements.fioField.value;
    const ownerPassport = e.target.elements.ownerpassportField.value;
    const ownerSertificate = e.target.elements.ownersertificateField.value;
    const autoId = e.target.elements.autoidField.value;
    const typeId = e.target.elements.typeidField.value;
    console.log(e.target.elements);

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
    };

    const createInsurance = async () => {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(insurance),
      };
      const response = await fetch("api/auto/", requestOptions);

      return await response.json().then(
        (data) => {
          console.log(data);
          if (response.ok) {
            addInsurance(data);
            e.target.elements = [];
          }
        },
        (error) => console.log(error)
      );
    };
    createInsurance();
  };
  return (
    <>
      {user.isAuthenticated ? (
        <>
          <h3 style={{color:"#ffffff"}}>Создание нового страхования</h3>
          <Form.Item onSubmit={handleSubmit}>
          <Form.Item
            label="Id"
            name="idField"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input type="number"/>
          </Form.Item>
          <Form.Item
            label="Дата начала страхования: "
            name="startDateField"
            rules={[{ required: true, message: "Please input your start date!" }]}
          >
            <DatePicker defaultValue={dayjs('2015/01/01', dateFormat)} format={dateFormat} />
          </Form.Item>
          <Form.Item
            label="Дата конца страхования: "
            name="finishDateField"
            rules={[{ required: true, message: "Please input your finish date!" }]}
          >
            <DatePicker defaultValue={dayjs('2015/01/01', dateFormat)} format={dateFormat} />
          </Form.Item>
          <Form.Item
            label="Id"
            name="idField"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input type="number"/>
          </Form.Item>
          <Form.Item
            label="Номер страхового полиса: "
            name="policyField"
            rules={[{ required: true, message: "Please input your policy!" }]}
          >
            <Input type="text"/>
          </Form.Item>
          <Form.Item
            label="Стоимость: "
            name="priceField"
            rules={[{ required: true, message: "Please input your price!" }]}
          >
            <Input type="text" />
          </Form.Item>
          <Form.Item
            label="Водительский стаж: "
            name="drivingexpirienceField"
            rules={[{ required: true, message: "Please input your driving expirience!" }]}
          >
            <Input type="text" />
          </Form.Item>
          <Form.Item
            label="ФИО: "
            name="fioField"
            rules={[{ required: true, message: "Please input your fio!" }]}
          >
            <Input type="text" />
          </Form.Item>
          <Form.Item
            label="Паспорт владельца: "
            name="ownerpassportField"
            rules={[{ required: true, message: "Please input your passport!" }]}
          >
            <Input type="text" />
          </Form.Item>
          <Form.Item
            label="Удостоверение владельца: "
            name="ownersertificateField"
            rules={[{ required: true, message: "Please input your sertificate!" }]}
          >
            <Input type="text" />
          </Form.Item>
          <Form.Item
            label="Id auto: "
            name="autoidField"
            rules={[{ required: true, message: "Please input your auto id!" }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            label="Id Insurance Type: "
            name="autoidField"
            rules={[{ required: true, message: "Please input your insurance type id!" }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Создать
              </Button>
            </Form.Item>
          </Form.Item>
          
        </>
      ) : (
        ""
      )}
    </>
  );
};
export default InsuranceCreate;
