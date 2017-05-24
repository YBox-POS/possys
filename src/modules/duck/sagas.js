import {takeEvery, delay, END} from 'redux-saga';
import {put, call, take, fork, cancel, cancelled} from 'redux-saga/effects';
import {QUACK, SWIM, RESET} from './types';
import {quacking, distance, reseting} from './reducers';


function* watch(){
    while(true){
        yield take(QUACK);
        var runtime = yield fork(timer);
        yield take(RESET);
        yield cancel(runtime);
    }
}