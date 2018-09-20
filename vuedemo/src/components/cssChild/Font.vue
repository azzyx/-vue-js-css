<template>
	<div>
		<div id="font" class="tree"></div>
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
	import fontData from '../../assets/data/fontData'
	export default {
		name: 'background',
		data() {
			return {
				dataLists: ''
			}
		},
		mounted() {
			this.dataLists = fontData
			const title = "css的字体属性"
			let jsTreeId = document.querySelector('#font')
			const data = {
				"name": "font",
				"children": [
					{ "id": 1, "name": "font" },
					{ "id": 2, "name": "font-weight" },
					{ "id": 3, "name": "font-style" },
					{ "id": 4, "name": "font-variant" },
					{ "id": 5, "name": "font-family" },
					{ "id": 6, "name": "font-size" }
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