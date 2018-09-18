<template>
	<div id="vuexapp">
		<v-headNav v-if="headershow" />
		<transition name="fade" mode="out-in">
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</transition>
	</div>
</template>
<script type="ecmascript-6">

import store from	'./vuex/vuexstore'

import headNav from	'./components/HeaderNav'
import { mapGetters } from 'vuex'
export	default {
  name: 'vuexapp',
	data() {
		return {
		}
	},
	computed: mapGetters(['headershow']),
	mounted() {
		let path = this.$route.path.substring(1);
		this.headerchange(path);
	},
	watch: {
		$route(to) {
			let path = to.path.substring(1);
			this.headerchange(path);
		}
	},
	methods: {
		headerchange (path) {
			if(path == 'user') {
				this.$store.dispatch('HIDE_HEAD')
			} else {
				this.$store.dispatch('SHOW_HEAD')
			}
		}
	},
	components: {
		'v-headNav': headNav
	},
	store
}
</script>
<style type="text/css">
	body {
		background: #fff;
	}
	.fade-enter-active, .fade-leave-active {
		transition: opacity .5s;
	}
	.fade-enter, .fade-leave-to {
		opacity: 0;
	}
</style>