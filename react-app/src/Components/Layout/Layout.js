import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Layout as LayoutAntd, Menu, ConfigProvider } from "antd";

const { Header, Content, Footer } = LayoutAntd;

const items = [
  {
    label: <Link to={"/"}>Главная</Link>,
    key: "1",
  },
  {
    label: <Link to={"/auto"}>Страхование</Link>,
    key: "2",
  },
  {
    label: <Link to={"/register"}>Регистрация</Link>,
    key: "3",
  },
  {
    label: <Link to={"/login"}>Вход</Link>,
    key: "4",
  },
  {
    label: <Link to={"/logoff"}>Выход</Link>,
    key: "5",
  },
];
const Layout = ({ user }) => {
  return (
    <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#18963e",
        colorSuccess: "#f89bc5",
        colorWarning: "#f1fe51",
        colorBgBase: "#f89bc5",
        colorTextBase: "#ffffff",
        colorInfo: "#18963e"
        }
    
    }}
  >
    <LayoutAntd>
      <Header style={{ position: "sticky", top: 0, zIndex: 1, width: "100%" , background: "#F89BC5"}}>
        <div
          style={{
            float: "right",
          }}
        >
          {user.isAuthenticated ? (
            <strong>{user.userName}</strong>
          ) : (
            <strong>Гость</strong>
          )}
        </div>
       
    
 
        <Menu  theme= "light" mode="horizontal" items={items} className="menu" />
      </Header>
      <Content className="site-layout" style={{ padding: "0 50px" }}>
        <Outlet />
      </Content>
      <Footer style={{ textAlign: "right" }}>Autoinsurance ©2023</Footer>
    </LayoutAntd>
    </ConfigProvider>
  );
};

export default Layout
