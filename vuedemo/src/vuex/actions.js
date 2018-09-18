/* import { HEAVDER_HIDE, HEAVDER_SHOW } from './type' */
import * as types from './type'
export default {
  SHOW_HEAD: ({commit}) => commit(types.HEAVDER_SHOW),
  HIDE_HEAD: function (content) {
  	console.log(types.HEAVDER_HIDE);
  	content.commit(types.HEAVDER_HIDE)
  	console.log('content==', content)
/* content==
    {dispatch: ƒ, commit: ƒ, getters: {…}, state: {…}, rootGetters: {…}, …}
    commit: ƒ boundCommit(type, payload, options)
    dispatch: ƒ boundDispatch(type, payload)
    getters: {}
    rootGetters:{}
    rootState: {__ob__: Observer}
    state:{__ob__: Observer}
    __proto__:Object
*/
  }
}
