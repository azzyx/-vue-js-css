<template>
	<div>
		<div id="out" class="tree"></div>
		<div v-for="(dataList, index) in dataLists" :class="{oddActive: index % 2 == 0}" class="list">
			<p class="flex-center"><span>{{index + 1}}、</span><span>{{dataList.name}}</span></p>
			<p class="flex-center"><span>{{dataList.value}}</span></p>
			<p class="flex-center"><span>{{dataList.fit}}</span></p>
			<p class="flex-center"><span>{{dataList.inherit}}</span></p>
			<p class="flex-center"><span>{{dataList.animation}}</span></p>
			<p class="flex-center"><span>{{dataList.compute}}</span></p>
			<p class="flex-center"><span>{{dataList.medium}}</span></p>
		</div>
	</div>
</template>
<script type="ecamscript-6">
	import treeflare from '../../assets/js/treeflare'
	import layoutData from '../../assets/data/layout'
	export default {
		name: 'Layout',
		data() {
			return {
				dataLists: ''
			}
		},
		mounted() {
			this.dataLists = layoutData
			const title = "css的7个布局属性"
			let jsTreeId = document.querySelector('#out')
			const data = {
				"name": "layout",
				"children": [
					{ "id": 1, "name": "display" },
					{ "id": 2, "name": "float" },
					{ "id": 3, "name": "clear" },
					{ "id": 4, "name": "visibility" },
					{ "id": 5, "name": "overflow" },
					{ "id": 6, "name": "overflow-x" },
					{ "id": 7, "name": "overflow-y" }
				]
			}
			treeflare(jsTreeId, data, title);
		}
	}
</script>
<style type="text/css">
	body, html {
		font-size: 16px;
	}
	.tree {
		height: 500px;
		width: 100%;
	}
</style>