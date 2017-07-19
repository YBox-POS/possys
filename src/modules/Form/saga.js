import { call, put, takeLatest, fork, all } from 'redux-saga/effects'
import { getForms } from '../../services/user.api'
import * as formType from './duck'


function* getFormsagas(action){
  try{
    const res = yield call(getForms)
    const formsa = res.data.goods_list

    const newImagesform = formsa.map(form => {
      return ({
        id:form.id,
        count:form.count,
        price:form.sale_price,
        name:form.name,
        desc:form.desc
      })
    })
    console.log("imageform-------->"+newImagesform[1].name);
      console.log("imageform-------->"+newImagesform[1].id);
        console.log("imageform-------->"+newImagesform[1].count);
    yield put({
      type:formType.GET_IMAGESFORM,
      payload:newImagesform
    })

}catch(e){
    console.log(e);
    yield put({
      type:formType.GET_IMAGESFORM,
      payload:[]
    })
  }
}


// function* formSaga(action) {
//   if (action.type === formType.FOLLOW_IMAGE_REQUEST) {
//     yield put({
//       ...action,
//       type: formType.FOLLOW_IMAGE
//     })
//   } else if (action.type === formType.UNFOLLOW_IMAGE_REQUEST) {
//     yield put({
//       ...action,
//       type: formType.UNFOLLOW_IMAGE
//     })
//   }else if (action.type === formType.DELETE_IMAGE_REQUEST) {
//     yield put({
//       ...action,
//       type: formType.DELETE_IMAGE
//     })
//   }
  
// }

export default function* rootFormSaga() {
  yield all([
    takeLatest(formType.ON_IMAGESFORM , getFormsagas)
    // takeLatest(formType.FOLLOW_IMAGE_REQUEST, formSaga),
    // takeLatest(formType.UNFOLLOW_IMAGE_REQUEST, formSaga),
    // takeLatest(formType.DELETE_IMAGE_REQUEST, formSaga)
  ])
}