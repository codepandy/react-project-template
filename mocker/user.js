const Mock = require("mockjs");
const delay = require("mocker-api/lib/delay");
const Random = Mock.Random;
const noProxy = process.env.NO_PROXY === "true";

function getUserList() {
  const mock = Mock.mock({
    "list|1-50": [
      {
        "id|+1": 1,
        name: Random.cname(),
        "sex|1": ["男", "女"],
        address: Random.ctitle(),
        "role|1": ["老师", "校长", "主任", "班委会", "学生"],
        createTime: () => Random.date("yyyy-MM-dd HH:mm:ss"),
        creator: () => Random.cname(),
      },
    ],
  });
  return mock.list;
}

const proxy = {
  "/api/user/list": (req, res) => {
    res.json({ status: 200, data: getUserList() });
  },
  "GET /api/user": {
    id: 1,
    username: "kenny",
    sex: 6,
  },
  "GET /api/user/list": [
    {
      id: 1,
      username: "kenny",
      sex: 6,
    },
    {
      id: 2,
      username: "kenny",
      sex: 6,
    },
  ],
  "GET /api/:owner/:repo/raw/:ref/(.*)": (req, res) => {
    const { owner, repo, ref } = req.params;
    // http://localhost:8081/api/admin/webpack-mock-api/raw/master/add/ddd.md
    // owner => admin
    // repo => webpack-mock-api
    // ref => master
    // req.params[0] => add/ddd.md
    return res.json({
      id: 1,
      owner,
      repo,
      ref,
      path: req.params[0],
    });
  },
  "POST /api/login/account": (req, res) => {
    const { password, username } = req.body;
    if (password === "888888" && username === "admin") {
      return res.json({
        status: "ok",
        code: 0,
        token: "sdfsdfsdfdsf",
        data: {
          id: 1,
          username: "kenny",
          sex: 6,
        },
      });
    } else {
      return res.status(403).json({
        status: "error",
        code: 403,
      });
    }
  },
  "DELETE /api/user/:id": (req, res) => {
    console.log("---->", req.body);
    console.log("---->", req.params.id);
    res.send({ status: "ok", message: "删除成功！" });
  },
};

module.exports = noProxy ? {} : delay(proxy, 1000);
