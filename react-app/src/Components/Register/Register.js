import React from "react"
import {useNavigate} from "react-router-dom"
import { Button, Form, Input, Typography } from "antd";


const { Title }= Typography;
const Register = ({setUser})=>{
    const navigate = useNavigate();
    const handleSubmit =(e)=>{
        
        e.preventDefault();

        const login = e.target.elements.loginField.value;
        const password = e.target.elements.passwordField.value;
        const passwordConfirm = e.target.elements.passwordCheckField.value;
        console.log(e.target.elements);
        const newUser = {
            email: login,
            password:password,
            passwordConfirm:passwordConfirm
        };
        const createUser = async ()=>{
            console.log(newUser);
            const requestOptions ={
                method:"POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(newUser),
            };
                console.log(requestOptions)
            const response = await fetch("/api/account/register",requestOptions);
            return await response.json().then(
                (data)=>{
                    console.log(data);

                    if (response.ok){
                        setUser({IsAuthenticated:true, userName:newUser.email});
                        navigate("/");
                    }
                },
                (error)=>console.log(error)
            );
        };
        createUser();
    };

    return (
        <>
            <Title  style ={{fontSize:22}}>Регистрация</Title>
            
            <Form       
            onFinish={handleSubmit}      
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            autoComplete="off">
                <Form.Item
              label="Username"
              value="loginField"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input required />
            </Form.Item>
            <Form.Item
              label="Password"
              name="passwordField"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password required/>
            </Form.Item>
            <Form.Item
              label="Password"
              name="passwordCheckField"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password required/>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button block type="primary" htmlType="submit">
                Зарегистрироваться
              </Button>
            </Form.Item>
            </Form>
         </>
        
    );
};

export default Register;