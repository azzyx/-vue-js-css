<template>
	<div>
		<div id="color" class="tree"></div>
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
	import colorData from '../../assets/data/colorData'
	export default {
		name: 'background',
		data() {
			return {
				dataLists: ''
			}
		},
		mounted() {
			this.dataLists = colorData
			const title = "css的2个颜色属性"
			let jsTreeId = document.querySelector('#color')
			const data = {
				"name": "color",
				"children": [
					{ "id": 1, "name": "color" },
					{ "id": 2, "name": "opacity" }
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