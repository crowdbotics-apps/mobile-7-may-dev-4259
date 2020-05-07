import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth3807Saga from '../features/EmailAuth3807/redux/sagas';
import EmailAuth3805Saga from '../features/EmailAuth3805/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth3807Saga,
EmailAuth3805Saga,
EmailAuthSaga,
    
  ]);
}