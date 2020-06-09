import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import getMenuData from "../../common/menu";
import styles from "./index.less";

const { SubMenu } = Menu;
const MenuItem = Menu.Item;

function conversionPath(path) {
  if (path && path.indexOf("http") === 0) {
    return path;
  } else {
    return `/${path || ""}`.replace(/\/+/g, "/");
  }
}

function getIcon(url) {
  console.log(url);
  if (url && typeof url === "string" && url.indexOf("http") === 0) {
    return <img className={styles.menuIcon} alt="" src={url} />;
  }
  return url;
}

function getSubMenuOrItem(item) {
  if (item.children && item.children.some((child) => child.name)) {
    const childrenItems = getMenuList(item.children);
    // 当无子菜单时就不展示菜单
    if (childrenItems && childrenItems.length > 0) {
      return (
        <SubMenu title={item.name} key={item.path} icon={getIcon(item.icon)}>
          {childrenItems}
        </SubMenu>
      );
    }
    return null;
  } else {
    return (
      <MenuItem key={item.path} icon={getIcon(item.icon)}>
        <Link to={conversionPath(item.path)}>{item.name}</Link>
      </MenuItem>
    );
  }
}

function getMenuList(menusData) {
  if (!menusData) {
    return [];
  }

  return menusData
    .filter((item) => item.name && !item.hideInMenu)
    .map((item) => {
      // make dom
      return getSubMenuOrItem(item);
    })
    .filter((item) => item);
}

export default function SiderMenu() {
  return (
    <Menu mode="inline" theme="dark">
      {getMenuList(getMenuData())}
    </Menu>
  );
}
