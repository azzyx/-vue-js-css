<template>
	<div>
		<div id="dimen" class="tree"></div>
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
import dimenData from '../../assets/data/dimenData'
export default {
	data() {
		return {
			dataLists: ''
		}
	},
	mounted() {
		this.dataLists = dimenData
		const title = "css的6个尺寸属性"
		let jsTreeId = document.querySelector('#dimen')
		const data = {
			"name": "dimen",
			"children": [
				{ "id": 1, "name": "width" },
				{ "id": 2, "name": "min-width" },
				{ "id": 3, "name": "max-width" },
				{ "id": 4, "name": "height" },
				{ "id": 5, "name": "min-height" },
				{ "id": 6, "name": "max-height" }
			]
		}
		treeflare(jsTreeId, data, title);
	}
}
</script>
<style lang="scss">
	.oddActive {
  	background: #f5f7f8;
  }
	$height: 500px;
	.tree {
		height: $height;
		width: 100%;
	}
</style>