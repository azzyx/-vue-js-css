<template>
	<div class="singleType">
		<h2>所谓的内置对象就是由ECMAScript实现提供的、不依赖宿主环境的对象，这些对象在ECMAScript程序执行之前就已经存在了。也就是说开发人员不必显示地实例化内置对象，因为他们已经实例化了。例如Object、Array、String</h2>
		<div class="singleType-list" v-for="(singleData, index ) in singleObj" :key="index" :class="{oddActive: index % 2 == 0}">
			<div class="singleType-title">
				<h3>{{singleData.name}}</h3>
			</div>
			<div class="singleType-content text-indent">
				<p>
					主要内容：{{singleData.content}}
				</p>
			</div>
			<div class="singleType-fun text-indent" v-if="singleData.function">
				<p>
					主要方法：{{singleData.function}}
				</p>
			</div>
			<div class="singleType-say text-indent lightblue-color" v-if="singleData.say">
				<p>
					轻松时刻♫：{{singleData.say}}
				</p>
			</div>
			<div class="singleType-children text-indent" v-for="(child, index) in singleData.children" :key="index" v-if="child.say">
				<div class="singleType-children-title">
					<p>
					名称：{{child.name}}
					</p>
				</div>
				<div class="singleType-children-title lightblue-color">
					<p>
					轻松时刻♫：{{child.say}}
					</p>
				</div>
			</div>
			<div class="singleType-es6 text-indent" v-if="singleData.es6">
				<p>
					es6内容：{{singleData.es6}}
				</p>
			</div>
		</div>	
	</div>
</template>
<script type="ecmascript-6">
import singleDatas from "../../assets/data/singleData.json"
	export default {
		name: 'SingleType',
		data() {
			return {
				singleTypeNav: [
					{"path": "/math", "name": "Math"},
					{"path": "/global", "name": "Global"}
				],
				singleObj: ''
			}
		},
		mounted() {
			this.singleObj = singleDatas
		}
	}
</script>
<style type="text/css">
	.singleType h2 {
		padding: 8px 0;
	}
  .lightblue-color {
  	color: #5f93ad;
  }
  .singleType-list {
    width: 100%;
  }
  .oddActive {
  	background: #f5f7f8;
  }
  .singleType-list {
  	position: relative;
    padding: 8px 0;
    font-size: 14px;
  }
  .singleType-list:after {
	 	position: absolute;
  	content: '';
  	width: 100%;
  	height: 2px;
  	bottom: 0;
  	border-bottom: 1px dashed #ccc; 
  }
  .singleType-title {
  	font-size: 18px;
  	font-weight: 600;
  }
  .text-indent {
    text-indent: 16px;
  }
</style>