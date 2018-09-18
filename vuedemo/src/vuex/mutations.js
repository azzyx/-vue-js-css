import {
  HEAVDER_SHOW,
  HEAVDER_HIDE
} from './type'
const state = {
  headershow: true
}

const mutations = {
	[HEAVDER_SHOW] (state) {
	  state.headershow = true;
	},
	[HEAVDER_HIDE] (state) {
	  state.headershow = false;
	}
}
console.log('mutations--', mutations)
const getters = {
	headershow(state) {
		return state.headershow
	}
}

export default {
  state,
  mutations,
  getters
}
