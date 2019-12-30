import { takeEvery } from "redux-saga/effects";
import ShopActionsTypes from "./shop.types";

export function* fetchCollectionsAsync() {
  yield console.log("Redux Saga");
}

export function* fetchCollectionsStart() {
  yield takeEvery(
    ShopActionsTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
