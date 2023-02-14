
import {all, fork} from 'redux-saga/effects'
import { watchAddNewAccount, watchDeleteAccount, watchGetAccounts, watchUpdateAccount } from './accountSagas'


export default function* rootSaga() {

    yield all([
        fork(watchGetAccounts),
        fork(watchDeleteAccount),
        fork(watchAddNewAccount),
        fork(watchUpdateAccount)
    ]);
}