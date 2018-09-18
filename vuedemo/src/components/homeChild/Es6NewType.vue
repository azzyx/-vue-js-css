<template>
	<div class="newType">
		<h2>记得哟，每当读取一个基本类型的值的时候，后台就会创建一个对应的基本包装类型，从而是我们能够调用一些方法来操作这些数据。</h2>
		<div class="newType-list" v-for="(newData, index ) in newTypes" :key="index" :class="{oddActive: index % 2 == 0}">
			<div class="newType-title">
				<h3>{{newData.name}}</h3>
			</div>
			<div class="newType-content text-indent">
				<p>
					主要内容：{{newData.content}}
				</p>
			</div>
			<div class="newType-fun text-indent" v-if="newData.function">
				<p>
					主要方法：{{newData.function}}
				</p>
			</div>
			<div class="newType-say text-indent lightblue-color">
				<p>
					轻松时刻♫：{{newData.say}}
				</p>
			</div>
			<div class="newType-children text-indent" v-for="(child, index) in newData.children" :key="index" v-if="child.say">
				<div class="newType-children-title">
					<p>
					函数名称：{{child.name}}
					</p>
				</div>
				<div class="newType-children-title lightblue-color">
					<p>
					轻松时刻♫：{{child.say}}
					</p>
				</div>
			</div>
			<div class="newType-es6 text-indent" v-if="newData.es6">
				<p>
					es6内容：{{newData.es6}}
				</p>
			</div>
		</div>	
	</div>
</template>
<script type="ecmascript-6">
import es6NewType from '../../assets/data/es6NewType.json'
	export default {
		name: 'Es6NewType',
		data() {
			return {
				newTypeNav: [
					{"path": "/set", "name": "Set"},
					{"path": "/map", "name": "Map"}
				],
			newTypes: ''
			}
		},
		mounted() {
			this.newTypes = es6NewType
		}
	}
</script>
<style type="text/css">
	.newType h2 {
		padding: 8px 0;
	}
  .lightblue-color {
  	color: #5f93ad;
  }
  .newType-list {
    width: 100%;
  }
  .oddActive {
  	background: #f5f7f8;
  }
  .newType-list {
  	position: relative;
    padding: 8px 0;
    font-size: 14px;
  }
  .newType-list:after {
	 	position: absolute;
  	content: '';
  	width: 100%;
  	height: 2px;
  	bottom: 0;
  	border-bottom: 1px dashed #ccc; 
  }
  .newType-title {
  	font-size: 18px;
  	font-weight: 600;
  }
  .text-indent {
    text-indent: 16px;
  }
</style>

