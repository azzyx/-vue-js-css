<template>
	<div class="wrap">
		<div class="wrap-title">
			<h3>css知识点</h3>
		</div>
		<div class="wrap-type">
			<router-link v-for="(prop, index) in props" :to="prop.path" tag="span" class="types-link">{{prop.name}}</router-link>
		</div>
		<transition	name="fade">
				<keep-alive>
					<router-view></router-view>
				</keep-alive>
			</transition>
	</div>
</template>
<script type="ecmascript-6">
	import echart from 'echarts'
	import position from './cssChild/Position'
	import layout from './cssChild/Layout'
	export default {
		name: 'CSS',
		data() {
			return {
				props: [
					{"path": "/pos", "name": "定位"},
					{"path": "/layout", "name": "布局"}
				]
			}
			/*return {
				newsList: ''
			}*/
		},
		mounted() {
			/*let arr = []
			this.newsList = newsdata
			Object.keys(newsdata).forEach((key, index) => {
				arr.push({name: key, id: index})
				console.log(arr);
			})
			console.log('arr==', arr)*/
			/*this.fetchData();*/
		},
		methods: {
			/*fetchData() {
				axios.get('../assets/data/newsdata.json').then(res => {
					console.log('res.data', res.data)
					this.newsList = res.data
				}).catch(error => {
					console.log(error)
				})
			}*/

		},
		components: {
			position,
			layout
		}
	}
</script>
<style type="text/css">
html, body {
	font-size: 16px; 
}
.wrap {
	padding: 0.375rem;
}
.wrap-title {
	position: relative;
	width: 100%;
	padding: 0.125rem;
}
.wrap-title:after {
	content: '';
	height: 0.125rem;
	width: 100%;
	position: absolute;
	bottom: -0.5rem;
	border-bottom: 0.0625rem dashed #ccc;
}
.wrap-content {
	height: 31.25rem;
	width: 100%;
}
.wrap-type {
	padding-top: 0.625rem;
	font-size: 0;
}
.wrap-type > .types-link {
	display: inline-block;
	border: 0.0625rem solid #ccc;
	border-radius: 1.25rem;
	margin: 0.125rem; 
	padding: 0.25rem;
	text-align: center;
	font-size: 0.875rem;
	color: #3E98C5;
}
.types-link.active {
  color: #fff;
}
.fade-enter-active, .fade-leave-active {
	transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
	opacity: 0;
}
</style>