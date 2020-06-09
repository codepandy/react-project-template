import { all, take, takeEvery, takeLatest, fork, cancel, call, put } from "redux-saga/effects";
import request from "../utils/request";
import {
  GET_SHOP_LIST,
  SET_SHOP_LIST,
  GET_SHOP_DETAIL,
  SET_SHOP_DETAIL,
} from "../constants/ActionType";

function* getShopList(action) {
  const { data } = yield call(request, "get", "/api/shop/list");
  yield put({ type: SET_SHOP_LIST, payload: data });
}

function* getShopDetail(action) {
  const { data, status } = yield call(request, "get", "/api/shop/detail");
  yield put({ type: SET_SHOP_DETAIL, payload: data });
}

export function* watchShopList() {
  yield takeLatest(GET_SHOP_LIST, getShopList);
}

function* watchShopDetail() {
  yield takeLatest(GET_SHOP_DETAIL, getShopDetail);
}

export default function* rootSaga() {
  yield all([watchShopList(), watchShopDetail()]);
}
