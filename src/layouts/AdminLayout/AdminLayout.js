import React from "react";
import { LoginAdmin } from "../../pages/Admin";
import { Routes, Route } from "react-router-dom";
import { TopMenu, SideMenu } from "../../components/Admin";
import { useAuth } from "../../hooks";
import "./AdminLayout.scss";

export function AdminLayout(props) {
  const { children } = props;
  const { auth } = useAuth();

  if (!auth) return <LoginAdmin />;

  return (
    <div className="admin-layout">
      <div className="admin-layout__menu">
        <TopMenu />
      </div>
      <div className="admin-layout__main-content">
        <SideMenu>{children}</SideMenu>
      </div>
    </div>
  );
}

export function Navigation() {
  return (
    <Routes>
      <Route path="/" element={<h2>Navigation</h2>} />
    </Routes>
  );
}
