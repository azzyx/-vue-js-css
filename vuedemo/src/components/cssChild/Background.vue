<template>
	<div>
		<div id="bg" class="tree"></div>
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
	import backgroundData from '../../assets/data/backgroundData'
	export default {
		name: 'background',
		data() {
			return {
				dataLists: ''
			}
		},
		mounted() {
			this.dataLists = backgroundData
			const title = "css的8个背景属性"
			let jsTreeId = document.querySelector('#bg')
			const data = {
				"name": "bg",
				"children": [
					{ "id": 1, "name": "background" },
					{ "id": 2, "name": "background-color" },
					{ "id": 3, "name": "background-image" },
					{ "id": 4, "name": "background-position" },
					{ "id": 5, "name": "background-attachment" },
					{ "id": 6, "name": "background-origin" },
					{ "id": 7, "name": "background-clip" },
					{ "id": 8, "name": "background-size" }
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