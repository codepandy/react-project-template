import React from "react";

const userList = [
  { id: "a", name: "张三" },
  { id: "b", name: "李四" },
  { id: "c", name: "王大" },
];
export default function User() {
  return (
    <div>
      {userList.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}
