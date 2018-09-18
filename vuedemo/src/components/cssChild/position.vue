<template>
	<div>
		<div class="tree" id="pos"></div>
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
	import posData from '../../assets/data/positioning'
	export default {
		name: 'position',
		data() {
			return {
			dataLists: ''
			}
		},
		mounted() {
			this.dataLists = posData
			let arr = []
			/*Object.values(posData).forEach( (item, index) => {
				arr.push(item.value);
				console.log(item.value, index, arr)
			})*/
			const title = 'css的7个定位属性'
			const data = {
				"name": "position",
				"children": [
					{ "id": 1, "name": "position" },
					{ "id": 2, "name": "z-index" },
					{ "id": 3, "name": "top" },
					{ "id": 4, "name": "right" },
					{ "id": 5, "name": "bottom" },
					{ "id": 6, "name": "left" },
					{ "id": 7, "name": "css新属性cli" }
				]
			}
			let jsTreeId = document.querySelector('#pos')
			treeflare(jsTreeId, data, title);
		}
	}
</script>
<style type="text/css">
	.tree {
		height: 31.25rem;
		width: 100%;
	}
	.list {
		margin-bottom: 0.375rem;
		font-size: 1rem;
	}
	.flex-center {
		display: flex;
		flex-flow: row nowrap;
		align-content: center;
		justify-content: flex-start;
	}
	.oddActive {
  	background: #f5f7f8;
  }
</style>