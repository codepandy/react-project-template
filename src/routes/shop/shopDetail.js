import React, { memo, useState, useMemo, useEffect } from "react";
import { connect } from "react-redux";
import { getShopDetail } from "../../actions/shop";

const ShopDetail = memo(function ShopDetail({ shop, getShopDetail }) {
  useEffect(() => {
    getShopDetail({ id: "zhangsan" });
  }, [getShopDetail]);
  const { name, desc } = shop.shopDetail;
  return (
    <div>
      <div>名称：{name}</div>
      <div>名称：{desc}</div>
    </div>
  );
});

export default connect((state) => ({ shop: state.shop }), { getShopDetail })(ShopDetail);
