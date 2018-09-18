<template>
	<div class="wrap">
		<div class="wrap-title">
			<h3>js知识点</h3>
		</div>
		<div class="wrap-content" id="homeTree"></div>
		<div class="wrap-type">
			<router-link v-for="(type, index) in types" :to="type.path" :key="index" tag="span" class="types-link">{{type.name}}</router-link>
		</div>
			<transition	name="fade">
				<keep-alive>
					<router-view></router-view>
				</keep-alive>
			</transition>
	</div>
</template>

<script type="ecmascript-6">
import echart from 'echarts'
import treeflare from '../assets/js/treeflare'
import flaredata from '../assets/data/flare.json'
import baseType from './homeChild/BaseType'
import citeType from './homeChild/CiteType'
import singleObject from './homeChild/SingleObject'
import es6NewType from './homeChild/Es6NewType'
export default {
	name: 'Home',
	data() {
		return {
			types: [
			{"path": "/baseType", "name": "基本类型"},
			{"path": "/wrapType", "name": "基本包装类型"},
			{"path": "/home/citeType", "name": "引用类型"},
			{"path": "/singleObject", "name": "单体内置对象"},
			{"path": "/es6NewType", "name": "es6新增"}
			]
		}
	},
	created() {
	},
	mounted() {
		const title = "js的17种数据类型"
		let jsTreeId = document.querySelector('#homeTree')
		treeflare(jsTreeId, flaredata, title)
	},
	components: {
		baseType,
		citeType,
		singleObject,
		es6NewType
	}
}
</script>
<style type="text/css">
html, body {
	font-size: 16px; 
}
.wrap {
	padding: 0.375rem;
}
.wrap-title {
	position: relative;
	width: 100%;
	padding: 0.125rem;
}
.wrap-title:after {
	content: '';
	height: 0.125rem;
	width: 100%;
	position: absolute;
	bottom: -0.5rem;
	border-bottom: 0.0625rem dashed #ccc;
}
.wrap-content {
	height: 31.25rem;
	width: 100%;
}
.wrap-type {
	padding-top: 0.625rem;
	font-size: 0;
}
.wrap-type > .types-link {
	display: inline-block;
	border: 0.0625rem solid #ccc;
	border-radius: 1.25rem;
	margin: 0.125rem; 
	padding: 0.25rem;
	text-align: center;
	font-size: 0.875rem;
	color: #3E98C5;
}
.types-link.active {
  color: #fff;
}
.fade-enter-active, .fade-leave-active {
	transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
	opacity: 0;
}
</style>
