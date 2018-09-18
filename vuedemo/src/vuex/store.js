import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

/*const state = {
	count: 3
}

const mutations = {
	add (state,n) {
		state.count += n
	},
	reduce (state) {
		state.count --
	}
}

const getters = {
	count: state => state.count +=100
}

const actions = {
	addActions (content) {
		content.commit('add', 10)
		setTimeout(() => {context.commit(reduce)}, 2000)
	},
	reduceAction ({commit}) {
		commit('reduce')
	}
}
export default new Vuex.Store({
  state, mutations, getters, actions
})*/

export default new Vuex.Store({
	state: {
		count: 2
	},
	mutations: {
		/*add(state) {
			return state.count++
		},
		reduce(state) {
			return state.count--
		}*/
		add: (state,n) => state.count+=n,
		reduce: state => state.count--
	},
	getters: {
		/*count(state) {
			return state.count +=100
		}*/
		count: state => state.count += 100
	},
	actions: {
		/*addActions(content) {
			return  content.commit('add', 10)
		},
		reduceAction({commit}) {
			return commit('reduce')
		}*/
		addActions: content => content.commit('add', 10),
		reduceAction: ({commit}) => commit('reduce')
	}
})