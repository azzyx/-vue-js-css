<template>
	<div class="citeType">
		<h2>引用类型的值（对象）是引用类型的一个实例，在ECMASCript中引用类型是一种数据结构，用于将数据和功能组织在一起。</h2>
		<div class="citeType-list" v-for="(citeData, index ) in citeDatas" :key="index" :class="{oddActive: index % 2 == 0}">
			<div class="citeType-title">
				<h3>{{citeData.name}}</h3>
			</div>
			<div class="citeType-content text-indent">
				<p>
					主要内容：{{citeData.content}}
				</p>
			</div>
			<div class="citeType-fun text-indent" v-if="citeData.function">
				<p>
					主要方法：{{citeData.function}}
				</p>
			</div>
			<div class="citeType-say text-indent lightblue-color">
				<p>
					轻松时刻♫：{{citeData.say}}
				</p>
			</div>
			<div class="citeType-children text-indent" v-for="(child, index) in citeData.children" :key="index" v-if="child.say">
				<div class="citeType-children-title">
					<p>
					函数名称：{{child.name}}
					</p>
				</div>
				<div class="citeType-children-title lightblue-color">
					<p>
					轻松时刻♫：{{child.say}}
					</p>
				</div>
			</div>
			<div class="citeType-es6 text-indent" v-if="citeData.es6">
				<p>
					es6内容：{{citeData.es6}}
				</p>
			</div>
		</div>	
	</div>
</template>
<script type="ecmascript-6">
import citeTypeDatas from '../../assets/data/citeData.json'
	export default {
		name: 'CiteType',
		data() {
			return {
				citeTypeNav: [
					{"path": "/array", "name": "Array"},
					{"path": "/object", "name": "Object"},
					{"path": "/function", "name": "Function"},
					{"path": "/regexp", "name": "Regexp"},
					{"path": "/date", "name": "Date"}
				],
				citeDatas: ''
			}
		},
		mounted() {
			this.citeDatas = citeTypeDatas
		}
	}
</script>
<style type="text/css">
	.citeType h2 {
		padding: 8px 0;
	}
  .lightblue-color {
  	color: #5f93ad;
  }
  .citeType-list {
    width: 100%;
  }
  .oddActive {
  	background: #f5f7f8;
  }
  .citeType-list {
  	position: relative;
    padding: 8px 0;
    font-size: 14px;
  }
  .citeType-list:after {
	 	position: absolute;
  	content: '';
  	width: 100%;
  	height: 2px;
  	bottom: 0;
  	border-bottom: 1px dashed #ccc; 
  }
  .citeType-title {
  	font-size: 18px;
  	font-weight: 600;
  }
  .text-indent {
    text-indent: 16px;
  }
</style>
