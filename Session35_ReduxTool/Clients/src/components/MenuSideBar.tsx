import React from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../store";
import { toggleMenu } from "../slices/menuSlice";

import {
  DashboardOutlined,
  UserOutlined,
  DollarOutlined,
  BarChartOutlined,
  FileTextOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";

const MenuSidebar: React.FC = () => {
  const collapsed = useSelector((state: RootState) => state.menu.collapsed);
  const dispatch: AppDispatch = useDispatch();

  return (
    <div
      style={{
        width: collapsed ? "60px" : "200px",
        height: "100vh",
        background: "#001529",
        color: "white",
        transition: "all 0.3s",
        paddingTop: "10px",
      }}
    >
      <div className="menu-item">
        <DashboardOutlined />
        {!collapsed && <span style={{ marginLeft: 10 }}>Bảng điều khiển</span>}
      </div>
      <div className="menu-item">
        <UserOutlined />
        {!collapsed && <span style={{ marginLeft: 10 }}>Tài khoản</span>}
      </div>
      <div className="menu-item">
        <DollarOutlined />
        {!collapsed && <span style={{ marginLeft: 10 }}>Tài sản</span>}
      </div>
      <div className="menu-item">
        <BarChartOutlined />
        {!collapsed && <span style={{ marginLeft: 10 }}>Thống kê</span>}
      </div>
      <div className="menu-item">
        <FileTextOutlined />
        {!collapsed && <span style={{ marginLeft: 10 }}>Tài liệu</span>}
      </div>
      <div
        className="menu-item"
        style={{ cursor: "pointer" }}
        onClick={() => dispatch(toggleMenu())}
      >
        {collapsed ? <RightOutlined /> : <LeftOutlined />}
        {!collapsed && <span style={{ marginLeft: 10 }}>Thu gọn</span>}
      </div>
    </div>
  );
};

export default MenuSidebar;
