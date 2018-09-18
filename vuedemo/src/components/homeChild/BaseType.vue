<template>
	<div class="baseType">
		<h2>记得哟，每当读取一个基本类型的值的时候，后台就会创建一个对应的基本包装类型，从而是我们能够调用一些方法来操作这些数据。</h2>
		<div class="baseType-list" v-for="(baseData, index ) in baseDatas" :key="index" :class="{oddActive: index % 2 == 0}">
			<div class="baseType-title">
				<h3>{{baseData.name}}</h3>
			</div>
			<div class="baseType-content text-indent">
				<p>
					主要内容：{{baseData.content}}
				</p>
			</div>
			<div class="baseType-fun text-indent" v-if="baseData.function">
				<p>
					主要方法：{{baseData.function}}
				</p>
			</div>
			<div class="baseType-say text-indent lightblue-color">
				<p>
					轻松时刻♫：{{baseData.say}}
				</p>
			</div>
			<div class="baseType-children text-indent" v-for="(child, index) in baseData.children" :key="index" v-if="child.say">
				<div class="baseType-children-title">
					<p>
					函数名称：{{child.name}}
					</p>
				</div>
				<div class="baseType-children-title lightblue-color">
					<p>
					轻松时刻♫：{{child.say}}
					</p>
				</div>
			</div>
			<div class="baseType-es6 text-indent" v-if="baseData.es6">
				<p>
					es6内容：{{baseData.es6}}
				</p>
			</div>
		</div>		
	</div>
</template>
<script type="ecmascript-6">
import baseTypeData from '../../assets/data/baseData.json'
export default {
	name: 'BaseType',
	data() {
		return {
			baseTypeNav: [
				{"path": "/boolean", "name": "Boolean"},
				{"path": "/number", "name": "Number"},
				{"path": "/undefined", "name": "Undefined"},
				{"path": "/null", "name": "Null"},
				{"path": "/string", "name": "String"}
			],
			baseDatas: ''
		}
	},
	mounted() {
		let arr = []
		this.baseDatas = baseTypeData
		Object.keys(baseTypeData).forEach((key, index) => {
			arr.push({name: key, value: baseTypeData.name, id: index})
			console.log(arr);
		})
		console.log('arr==', arr)
	}
}
</script>
<style type="text/css">
	.baseType h2 {
		padding: 8px 0;
	}
  .lightblue-color {
  	color: #5f93ad;
  }
  .baseType-list {
    width: 100%;
  }
  .oddActive {
  	background: #f5f7f8;
  }
  .baseType-list {
  	position: relative;
    padding: 8px 0;
    font-size: 14px;
  }
  .baseType-list:after {
	 	position: absolute;
  	content: '';
  	width: 100%;
  	height: 2px;
  	bottom: 0;
  	border-bottom: 1px dashed #ccc; 
  }
  .baseType-title {
  	font-size: 18px;
  	font-weight: 600;
  }
  .text-indent {
    text-indent: 16px;
  }
</style>
