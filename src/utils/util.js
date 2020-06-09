/* eslint no-useless-escape:0 */
const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/g;

export function isUrl(path) {
  return reg.test(path);
}

export function isMobile(value, isMobileWay = true) {
  if (value.length === 0) return true;
  let regMobile = /^0\d{2,3}-\d{7,8}|\(?0\d{2,3}[)-]?\d{7,8}|\(?0\d{2,3}[)-]*\d{7,8}$/;
  if (isMobileWay) {
    regMobile = /^1[0123456789]\d{9}$/;
  }
  return regMobile.test(value);
}

export function isNumOrWords(str) {
  if (str.length === 0) return true;
  const regMobile = { letter: "^[A-Za-z]+$", num: "^([+-]?)\\d*\\.?\\d+$" };
  if (new RegExp(regMobile.letter).test(str) || new RegExp(regMobile.num).test(str)) {
    return true;
  } else {
    return false;
  }
}

// 清除表情符号
export function clearEmoji(text) {
  const regEmoji = /[^\u0020-\u007E\u00A0-\u00BE\u2E80-\uA4CF\uF900-\uFAFF\uFE30-\uFE4F\uFF00-\uFFEF\u0080-\u009F\u2000-\u201f\u2026\u2022\u20ac\r\n]/g;
  return text.replace(regEmoji, "");
}

// 清除表情符号和特殊符号
export function clearEmojiAndSymbol(text) {
  const regSymbol = /[`~!@#$%^&*_+=<>?:"{}|,.\/;\\[\]·~！@#￥%……&*——+={}|《》？：“”【】、；‘’，。、]/g;
  return clearEmoji(text).replace(regSymbol, "");
}

// 判断是否是纯数字或字母
export function onlyNumberLetter(text) {
  const regNumber = /^\d+$/gi;
  const regLetter = /^[a-z]$/gi;
  return regNumber.test(text) || regLetter.test(text);
}

// 剔除数字和和字母
export function removeNumberAndLetter(text) {
  const regNumberAndLetter = /[^0-9a-zA-Z]+/g;
  return text.replace(regNumberAndLetter, "");
}

export function isNumber(text) {
  const regNum = /[^0-9]+/gi;
  return text.replace(regNum, "");
}

//把手机号中间数字转换成*
export function encryptMobile(mobile) {
  return mobile.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
}

export function getScrollCoord() {
  const scrollTop = window.scrollY || document.body.scrollTop || document.documentElement.scrollTop;
  const scrollLeft =
    window.scrollX || document.body.scrollLeft || document.documentElement.scrollLeft;
  return { scrollTop, scrollLeft };
}

export function isIE() {
  const userAgent = window.navigator.userAgent; // 取得浏览器的userAgent字符串
  const isIE10 = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; // 判断是否IE<11浏览器
  const isEdge = userAgent.indexOf("Edge") > -1 && !isIE; // 判断是否IE的Edge浏览器
  const isIE11 = userAgent.indexOf("Trident") > -1 && userAgent.indexOf("rv:11.0") > -1;
  return isIE10 || isEdge || isIE11;
}
export function getCookie(name) {
  const strcookie = document.cookie; // 获取cookie字符串
  if (strcookie) {
    const arrcookie = strcookie.split("; "); // 分割
    // 遍历匹配
    for (let i = 0; i < arrcookie.length; i += 1) {
      const arr = arrcookie[i].split("=");
      if (arr[0] === name) {
        return arr[1];
      }
    }
  }

  return "";
}

// import ReconnectingWebSocket from "reconnecting-websocket";
// export function startWebSocket(url, onMessage, onError) {
//   const websocket = new ReconnectingWebSocket(url);

//   websocket.addEventListener("open", () => {
//     console.log("websocket链接成功");
//   });

//   websocket.addEventListener("close", () => {
//     console.log("websocket链接断开");
//   });
//   onMessage && websocket.addEventListener("message", onMessage);
//   onError && websocket.addEventListener("error", onError);

//   window.addEventListener("beforeunload", () => {
//     websocket.close();
//   });

//   setInterval(() => {
//     websocket.send("");
//   }, 20000);
//   window.notificationWebsocket = websocket;

//   return websocket;
// }

export function clearAllTimer() {
  if (window.timerContainer) {
    Object.keys(window.timerContainer).forEach((key) => {
      clearTimeout(window.timerContainer[key]);
      window.timerContainer[key] = null;
      delete window.timerContainer[key];
    });
  }
}
