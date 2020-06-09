import { SET_SHOP_LIST, SET_SHOP_DETAIL } from "../constants/ActionType";

const initState = {
  shopList: [],
  shopDetail: { id: "", name: "", desc: "" },
};
export default function shop(state = initState, action) {
  switch (action.type) {
    case SET_SHOP_LIST:
      return { ...state, shopList: action.payload };
    case SET_SHOP_DETAIL:
      return { ...state, shopDetail: action.payload };
    default:
      return { ...state };
  }
}
