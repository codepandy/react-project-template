const Mock = require("mockjs");
const delay = require("mocker-api/lib/delay");
const noProxy = process.env.NO_PROXY === "true";
const Random = Mock.Random;

function getShopList() {
  const mock = Mock.mock({
    "list|1-50": [
      {
        "id|+1": 1,
        "name|1": ["电视", "电脑", "洗衣机"],
        "price|1-10000": 10000,
        desc: () => Random.csentence(),
      },
    ],
  });
  return mock.list;
}

const proxy = {
  "GET /api/shop/list": (req, res) => {
    res.json({
      status: 200,
      data: getShopList(),
    });
  },
  "GET /api/shop/detail": (req, res) => {
    res.json({
      status: 200,
      data: {
        id: 1,
        name: "kenny",
        desc: 6,
      },
    });
  },

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
