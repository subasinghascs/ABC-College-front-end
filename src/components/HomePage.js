import React from "react";
import "./styles.css"; // Import CSS file
import Header from "./Header";
import Content from "./Content";
import LoginForm from "../components/LoginPage"
import { Sidebar, SidebarItem } from "react-responsive-sidebar";

export default function App() {
  return (
    <>
      <Header />
      <Sidebar
        breakPoint="768"
        content={[<SidebarItem>Sidebar</SidebarItem>]}
      ></Sidebar>
      <Content/>
    </>
  );
}
