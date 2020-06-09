import axios from "axios";
import MessageOpen from "../components/MessageOpen";

const codeMessage = {
  200: "服务器成功返回请求的数据。",
  201: "新建或修改数据成功。",
  202: "一个请求已经进入后台排队（异步任务）。",
  204: "删除数据成功。",
  400: "发出的请求有错误，服务器没有进行新建或修改数据的操作。",
  401: "用户没有权限（令牌、用户名、密码错误）。",
  403: "用户得到授权，但是访问是被禁止的。",
  404: "发出的请求针对的是不存在的记录，服务器没有进行操作。",
  406: "请求的格式不可得。",
  410: "请求的资源被永久删除，且不会再得到的。",
  422: "当创建一个对象时，发生一个验证错误。",
  500: "服务器发生错误，请检查服务器。",
  502: "网关错误。",
  503: "服务不可用，服务器暂时过载或维护。",
  504: "网关超时。",
};

function checkStatus(response) {
  const status = response.status || response.code;
  if (status >= 200 && status < 300) {
    return response.data;
  }
  const errortext = codeMessage[status] || response.err || "请求错误";
  MessageOpen({
    text: errortext,
  });
  const error = new Error(errortext);
  error.name = status;
  error.response = response;
  throw error;
}

export default function request(method = "get", url, params = {}) {
  return axios({
    method,
    url,
    data: {
      ...params,
    },
  })
    .then(checkStatus)
    .then((res) => {
      // 在此判断业务状态吗
      return res;
    })
    .catch((e) => {
      // const { dispatch } = store;
      const status = e.name;
      if ([401, 300].includes(status)) {
        //   dispatch({
        //     type: "login/logout",
        //   });
        return;
      }
      if (status === 403) {
        //   dispatch(routerRedux.push("/exception/403"));
        return;
      }
      if (status <= 504 && status >= 500) {
        //   dispatch(routerRedux.push("/exception/500"));
        return;
      }
      if (status >= 404 && status < 422) {
        //   dispatch(routerRedux.push("/exception/404"));
      }
      return {
        data: null,
      };
    });
}
