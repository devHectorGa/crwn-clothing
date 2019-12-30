import ShopActionsTypes from "./shop.types";
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = collectionsMap => ({
  type: ShopActionsTypes.FETCH_COLLECTIONS_START
});

export const fetchCollecionsSuccess = collectionsMap => ({
  type: ShopActionsTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollecionsFailure = errorMessage => ({
  type: ShopActionsTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then(async snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollecionsSuccess(collectionsMap));
      })
      .catch(error => dispatch(fetchCollecionsFailure(error.message)));
  };
};
