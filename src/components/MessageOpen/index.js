import React from "react";
import { message } from "antd";
import styles from "./index.less";

export default ({ icon, text, second, callback, destroy }) => {
  message.destroy();
  return message.open({
    content: (
      <div className={styles.messageContent}>
        <div className={styles.text}>{text}</div>
      </div>
    ),
    duration: second,
    onClose: callback,
  });
};
