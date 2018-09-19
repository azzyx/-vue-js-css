<template>
	<div>
		<div id="pad" class="tree"></div>
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
<script type="ecmascript-6">
	import treeflare from '../../assets/js/treeflare'
	import paddingData from '../../assets/data/paddingData'
	export default {
		data() {
			return {
				dataLists: ''
			}
		},
		mounted() {
			this.dataLists = paddingData
			const title = "css的内补白属性"
			let jsTreeId = document.querySelector('#pad')
			const data = {
				"name": "padding",
				"children": [
					{ "id": 1, "name": "padding" },
					{ "id": 2, "name": "padding-top" },
					{ "id": 3, "name": "padding-right"},
					{ "id": 4, "name": "padding-bottom" },
					{ "id": 5, "name": "padding-left" }
				]
			}
			treeflare(jsTreeId, data, title)
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