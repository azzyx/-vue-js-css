<template>
	<div>
		<div id="margin" class="tree"></div>
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
<script type="esmascript-6">
	import treeflare from '../../assets/js/treeflare'
	import MarginData from '../../assets/data/marginData'
	export default {
		data() {
			return {
				dataLists: ''
			}
		},
		mounted() {
			this.dataLists = MarginData
			const title = "css的外补白属性"
			let jsTreeId = document.querySelector('#margin')
			const data = {
				"name": "margin",
				"children": [
					{ "id": 1, "name": "margin" },
					{ "id": 2, "name": "margin-top" },
					{ "id": 3, "name": "margin-right"},
					{ "id": 4, "name": "margin-bottom" },
					{ "id": 5, "name": "margin-left" }
				]
			}
			treeflare(jsTreeId, data, title);
		}
	}
</script>
<style lang="scss">
$height: 500px;
.tree {
	height: $height;
	width: 100%;
}
.oddActive {
  	background: #f5f7f8;
  }
</style>