import React from "react";
import { CalendarOutlined } from "@ant-design/icons";
import { isUrl } from "../utils/util";

const menuData = [
  {
    name: "用户",
    icon: "https://cdn.ishansong.com/fe-shop-pc/send_no_icon.svg",
    path: "user",
  },
  {
    name: "商店",
    icon: "https://cdn.ishansong.com/fe-shop-pc/send_icon.svg",
    path: "shop",
    children: [
      {
        name: "商店列表",
        path: "list",
        icon: <CalendarOutlined />,
      },
      {
        name: "详情",
        path: "detail",
        icon: "http://img.wangpengpeng.site/order.svg",
      },
    ],
  },
  {
    name: "树木类别",
    icon: "https://cdn.ishansong.com/fe-shop-pc/wallet_no_icon.svg",
    path: "wallet",
    children: [
      {
        name: "橡树",
        path: "tree1",
      },
      {
        name: "榆树",
        path: "tree2",
      },
      {
        name: "柳树",
        path: "tree3",
        children: [
          {
            name: "三级",
            path: "three",
            icon: "https://cdn.ishansong.com/fe-shop-pc/wallet_no_icon.svg",
          },
        ],
      },
    ],
  },
];

function formatter(data, parentPath = "/", parentAuthority) {
  return data.map((item) => {
    let { path } = item;
    if (!isUrl(path)) {
      path = parentPath + item.path;
    }
    const result = {
      ...item,
      path,
      authority: item.authority || parentAuthority,
    };
    if (item.children) {
      result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority);
    }
    return result;
  });
}
const getMenuData = () => formatter(menuData);

export default getMenuData;
