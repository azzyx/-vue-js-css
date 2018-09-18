<template>
	<div class="nav">
		<ul>
			<router-link class="border-1px" v-for="(nav, key) in Navs" :to="nav.path" :key="key" tag="li">{{nav.text}}</router-link>
		</ul>
	</div>
</template>
<script type="ecmascript-6">
	export default {
		name: 'VuexHeaderNav',
		data() {
			return {
				Navs:[
					{"path": "/home", "text": "home"},
					{"path": "/css", "text": "css"},
					{"path": "/vue", "text": "VueList"}
				]
			}
		}
	}
</script>
<style type="text/css">
.active {
	background: #3E98C5;
	color: #fff;
}
ul {
	display: flex;
	list-style: none;
}
.border-1px {
	border-bottom: 1px solid #ccc;
}
@media (-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2) {
	.border-1px::after {
	  -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
	}
}
li {
	flex: 1;
	height: 40px;
	line-height: 40px;
	text-align: center;
}
</style>