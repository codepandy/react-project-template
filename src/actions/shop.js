import { GET_SHOP_LIST, GET_SHOP_DETAIL } from "../constants/ActionType";

export function getShopList(payload) {
  return { type: GET_SHOP_LIST, payload };
}
export function getShopDetail(payload) {
  return { type: GET_SHOP_DETAIL, payload };
}
