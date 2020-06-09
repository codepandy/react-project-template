import { GET_USER_LIST, GET_USER_DETAIL } from "../../constants/ActionType";

export function getUserList(payload) {
  return { type: GET_USER_LIST, payload };
}

export function getUserDetail(payload) {
  return { type: GET_USER_DETAIL, payload };
}
