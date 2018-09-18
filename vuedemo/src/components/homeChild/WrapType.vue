<template>
  <div class="wrapType">
  	<h2>基本包装类型具有与各自的基本类型相对应的特殊行为。</h2>
  	<div class="wrapType-list" v-for="(wrapData,index) in wrapDatas" :key="index" :class="{oddActive: index %2 == 0}">
  		<div class="wrapType-title">
  			<h3>{{wrapData.name}}类型</h3>
  		</div>
  		<div class="text-indent">
				<p>
					主要内容：{{wrapData.content}}
				</p>
			</div>
			<div class="wrapType-fun text-indent" v-if="wrapData.function">
				<p>
					主要方法：{{wrapData.function}}
				</p>
			</div>
			<div class="wrapType-say text-indent lightblue-color">
				<p>
					轻松时刻♫：{{wrapData.say}}
				</p>
			</div>
			<div class="wrapType-children text-indent" v-for="(child, index) in wrapData.children" :key="index" v-if="child.id">
				<div class="wrapType-children-title">
					<p>
					相关函数：{{child.name}}
					</p>
				</div>
				<div class="wrapType-children-title lightblue-color">
					<p>
					轻松时刻♫：{{child.say}}
					</p>
				</div>
			</div>
			<div class="wrapType-es6 text-indent" v-if="wrapData.es6">
				<p>
					es6内容：{{wrapData.es6}}
				</p>
			</div>
  	</div>
  </div>
</template>
<script type="ecmascript-6">
import wrapData from "../../assets/data/wrapData.json"
export default {
	name: "WrapType",
	data() {
		return {
			wrapDatas: ''
		}
	},
	mounted() {
		this.wrapDatas = wrapData
	}
}
</script>
<style type="text/css">
	.wrapType h2 {
		padding: 8px 0;
	}
	.lightblue-color {
  	color: #5f93ad;
  }
  .wrapType-list {
    width: 100%;
  }
  .oddActive {
  	background: #f5f7f8;
  }
  .wrapType-list {
  	position: relative;
    padding: 8px 0;
    font-size: 14px;
  }
  .wrapType-list:after {
	 	position: absolute;
  	content: '';
  	width: 100%;
  	height: 2px;
  	bottom: 0;
  	border-bottom: 1px dashed #ccc; 
  }
  .wrapType-title {
  	font-size: 18px;
  	font-weight: 600;
  }
  .text-indent {
    text-indent: 16px;
  }
</style>