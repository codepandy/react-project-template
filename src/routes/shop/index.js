import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Table, Button } from "antd";
import { getShopDetail, getShopList } from "../../actions/shop";

@connect((state) => ({ shop: state.shop }), { getShopDetail, getShopList })
class Shop extends PureComponent {
  componentDidMount() {
    const { getShopList } = this.props;
    getShopList({ userName: "zhangsan" });
  }
  onGetShopList = () => {
    const { getShopList } = this.props;
    getShopList({ userName: "zhangsan" });
  };
  render() {
    const { shop } = this.props;
    const columns = [
      {
        title: "名称",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "价格",
        dataIndex: "price",
        key: "price",
      },
      {
        title: "介绍",
        dataIndex: "desc",
        key: "desc",
      },
    ];
    return (
      <div>
        <Button onClick={this.onGetShopList}>获取列表</Button>
        <Table columns={columns} dataSource={shop.shopList} />
      </div>
    );
  }
}

export default Shop;
